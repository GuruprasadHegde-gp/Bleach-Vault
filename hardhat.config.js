/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY=process.env.ALCHEMY_ID;
const PRIVATE_KEY_POLYGON=process.env.PRIVATE_KEY;

module.exports = {
  networks:{
    mumbai: { 
      url:`https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[`${PRIVATE_KEY_POLYGON}`]
    }, 
  },
  solidity: { 
    version: "0.8.4", 
  } 
};
