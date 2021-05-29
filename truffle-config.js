require('babel-register');
require('babel-polyfill');
require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider({ mnemonic: { phrase: process.env.MNEMONIC }, providerOrUrl: `wss://ropsten.infura.io/ws/v3/${process.env.INFURA_API_KEY}` })
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 3,
      networkCheckTimeout: 999999,
      timeoutBlocks: 50000,
      skipDryRun: true
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
