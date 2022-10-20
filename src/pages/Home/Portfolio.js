import React, { useRef, useEffect } from "react";
import "./home.css";

import { Button } from "react-bootstrap";
import { TweenMax, Power3 } from "gsap";

import bg from "../../assets/diamond.png";
import I1 from "../../assets/collection/I1.png";
import I2 from "../../assets/collection/I2.png";
import I3 from "../../assets/collection/I3.png";
import I4 from "../../assets/collection/I4.png";
import I5 from "../../assets/collection/I5.png";

const Portfolio = () => {
  let image1 = useRef(null);
  let image2 = useRef(null);
  let image3 = useRef(null);
  let image4 = useRef(null);
  let image5 = useRef(null);
  useEffect(() => {});
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("header").style.width = "100px";
    } else {
      document.getElementById("header").style.width = "200px";
    }
    const bodyTop = document.documentElement.scrollTop;
    const portfolio = document.querySelector(".porfolio").offsetTop - 200;
    const portfolio_images =
      document.querySelector(".portfolio_images").offsetTop - 300;
    if (bodyTop > portfolio) {
      document.querySelector(".line").style.width = "90%";
      document.querySelector("#diamond").style.transform = "rotate(360deg)";
    } else {
      document.querySelector(".line").style.width = "0%";
      document.querySelector("#diamond").style.transform = "rotate(0deg)";
    }
    if (bodyTop > portfolio_images) {
      // document.querySelector(".portfolio_images").style.transform =
      //   "translate(0px,0px)";
      TweenMax.staggerTo(
        [image1, image2, image3, image4, image5],
        0.8,
        {
          opacity: 1,
          y: 0,
          ease: Power3.easeOut,
        },
        0.2
      );
    }
     else {
       TweenMax.staggerTo(
         [image1, image2, image3, image4, image5],
         0.8,
         {
           opacity: 0,
           y: 20,
           ease: Power3.easeIn,
         },
         0.2
       );
    }
  }
  return (
    <div className="porfolio">
      <div className="protfolio_box">
        <h1 className="portfolio_title">
          <span>PORTFOLIO</span>
          <span className="line"></span>
        </h1>
        <img src={bg} alt="god" id="diamond" />
        <div className="btns">
          <Button variant="outline-secondary" className="pbtn">
            All
          </Button>
          <Button variant="outline-secondary" className="pbtn">
            chwali
          </Button>
          <Button variant="outline-secondary" className="pbtn">
            god painting
          </Button>
          <Button variant="outline-secondary" className="pbtn">
            sketch
          </Button>
        </div>
      </div>
      <div className="portfolio_images">
        <img
          src={I1}
          alt="god"
          className="image"
          ref={(el) => {
            image1 = el;
          }}
        />
        <img
          src={I2}
          alt="god"
          className="image"
          ref={(el) => {
            image2 = el;
          }}
        />
        <img
          src={I3}
          alt="god"
          className="image"
          ref={(el) => {
            image3 = el;
          }}
        />
        <img
          src={I4}
          alt="god"
          className="image"
          ref={(el) => {
            image4 = el;
          }}
        />
        <img
          src={I5}
          alt="god"
          className="image"
          ref={(el) => {
            image5 = el;
          }}
        />
      </div>
    </div>
  );
};
export default Portfolio;
