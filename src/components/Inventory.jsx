import React from 'react'
import { contractAddress } from "./contractConfig";
import { contractAbi } from "./contractConfig";
import web3modal from "web3modal";
import axios from "axios";
import { ethers } from 'ethers';

const Inventory = () => {
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
        const data = await contract.fetchInventory();
        const items = await Promise.all(
            data.map(async (i) => {
                const tokenUri = await contract.uri(i.tokenId.toString());
                const meta = await axios.get(tokenUri);
                let price = ethers.utils.formatEther(i.price);
                let item = {
                    price,
                    name: meta.data.name,
                    tokenId: i.tokenId.toNumber(),
                    creator: i.creator,
                    supplyL: i.supplyleft.toNumber(),
                    cover: meta.data.cover,
                    file: meta.data.file,
                };
                console.log("inventory : ",item);
                return item;
            })
        );
        setMyItems(items);
        setLoaded(true);
    }

    // async function Download(_fileName, _fileUrl) {
    //     const name = _fileName;
    //     const fileUrl = _fileUrl;
    //     saveAs(fileUrl, name);
    // }



  return (
    <div>Inventory</div>
  )
}

export default Inventory