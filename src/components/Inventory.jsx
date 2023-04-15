import React from 'react'
import { contractAddress } from './contractConfig';

const Inventory = () => {
    const ALCHEMY_API=process.env.ALCHEMY_KEY;
    const address = contractAddress;

// Alchemy URL
const baseURL = `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API}`;
const url = `${baseURL}/getNFTs/?owner=${address}`;

const config = {
    method: 'get',
    url: url,
};

// Make the request and print the formatted response:
axios(config)
    .then(response => console.log(response['data']))
    .catch(error => console.log('error', error));
    
  return (
    <div>idu Inventory</div>
  )
}

export default Inventory