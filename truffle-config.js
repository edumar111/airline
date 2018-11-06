const HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = 'brand tail can skill write cash order dad robot omit history clay';

module.exports = {
    networks: {
        development: {
            host: 'localhost',
            port: 7545,
            network_id: '*',
            gas: 3000000
        },
        rinkeby: {
            provider: () => new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/d28d067b389343e493fc51a68c8c38ef"),
            network_id: 4,
        },
        production: {
            provider: () => new HDWalletProvider(mnemonic, "http://35.231.124.87:8545"),
            network_id: '19'
        }
    }
}