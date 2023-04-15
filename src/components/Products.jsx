import React, { useEffect, useState } from 'react'
import { contractAddress } from './contractConfig';
import { contractAbi } from "./contractConfig";
import axios from 'axios';
import web3modal from "web3modal";
import { ethers } from 'ethers';
import ProductDisplay from './ProductDisplay';



const Products = () => {

  const [myItems, setMyItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    myAssets();
  }, []);

  async function myAssets() {
    const modal = new web3modal({
      network: "mumbai",
      cacheProvider: true,
    });
    const connection = await modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      contractAbi.abi,
      signer
    );
    const data = await contract.fetchMyListings();

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await contract.uri(i.tokenId.toString());
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatEther(i.price);
        let item = {
          price,
          name: meta.data.name,
          tokenId: i.tokenId.toNumber(),
          supplyL: i.supplyleft.toNumber(),
          cover: meta.data.coverImageURI,
        };
        console.log(item.cover);

        return item;
      })
    );
    setMyItems(items);
    setLoaded(true);
  }
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //     const ALCHEMY_API='Pn9jMsebi5RV-MTVP2TiZmCoNgvGo5yV';
  //     // const ALCHEMY_API=`${process.env.ALCHEMY_ID}`;
  //     const address = contractAddress;
  //     console.log(address);
  //     console.log(ALCHEMY_API);

  // // Alchemy URL
  // const baseURL = `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API}`;
  // const url = `${baseURL}/getNFTs/?owner=${address}`;

  // const config = {
  //     method: 'get',
  //     url: url,
  // };

  // // Make the request and print the formatted response:
  // axios(config)
  //     .then(response => console.log(response['data']))
  //     .catch(error => console.log('error', error));
  // ------------------------------------------------------------------------------------------------------------------------

  return (
    <>
      <div>
        {
          myItems.map((item, key) => {
            return (
              <div key={key}>
                <ProductDisplay
                  name={item.name}
                  tokenId={item.tokenId}
                  left={item.supplyL}
                  cover={item.cover}
                  price={item.price}
                />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Products;