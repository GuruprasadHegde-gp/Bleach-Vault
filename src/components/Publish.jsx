import React, { useState } from "react";
import publishLogo from "../images/publish-logo.png";
import AnimationLogo from "../images/animation-logo.png";
import artLogo from "../images/art-logo.png";
import articlesLogo from "../images/articles-logo.png";
import educationLogo from "../images/education-logo.png";
import ebookLogo from "../images/ebook-logo.png";
import musicLogo from "../images/music-logo.png";
import podcatLogo from "../images/podcast-logo.png";
import filmsLogo from "../images/films-logo.png";

const Publish = () => {
    const [FormCredentials, setFormCredentials] = useState({
        name: " ",
        price: " ",
        category: " ",
        supply: " ",
        coverImg: null,
        content: null,
    });

    const [isAnimationActive, setIsAnimationActive] = useState(false);
    const [isMusicActive, setIsMusicActive] = useState(false);
    const [isEbooksActive, setIsEbooksActive] = useState(false);
    const [isPodcastActive, setIsPodcastActive] = useState(false);
    const [isEducationtActive, setIsEducationActive] = useState(false);
    const [isFilmsActive, setIsFilmsActive] = useState(false);
    const [isDrawingActive, setIsDrawingActive] = useState(false);
    const [isArticlesActive, setIsArticlesActive] = useState(false);

    const animationClickHandle = () => {
        setIsMusicActive(false);
        setIsEbooksActive(false);
        setIsPodcastActive(false);
        setIsEducationActive(false);
        setIsFilmsActive(false);
        setIsDrawingActive(false);
        setIsArticlesActive(false);
        setIsAnimationActive(true);
        setFormCredentials({
            ...FormCredentials,
            category: "Animation",
        });
    };

    const musicClickHandle = () => {
        setIsAnimationActive(false);
        setIsEbooksActive(false);
        setIsPodcastActive(false);
        setIsEducationActive(false);
        setIsFilmsActive(false);
        setIsDrawingActive(false);
        setIsArticlesActive(false);
        setIsMusicActive(true);
        setFormCredentials({
            ...FormCredentials,
            category: "Music",
        });
    };

    const ebooksClickHandle = () => {
        setIsAnimationActive(false);
        setIsMusicActive(false);
        setIsPodcastActive(false);
        setIsEducationActive(false);
        setIsFilmsActive(false);
        setIsDrawingActive(false);
        setIsArticlesActive(false);
        setIsEbooksActive(true);
        setFormCredentials({
            ...FormCredentials,
            category: "Ebooks",
        });
    };

    const podcastClickHandle = () => {
        setIsAnimationActive(false);
        setIsMusicActive(false);
        setIsEbooksActive(false);
        setIsEducationActive(false);
        setIsFilmsActive(false);
        setIsDrawingActive(false);
        setIsArticlesActive(false);
        setIsPodcastActive(true);
        setFormCredentials({
            ...FormCredentials,
            category: "Podcast",
        });
    };

    const educationClickHandle = () => {
        setIsAnimationActive(false);
        setIsMusicActive(false);
        setIsEbooksActive(false);
        setIsPodcastActive(false);
        setIsFilmsActive(false);
        setIsDrawingActive(false);
        setIsArticlesActive(false);
        setIsEducationActive(true);
        setFormCredentials({
            ...FormCredentials,
            category: "Education",
        });
    };

    const filmsClickHandle = () => {
        setIsAnimationActive(false);
        setIsMusicActive(false);
        setIsEbooksActive(false);
        setIsPodcastActive(false);
        setIsEducationActive(false);
        setIsDrawingActive(false);
        setIsArticlesActive(false);
        setIsFilmsActive(true);
        setFormCredentials({
            ...FormCredentials,
            category: "Films",
        });
    };

    const drawingClickHandle = () => {
        setIsAnimationActive(false);
        setIsMusicActive(false);
        setIsEbooksActive(false);
        setIsPodcastActive(false);
        setIsEducationActive(false);
        setIsFilmsActive(false);
        setIsArticlesActive(false);
        setIsDrawingActive(true);
        setFormCredentials({
            ...FormCredentials,
            category: "Art",
        });
    };

    const articlesClickHandle = () => {
        setIsAnimationActive(false);
        setIsMusicActive(false);
        setIsEbooksActive(false);
        setIsPodcastActive(false);
        setIsEducationActive(false);
        setIsFilmsActive(false);
        setIsDrawingActive(false);
        setIsArticlesActive(true);
        setFormCredentials({
            ...FormCredentials,
            category: "Articles",
        });
    };

    console.log(FormCredentials.name);
    console.log(FormCredentials.supply);
    console.log(FormCredentials.price);
    return (
        <>
            <div className="bg-educationColor font-Gothic text-lg h-36 rounded-md m-auto flex items-center px-10 border border-black mt-12 w-screen">
                <img
                    src={publishLogo}
                    alt="musicLogo"
                    className="max-w-full max-h-full object-contain"
                />
                <div className="flex flex-col ml-4 px-3">
                    <h1 className="text-5xl">Publish & Mint</h1>
                    <p className=" pt-2">
                        Make some selections, fill in some boxes, and make your NFT live in
                        minutes
                    </p>
                </div>
            </div>
            <div className=" font-Gothic  w-full  h-max bg-heroColor mt-24 border border-black rounded-md text-xl">
                <div className=" px-11 py-11">
                    <p>Name</p>
                    <input
                        type="text"
                        name="name"
                        onChange={(event) => {
                            setFormCredentials({
                                ...FormCredentials,
                                name: event.target.value,
                            });
                        }}
                        placeholder="Enter The Product Name"
                        required
                        className=" w-full rounded-lg mt-4 h-16   text-left px-5"
                    />
                    <div className=" h-235 px-30">
                        <p className=" mt-9 mb-8">Type</p>
                        <div className="grid grid-cols-4 gap-10">
                            <div>
                                <div
                                    className="mt-15 w-190 h-35 rounded-md flex border border-black overflow-hidden cursor-pointer shadow-none"
                                    onClick={animationClickHandle}
                                    style={{
                                        backgroundColor: isAnimationActive
                                            ? "rgba(35, 160, 148, 1)"
                                            : "",
                                        boxShadow: isAnimationActive ? "2px 2px 0px black" : "",
                                    }}
                                >
                                    <div className="w-60 h-full px-4  flex justify-center items-center space-x-4">
                                        <img src={AnimationLogo} alt="" className="  w-14" />
                                        <p>Animation</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="mt-15 w-190 h-35 rounded-md flex border border-black overflow-hidden cursor-pointer shadow-none"
                                    onClick={drawingClickHandle}
                                    style={{
                                        backgroundColor: isDrawingActive
                                            ? "rgba(35, 160, 148, 1)"
                                            : "",
                                        boxShadow: isDrawingActive ? "2px 2px 0px black" : "",
                                    }}
                                >
                                    <div className="w-60 h-full px-4  flex justify-center items-center space-x-4">
                                        <img src={artLogo} alt="" className="  w-14" />
                                        <p>Art & Drawing</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="mt-15 w-190 h-35 rounded-md flex border border-black overflow-hidden cursor-pointer shadow-none"
                                    onClick={articlesClickHandle}
                                    style={{
                                        backgroundColor: isArticlesActive ? 'rgba(35, 160, 148, 1)' : '',
                                        boxShadow: isArticlesActive ? '2px 2px 0px black' : ''
                                    }}>
                                    <div className="w-60 h-full px-4  flex justify-center items-center space-x-4">
                                        <img src={articlesLogo} alt="" className="  w-14" />
                                        <p>Articles</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="mt-15 w-190 h-35 rounded-md flex border border-black overflow-hidden cursor-pointer shadow-none"
                                    onClick={ebooksClickHandle}
                                    style={{
                                        backgroundColor: isEbooksActive ? 'rgba(35, 160, 148, 1)' : '',
                                        boxShadow: isEbooksActive ? '2px 2px 0px black' : ''
                                    }}>
                                    <div className="w-60 h-full px-4  flex justify-center items-center space-x-4">
                                        <img src={ebookLogo} alt="" className="  w-14" />
                                        <p>Ebooks</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="mt-15 w-190 h-35 rounded-md flex border border-black overflow-hidden cursor-pointer shadow-none"
                                    onClick={educationClickHandle}
                                    style={{
                                        backgroundColor: isEducationtActive ? 'rgba(35, 160, 148, 1)' : '',
                                        boxShadow: isEducationtActive ? '2px 2px 0px black' : ''
                                    }}>
                                    <div className="w-60 h-full px-4  flex justify-center items-center space-x-4">
                                        <img src={educationLogo} alt="" className="  w-14" />
                                        <p>Education</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="mt-15 w-190 h-35 rounded-md flex border border-black overflow-hidden cursor-pointer shadow-none"
                                    onClick={filmsClickHandle}
                                    style={{
                                        backgroundColor: isFilmsActive ? 'rgba(35, 160, 148, 1)' : '',
                                        boxShadow: isFilmsActive ? '2px 2px 0px black' : ''
                                    }}>
                                    <div className="w-60 h-full px-4  flex justify-center items-center space-x-4">
                                        <img src={filmsLogo} alt="" className="  w-14" />
                                        <p>Films</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="mt-15 w-190 h-35 rounded-md flex border border-black overflow-hidden cursor-pointer shadow-none"
                                    onClick={musicClickHandle}
                                    style={{
                                        backgroundColor: isMusicActive ? 'rgba(35, 160, 148, 1)' : '',
                                        boxShadow: isMusicActive ? '2px 2px 0px black' : ''
                                    }}>
                                    <div className="w-60 h-full px-4  flex justify-center items-center space-x-4">
                                        <img src={musicLogo} alt="" className="  w-14" />
                                        <p>Music</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="mt-15 w-190 h-35 rounded-md flex border border-black overflow-hidden cursor-pointer shadow-none"
                                    onClick={podcastClickHandle}
                                    style={{
                                        backgroundColor: isPodcastActive ? 'rgba(35, 160, 148, 1)' : '',
                                        boxShadow: isPodcastActive ? '2px 2px 0px black' : ''
                                    }}>
                                    <div className="w-60 h-full px-4  flex justify-center items-center space-x-4">
                                        <img src={podcatLogo} alt="" className="  w-14" />
                                        <p>Podcasts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 h-28 grid-cols-2 grid mt-8">
                        <div className=" flex flex-col pr-32">
                            <p>Price</p>
                            <input
                                type="text"
                                placeholder="2 MATIC"
                                required
                                className=" mt-2 rounded-lg w-96  text-left px-5"
                                onChange={(event) => {
                                    setFormCredentials({
                                        ...FormCredentials,
                                        price: event.target.value
                                    })
                                }}
                            />
                        </div>
                        <div>
                            <p>Copies</p>
                            <input
                                type="text"
                                placeholder="1"
                                required
                                className=" mt-2 rounded-lg w-96 text-left px-5"
                                onChange={(event) => {
                                    setFormCredentials({
                                        ...FormCredentials,
                                        supply: event.target.value
                                    })
                                }}
                            />
                        </div>
                    </div>
                    <div className=" grid grid-cols-2 gap-40 h-280px">
                        <div className=" flex flex-col">
                            <p>Cover Image</p>
                            <div className=" mt-8 w-full h-96 border-dashed border-black border-2 rounded-lg bg-white flex flex-col justify-center items-center">
                                <div className=" flex items-end">
                                    <input type="file" id="cover" className=" ml-24" />
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col">
                            <p>Content</p>
                            <div className=" mt-8 w-full h-96 border-dashed border-black border-2 rounded-lg bg-white flex flex-col justify-center items-center">
                                <div className=" flex items-end">
                                    <input type="file" id="cover" className=" ml-24" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className=" font-Gothic bg-black text-white  w-96 rounded-lg mb-9 h-10 ml-96">
                    Mint Token
                </button>
            </div>
        </>
    );
};
export default Publish;
