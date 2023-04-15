import React from 'react'
import { contractAddress } from './contractConfig';
import axios from 'axios';


const Products = () => {
    const ALCHEMY_API='Pn9jMsebi5RV-MTVP2TiZmCoNgvGo5yV';
    // const ALCHEMY_API=`${process.env.ALCHEMY_ID}`;
    const address = contractAddress;
    console.log(address);
    console.log(ALCHEMY_API);

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
    <div>idu Products</div>
  )
}

export default Products;