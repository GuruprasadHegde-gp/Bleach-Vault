import React, { useEffect, useState } from 'react'
import { useRef } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Music from "./Music";
import Animation from "./Animation";
import Articles from "./Articles";
import Ebooks from "./Ebooks";
import Education from "./Education";
import Films from "./Films";
import Podcasts from "./Podcasts";
import ArtDrawing from "./ArtDrawing";
import ScrollToTopButton from "./ScrollToTop";
import { contractAddress } from './contractConfig';
import { contractAbi } from "./contractConfig";
import axios from 'axios';
import web3modal from "web3modal";
import { ethers } from 'ethers'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";

const Home = () => {
  const [myItems, setMyItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [musicNfts, setMusicNfts] = useState([]);
  const [animationNfts, setAnimationNfts] = useState([]);
  const [ebooksNfts, setEbooksNfts] = useState([]);
  const [artNfts, setArtNfts] = useState([]);
  const [podcastNfts, setPodcastNfts] = useState([]);
  const [articlesNfts, setArticleNfts] = useState([]);
  const [filmsNfts, setFilmsNfts] = useState([]);
  const [educationNfts, setEducationNfts] = useState([]);


  useEffect(() => {
    myAssets();
  }, [loaded]);

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
          category: i.category,
          content: meta.data.contentURI
        };
        return item;
      })
    );
    setMyItems(items);
    filterNFts();
  }

  function filterNFts() {
    myItems.map((nft) => {
      console.log(nft.category);
      if (nft.category === "Music") {
        return setMusicNfts(oldArray => [...oldArray, nft]);
      }
      if (nft.category === "Animation") {
        setAnimationNfts(oldArray => [...oldArray, nft]);
      }
      if (nft.category === "Ebooks") {
        setEbooksNfts(oldArray => [...oldArray, nft]);
      }
      if (nft.category === "Art") {
        setArtNfts(oldArray => [...oldArray, nft]);
      }
      if (nft.category === "Podcast") {
        setPodcastNfts(oldArray => [...oldArray, nft]);
      }
      if (nft.category === "Articles") {
        setArticleNfts(oldArray => [...oldArray, nft]);
      }
      if (nft.category === "Films") {
        setFilmsNfts(oldArray => [...oldArray, nft]);
      }
      if (nft.category === "Education") {
        setEducationNfts(oldArray => [...oldArray, nft]);
      }
    })
    setLoaded(true);
  }

  console.log(artNfts);

  const animationScroll = () => {
    scroller.scrollTo("animation", {
      duration: 1500,
      delay: 200,
      smooth: true,
    });
  };
  const musicScroll = () => {
    scroller.scrollTo("music", {
      duration: 1500,
      delay: 200,
      smooth: true,
    });
  };
  const artDrawingScroll = () => {
    scroller.scrollTo("art", {
      duration: 1500,
      delay: 200,
      smooth: true,
    });
  };

  const podcastsScroll = () => {
    scroller.scrollTo("podcast", {
      duration: 1500,
      delay: 200,
      smooth: true,
    });
  };
  const articlesScroll = () => {
    scroller.scrollTo("article", {
      duration: 1500,
      delay: 200,
      smooth: true,
    });
  };

  const educationScroll = () => {
    scroller.scrollTo("education", {
      duration: 1500,
      delay: 200,
      smooth: true,
    });
  };
  const filmsScroll = () => {
    scroller.scrollTo("film", {
      duration: 1500,
      delay: 200,
      smooth: true,
    });
  };
  const ebooksScroll = () => {
    scroller.scrollTo("ebooks", {
      duration: 1500,
      delay: 200,
      smooth: true,
    });
  };
  return (
    <>
      <NavBar
        onAnimationClick={animationScroll}
        onMusicClick={musicScroll}
        onEbooksClick={ebooksScroll}
        onArtClick={artDrawingScroll}
        onPodcastClick={podcastsScroll}
        onArticleClick={articlesScroll}
        onEducationClick={educationScroll}
        onFilmClick={filmsScroll}
      />
      <HeroSection />
      <div className="music-div" id="music">
        <Music
          items={musicNfts} />
      </div>
      <div className="animation-div" id="animation">
        <Animation
          items={animationNfts} />
      </div>
      <div className="ebooks-div" id="ebooks">
        <Ebooks
          items={ebooksNfts} />
      </div>
      <div className="artDrawing" id="art">
        <ArtDrawing
          items={artNfts} />
      </div>
      <div className="artDrawing" id="podcast">
        <Podcasts
          items={podcastNfts} />
      </div>
      <div className="artDrawing" id="article">
        <Articles
          items={articlesNfts} />
      </div>
      <div className="artDrawing" id="education">
        <Education
          items={educationNfts} />
      </div>
      <div className="artDrawing" id="film">
        <Films
          items={filmsNfts} />
      </div>
      <ScrollToTopButton />
      <Footer />
    </>

  )
}

export default Home;