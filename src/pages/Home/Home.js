import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Portfolio from "./Portfolio";
import "./home.css";

import { FiInstagram } from "react-icons/fi";
import { TfiYoutube } from "react-icons/tfi";
import { MdFacebook } from "react-icons/md";

const Home = () => {
  return (
    <>
      <NavBar />
      <Article />
      <Portfolio />
      <Footer />
    </>
  );
};
const Article = () => {
  return (
    <div className="main">
      <div className="bg_content">
        <h3>
          HI, MY NAME IS <span>RAJESH</span> AND I LOVE
        </h3>
        <h1 className="bg_heading">
          <Typewriter
            words={["Photography", "Painting", "Video Editing", "Sketching"]}
          />
        </h1>
      </div>

      <div className="overlay"></div>
      {/* this overlay class is for dimming image */}
      <div className="social_icons">
        <span className="fb">
          <a href="https://www.facebook.com/hsejar.maharjan">
            <MdFacebook color="#1876F3" />
          </a>
        </span>
        <span className="yt">
          <a href="https://www.facebook.com/hsejar.maharjan">
            <TfiYoutube color="red" />
          </a>
        </span>
        <span className="ig">
          <a href="https://www.instagram.com/strawart2021/">
            <FiInstagram color="#5D5C5D" />
          </a>
        </span>
      </div>
    </div>
  );
};
function Typewriter(props) {
  const [wordIndex, setWordIndex] = React.useState(0);
  const [word, setWord] = React.useState(props.words[wordIndex]);
  const [visibleCharacters, setVisibleCharacters] = React.useState("");
  const [charLength, setCharLength] = React.useState(0);
  const [isIncreasing, setIsIncreasing] = React.useState(true);
  const [delay, setDelay] = React.useState(0);

  const nextWord = () => {
    let nextIndex = wordIndex + 1;
    if (nextIndex >= props.words.length) {
      nextIndex = 0;
    }
    setWordIndex(nextIndex);
    setWord(props.words[nextIndex]);
  };

  const checkLength = () => {
    if (isIncreasing && visibleCharacters.length >= word.length) {
      setDelay(15);
      setIsIncreasing(false);
    } else if (!isIncreasing && visibleCharacters.length === 0) {
      setIsIncreasing(true);
      nextWord();
      setDelay(5);
    }
  };

  const updateLength = () => {
    if (isIncreasing) {
      return setCharLength(charLength + 1);
    }

    setCharLength(charLength - 1);
  };

  const updateCharacters = () => {
    if (delay > 0) {
      setDelay(delay - 1);
    } else {
      checkLength();
      updateLength();
      setVisibleCharacters(word.substring(0, charLength));
    }
  };

  React.useEffect(() => {
    const typingInterval = setInterval(updateCharacters, 100);

    return function () {
      clearInterval(typingInterval);
    };
  });

  return (
    <div className="typewriter">
      <h1>{visibleCharacters}</h1>
    </div>
  );
}

export default Home;
