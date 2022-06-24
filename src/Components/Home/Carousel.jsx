import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
// import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
// import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { DataCarousel } from "./DataCarousel";
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
    if (counter <= carousel.current.scrollWidth) {
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
                  <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      scale: [1, 1.3, 1.5, 1.4, 1.7],
                      rotate: [0, 0, 270, 270, 0],
                      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    src={image}
                    alt={image}
                  />
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
