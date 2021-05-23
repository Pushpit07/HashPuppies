import React, { Component } from 'react';
import Web3 from 'web3';
import HashPuppies from '../abis/HashPuppies.json';
import './App.css';
import Navbar from './Navbar';
import Main from './Main';
import CreatePup from './CreatePup';

const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			account: '',
			hashPuppies: null,
			totalSupply: 0,
			puppies: [],
			buffer: '',
			loading: true
		}

		this.createPuppy = this.createPuppy.bind(this);
		this.purchasePuppy = this.purchasePuppy.bind(this);
	}

	async componentWillMount() {
		await this.loadWeb3();
		await this.loadBlockchainData();
	}

	async loadWeb3() {
		if (window.ethereum) {
			window.web3 = new Web3(window.ethereum)
			await window.ethereum.enable()
		}
		else if (window.web3) {
			window.web3 = new Web3(window.web3.currentProvider)
		}
		else {
			window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
		}
	}

	async loadBlockchainData() {
		const web3 = window.web3
		// Load account
		const accounts = await web3.eth.getAccounts()
		this.setState({ account: accounts[0] })

		// Network ID
		const networkId = await web3.eth.net.getId()
		const networkData = HashPuppies.networks[networkId]

		if (networkData) {
			const hashPuppies = web3.eth.Contract(HashPuppies.abi, networkData.address)
			this.setState({ hashPuppies });
			const totalSupply = await hashPuppies.methods.totalSupply().call();
			this.setState({ totalSupply });

			// Load Puppies
			for (var i = 0; i < totalSupply; i++) {
				const puppy = await hashPuppies.methods.puppies(i).call()
				this.setState({
					puppies: [...this.state.puppies, puppy]
				})
			}
			console.log(this.state.puppies);
			this.setState({ loading: false });
		} else {
			window.alert('HashPuppies contract not deployed to detected network.')
		}
	}

	captureFile = event => {
		event.preventDefault();
		const file = event.target.files[0];
		const reader = new window.FileReader();
		reader.readAsArrayBuffer(file);

		reader.onloadend = () => {
			this.setState({ buffer: Buffer(reader.result) });
			console.log('buffer', this.state.buffer);
		}
	}

	createPuppy(name, price, exclusive) {
		ipfs.add(this.state.buffer, (error, result) => {
			console.log('ipfsResult', result);
			if (error) {
				console.error(error);
				return;
			}

			this.setState({ loading: true })
			this.state.hashPuppies.methods.createPuppy(name, price, result[0].hash, exclusive).send({ from: this.state.account })
				.on('transactionHash', (hash) => {
					// this.setState({ puppies: [...this.state.puppies, name] })
					this.setState({ loading: false });
				});
		});
	}

	purchasePuppy(id, price) {
		const _id = (parseInt(id) - 1).toString();
		this.setState({ loading: true });
		this.state.hashPuppies.methods.purchasePuppy(_id).send({ from: this.state.account, value: price })
			.once('receipt', (receipt) => {
				this.setState({ loading: false });
			});
	}

	render() {
		return (
			<div>
				<Navbar account={this.state.account} />
				<div className="container-fluid mt-5">
					<div className="row">
						<main role="main" className="col-lg-12 d-flex text-center mt-5">
							<div className="content mr-auto ml-auto mt-4">
								<h1>Hash Puppies</h1>
								<p>
									<code className="purple_text">Collectible PUPS</code>&nbsp; to  &nbsp;<code className="purple_text">HODL</code>
								</p>
							</div>
						</main>
					</div>
				</div>
				{ this.state.loading
					? <div id="loader" className="text-center mt-5"><p>Loading...</p></div>
					: <div>
						<CreatePup
							createPuppy={this.createPuppy}
							captureFile={this.captureFile}
						/>
						<Main
							puppies={this.state.puppies}
							purchasePuppy={this.purchasePuppy}
						/>
					</div>
				}
			</div>
		);
	}
}

export default App;
