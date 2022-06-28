import React, { useState, useEffect, useCallback } from "react";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { motion, AnimatePresence } from "framer-motion";

const dataSlider = [
  {
    img: "https://i.ibb.co/MM7F8Xz/Slider2.jpg",
  },
  {
    img: "https://i.ibb.co/VqT0spb/Slider1.png",
  },
  {
    img: "https://i.ibb.co/k6SD30F/Slider3.jpg",
  },
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const Slider = () => {
  const [slider, setSliderState] = useState(0);

  const handleSlider = useCallback(
    (side) => {
      const sliders = dataSlider.length - 1;
      if (side === "left") {
        slider - 1 >= 0 ? setSliderState(slider - 1) : setSliderState(sliders);
      } else {
        const numberSlide = slider + 1;
        numberSlide > sliders ? setSliderState(0) : setSliderState(numberSlide);
      }
    },
    [slider]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlider("right");
    }, 4000);

    return () => clearInterval(interval);
  }, [slider, handleSlider]);

  return (
    <div className="wrapper slider__container">
      <div className="slider">
        <ArrowLeftOutlinedIcon
          className="slider__left"
          onClick={() => handleSlider("left")}
        />
        <div>
          <AnimatePresence>
            <motion.img
              className="slider__img"
              key={dataSlider[slider].img}
              src={dataSlider[slider].img}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: [1, 0.5, 0.5, 1, 1] }}
              transition={{ duration: 2 }}
              whileHover={{ scale: 1.05 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  handleSlider("right");
                } else if (swipe > swipeConfidenceThreshold) {
                  handleSlider("left");
                }
              }}
            />
          </AnimatePresence>
        </div>

        <ArrowRightOutlinedIcon
          className="slider__right"
          onClick={() => handleSlider("right")}
        />
      </div>
    </div>
  );
};
