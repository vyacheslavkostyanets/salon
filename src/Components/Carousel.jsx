import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import DataCarousel from "./DataCarousel";
let start = 0;

export const Carousel = () => {
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    console.log(start, "console.log(start);");
    start = carousel.current.scrollWidth - carousel.current.offsetWidth;

    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  useEffect(() => {
    const counter = start + carousel.current.offsetWidth;
    console.log(
      start,
      "start",
      carousel.current.scrollWidth,
      "carousel.current.scrollWidth"
    );
    if (counter <= carousel.current.scrollWidth) {
      console.log("start");
      setWidth(start);
    }
    const interval = setInterval(() => {
      setWidth(width - 10);
    }, 70);

    return () => clearInterval(interval);
  }, [width]);

  return (
    <div className="wrapper wrapper__carousel">
      <h2> Наші клієнти </h2>
      <div className="carousel__container">
        {/* <ArrowLeftOutlinedIcon className="carousel__left" /> */}
        <motion.div ref={carousel} className="carousel">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="carousel__inner"
            whileTap={{ cursor: "grabbing" }}
            animate={{ x: -width }}
          >
            {DataCarousel.map((image) => {
              return (
                <motion.div className="carousel__item" key={image}>
                  <img src={image} alt={image} />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* <ArrowRightOutlinedIcon className="carousel__right" /> */}
      </div>
    </div>
  );
};
