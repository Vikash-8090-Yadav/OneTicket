
require ('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: "0.8.10",

  defaultNetwork: "scrollSepolia",
  networks:{
    hardhat:{},
    scrollSepolia: {
      gasPrice:800000000,
      url: "https://sepolia-rpc.scroll.io/" || "",
      chainId: 534351,
      accounts: ['5753e65f56865a161fbf41932a0d855139a4ce9dc20d82fb655bff393fc41702']
    },
  }
};
