require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    testnet: {
      url: process.env.INFURA_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY],
    },
    hardhat: {
      forking: {
        enabled: true,
        url: "https://eth-mainnet.g.alchemy.com/v2/TXXNWvago-UaYdNsxL5ixPZOu9R8tqKe",
      },
      chainId: 1,
    },
  },
};
