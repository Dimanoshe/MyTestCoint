/** @type import('hardhat/config').HardhatUserConfig */

const { alchemyApiKey, mnemonic } = require('./secrets.json');

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${alchemyApiKey}`,
      accounts: { mnemonic: mnemonic },
      saveDeployments: true,
    },
  },
};
require("@nomiclabs/hardhat-waffle");
