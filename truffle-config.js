require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hidden swift trip lizard rival six concert grace glide force genius'; 
let testAccounts = [
"0x9766433a756a56cb2c8db8d730e4949f27b232e9c9748c56819220471ffc9502",
"0xec550f19695d77f3772666c45131adeb5bff7c7810acb149c710a98233a6acac",
"0x3fba35d7e5e6de14aaa351609b17d8266cdf4217615f8a5e23d68beeb9f41dc4",
"0x484fc6b69fb878cad01e244dfb95d3ced9dc6bea5353299978178d558fb1eed9",
"0x0f9af7133aae6e1cd9ffe3589f1eb5c905cd6ca3cefa700cd920a8cc385e9539",
"0x5ca40f0f7cf8e53d394272d83054926551c4d8c1d7af2e8eab39c7fe400b3787",
"0x1dd566dbe572d604fefe64913325c17b3d2c113fc0bf7855d9384150f0cf0412",
"0x64004d2b2f4cc246c0edd0720f78ae5ef8c8bb3396e07d25bd7293550007a2aa",
"0x11a665d7212929f2c31ff380f964ff34657cc48ccd0044be1d48580709e966f2",
"0xd5758a8fb5333c322b5fa6f8466acf161ef8893e6b0344af46ffb0d73724d86e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
