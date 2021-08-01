require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remember unique install basket frame gaze'; 
let testAccounts = [
"0x8a4dbb268b9712dea06bcafcf53699595b3028b1ba73dd627bf7093b36695764",
"0x16bca504576af9870deab6d2f7e9ac565a6c6075010f026024aadbcc9d1d6a93",
"0xba73deebca77637a7756b97d3512d3b1993830b432f896f8c98138e92f763635",
"0x9dbec84ade524394bb46dbb5e453ee84c0fdc44a38cf43df96bc8bd13e932140",
"0xdaf6a83eed4f202de28676f83b9695cdfd8f3de5a6a5c90e2dbff698a1f84df2",
"0xb45a967281b57e035ab365be1dd5e4f6628e48bb51ef21f842622f6fc82de936",
"0xa7fd573715ac1f4c1ef3cfc630f40a84d12ee14342a595695a0660eb4a62be7f",
"0xaecd100b605f6b06967674ecfedd1e635d1b35fdb58ed5a900bdc33d314c557f",
"0xee840bb51ff399b5682a6824af231d3dc09a4ee2e19df1ef20bf6dc94c8fe68a",
"0x041412fb540235e21fcf7b2b09f982c98eb13d569704c485956e2e548e418eb5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


