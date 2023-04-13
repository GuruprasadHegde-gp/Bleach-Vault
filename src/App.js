import React from "react";
import { useRef } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Music from "./components/Music";
import Animation from "./components/Animation";
import Articles from "./components/Articles";
import Ebooks from "./components/Ebooks";
import Education from "./components/Education";
import Films from "./components/Films";
import Podcasts from "./components/Podcasts";
import ArtDrawing from "./components/ArtDrawing";
import ScrollToTopButton from "./components/ScrollToTop";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";

const App = () => {
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
        <Music />
      </div>
      <div className="animation-div" id="animation">
        <Animation />
      </div>
      <div className="ebooks-div" id="ebooks">
        <Ebooks />
      </div>
      <div className="artDrawing" id="art">
        <ArtDrawing />
      </div>
      <div className="artDrawing" id="podcast">
        <Podcasts />
      </div>
      <div className="artDrawing" id="article">
        <Articles />
      </div>
      <div className="artDrawing" id="education">
        <Education />
      </div>
      <div className="artDrawing" id="film">
        <Films />
      </div>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default App;
