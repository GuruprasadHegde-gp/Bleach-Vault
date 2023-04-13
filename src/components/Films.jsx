import React from "react";
import musicLogo from "../images/music-logo.png";

const Films = () => {
    return (
        <div>
            <div className=" h-screen">
                <div className="bg-filmColor font-Gothic text-lg h-36 rounded-md m-auto flex items-center px-10 border border-black">
                    <img src={musicLogo} alt="musicLogo" className="max-w-full max-h-full object-contain" />
                    <div className="flex flex-col ml-4 px-3">
                        <h1 className="text-5xl">Films</h1>
                        <p className=" pt-2">No middle man Cutting Your Sales.Create Buy Sell and Earn with Your Music NFT's</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Films;
