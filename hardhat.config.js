/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const ALCHEMY_API_KEY=process.env.ALCHEMY_ID;
const PRIVATE_KEY_POLYGON=process.env.PRIVATE_KEY;

// console.log(ALCHEMY_API_KEY,PRIVATE_KEY_POLYGON);

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
