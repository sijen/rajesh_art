import React, { useRef, useEffect } from "react";
import "./home.css";

import { Button } from "react-bootstrap";
import { TweenMax, Power3 } from "gsap";

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';

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
        1.3,
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
         0,
         {
           opacity: 0,
           y: 20,
           ease: Power3.easeOut,
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
        <LightGallery
                // onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
        <a hre="../../assets/collection/I1.png"><img
          src={I1}
          alt="god"
          className="image"
          ref={(el) => {
            image1 = el;
          }}
        /></a>
        <a href="../../assets/collection/I2.png"><img
          src={I2}
          alt="god"
          className="image"
          ref={(el) => {
            image2 = el;
          }}
        /></a>
        <a href="../../assets/collection/I3.png">
        <img
          src={I3}
          alt="god"
          className="image"
          ref={(el) => {
            image3 = el;
          }}
        />
        </a>
        <a href="../../assets/collection/I4.png">

        <img
          src={I4}
          alt="god"
          className="image"
          ref={(el) => {
            image4 = el;
          }}
        />
        </a>
        <a 
            data-lg-size="1406-1390"
            className="gallery-item"
            data-src={image5}
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"><img
          src={I5}
          alt="god"
          className="image"
          ref={(el) => {
            image5 = el;
          }}
        /></a>
        </LightGallery>
      </div>
    </div>
  );
};
export default Portfolio;
