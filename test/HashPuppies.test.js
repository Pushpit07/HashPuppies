const HashPuppies = artifacts.require('./HashPuppies.sol');

require('chai')
    .use(require('chai-as-promised'))
    .should();

contract('HashPuppies', ([deployer, seller, buyer]) => {
    let contract;

    before(async () => {
        contract = await HashPuppies.deployed();
    });

    describe('deployment', async () => {
        it('deploys successfully', async () => {
            const address = contract.address;
            assert.notEqual(address, 0x0);
            assert.notEqual(address, '');
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
        });

        it('has a name', async () => {
            const name = await contract.name();
            assert.equal(name, 'HashPuppies');
        });

        it('has a symbol', async () => {
            const symbol = await contract.symbol();
            assert.equal(symbol, 'PUPS');
        });
    });

    describe('puppies', async () => {
        describe('minting', async () => {
            it('creates a new token', async () => {
                const result = await contract.createPuppy('Shiro', web3.utils.toWei('1', 'Ether'), 'abc123', 0, { from: seller });
                const totalSupply = await contract.totalSupply();
                // SUCCESS
                assert.equal(totalSupply, 1);
                const event = result.logs[0].args;
                assert.equal(event.tokenId.toNumber(), 1, 'id is correct');
                assert.equal(event.from, '0x0000000000000000000000000000000000000000', 'from is correct');
                assert.equal(event.to, seller, 'to is correct');

                // Failure: Puppy must have a name
                await contract.createPuppy('', web3.utils.toWei('1', 'Ether'), 'abc123', 0, { from: seller }).should.be.rejected;

                // FAILURE: cannot mint same puppy twice
                await contract.createPuppy('Shiro', web3.utils.toWei('1', 'Ether'), 'abc123', 0, { from: seller }).should.be.rejected;
            });
        });

        describe('indexing', async () => {
            it('lists puppies', async () => {
                // Mint 3 more tokens
                await contract.createPuppy('Einie', web3.utils.toWei('2', 'Ether'), 'abc123', 0, { from: seller });
                await contract.createPuppy('Ruby', web3.utils.toWei('5', 'Ether'), 'abc123', 0, { from: seller });
                await contract.createPuppy('Rob', web3.utils.toWei('1', 'Ether'), 'abc123', 0, { from: seller });
                const totalSupply = await contract.totalSupply();

                let puppy;
                let result = [];

                for (var i = 0; i < totalSupply; i++) {
                    puppy = await contract.puppies(i);
                    result.push(puppy.name);
                }

                let expected = ['Shiro', 'Einie', 'Ruby', 'Rob'];
                assert.equal(result.join(','), expected.join(','));
            });
        });

        describe('purchase', async () => {
            let puppiesCount;

            before(async () => {
                puppiesCount = await contract.puppiesCount();
                puppiesCount = puppiesCount.toNumber();
            });

            it('sells puppies', async () => {
                // Track seller balance before purchase
                let oldSellerBalance;
                oldSellerBalance = await web3.eth.getBalance(seller);
                oldSellerBalance = new web3.utils.BN(oldSellerBalance);

                //Success: Buyer makes purchase
                const result = await contract.purchasePuppy(puppiesCount - 1, { from: buyer, value: web3.utils.toWei('1', 'Ether') });

                // Check logs
                const event = result.logs[0].args;
                assert.equal(event.id.toNumber(), puppiesCount, 'id is correct');
                assert.equal(event.name, 'Rob', 'name is correct');
                assert.equal(event.price, web3.utils.toWei('1', 'Ether'), 'price is correct');
                assert.equal(event.owner, buyer, 'owner is correct');
                assert.equal(event.purchased, true, 'purchased is correct');

                // Check that seller received funds
                let newSellerBalance;
                newSellerBalance = await web3.eth.getBalance(seller);
                newSellerBalance = new web3.utils.BN(newSellerBalance);

                let price;
                price = web3.utils.toWei('1', 'Ether');
                price = new web3.utils.BN(price);

                const expectedBalance = oldSellerBalance.add(price);
                assert.equal(newSellerBalance.toString(), expectedBalance.toString());

                // Failure: Tries to buy a puppy that does not exist- Must have valid id
                await contract.purchasePuppy(99, { from: buyer, value: web3.utils.toWei('1', 'Ether') }).should.be.rejected;
                // Failure: Tries to buy without enough ether
                await contract.purchasePuppy(puppiesCount - 1, { from: buyer, value: web3.utils.toWei('0.5', 'Ether') }).should.be.rejected;
                // Failure: Deployer tried to buy the puppy- Puppy cannot be purchased twice
                await contract.purchasePuppy(puppiesCount - 1, { from: deployer, value: web3.utils.toWei('0.5', 'Ether') }).should.be.rejected;
                // Failure: Buyer tries to buy again- Buyer can't be the seller
                await contract.purchasePuppy(puppiesCount - 1, { from: buyer, value: web3.utils.toWei('0.5', 'Ether') }).should.be.rejected;
            });
        });
    });
});