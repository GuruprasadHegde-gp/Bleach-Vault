import React from "react";
import musicLogo from "../images/music-logo.png";
import musciCover from "../images/music-nightclub-1420666.jpg"

const Music = () => {
    return (
        <div>
            <div className=" h-screen border-b border-black ">
                <div className="bg-musicColor font-Gothic text-lg h-36 rounded-md m-auto flex items-center px-10 border border-black">
                    <img src={musicLogo} alt="musicLogo" className="max-w-full max-h-full object-contain" />
                    <div className="flex flex-col ml-4 px-3">
                        <h1 className="text-5xl">Music</h1>
                        <p className=" pt-2">No middle man Cutting Your Sales.Create Buy Sell and Earn with Your Music NFT's</p>
                    </div>
                </div>
                <div className=" font-Gothic grid grid-cols-4 gap-60 mt-12 ml-12 ">
                    <div className=" h-max w-96 bg-heroColor  rounded-xl p-8 border border-black hover:scale-110 transition-border duration-700">
                        <div className=" border-b border-black ">
                            <img src={musciCover} alt="" className=" object-contain max-w-full max-h-full  border-b border-black pb-4" />
                        </div>
                        <div className=" text-xl mt-4">
                            Jazz Music
                        </div>
                        <div className=" mt-4 flex justify-between">
                            <p>Price</p>
                            <p>Remaining</p>
                        </div>
                        <div className=" mt-3 flex justify-between">
                            <p>3.5 MATIC</p>
                            <p>9</p>
                        </div>
                        <div className="">
                            <button className=" mt-4 rounded-lg bg-black text-white w-full h-14">
                                Buy Now
                            </button>
                        </div>

                    </div>
                    <div className=" h-96 w-96 bg-heroColor rounded-xl">
                        Hey there
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Music;
