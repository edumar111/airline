const HDWalletProvider = = require("truffle-hdwallet-provider");

var mnemonic = 'shell traffic raven bulb route clip pelican rich cross seek ball reopen';
module.exports = {
    networks: {
        development: {
            host: 'localhost',
            port: 7545,
            network_id: '*',
            gas: 2000000
        },
        rinkeby: {
            provider: network_id: 4,
        }
    }
}