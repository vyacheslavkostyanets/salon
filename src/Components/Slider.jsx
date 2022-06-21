import React, { useState, useEffect, useCallback } from "react";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const dataSlider = [
  {
    name: "Lorem ipsum dolor sit amet consectetur ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque qui amet molestiae repudiandae nihil fugit nemo laudantium nam animi doloribus ex placeat repellendus rerum illum!",
    img: "https://i.ibb.co/MM7F8Xz/Slider2.jpg",
  },
  {
    name: "Lorem ipsum dolor sit amet 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque qui amet molestiae repudiandae nihil fugit ",
    img: "https://i.ibb.co/VqT0spb/Slider1.png",
  },
  {
    name: "Lorem ipsum dolor sit amet 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque qui amet molestiae repudiandae nihil fugit ",
    img: "https://i.ibb.co/k6SD30F/Slider3.jpg",
  },
];

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
    }, 2000);

    return () => clearInterval(interval);
  }, [slider, handleSlider]);

  return (
    <div className="wrapper slider__container">
      <div className="slider">
        <ArrowLeftOutlinedIcon
          className="slider__left"
          onClick={() => handleSlider("left")}
        />
        <img src={dataSlider[slider].img} alt="Slider" />
        <div className="slider__description">
          <h2 className="slider__description__header">
            {dataSlider[slider].name}
          </h2>
          <br />
          <p className="slider__description__short">
            {dataSlider[slider].description}
          </p>
        </div>

        <ArrowRightOutlinedIcon
          className="slider__right"
          onClick={() => handleSlider("right")}
        />
      </div>
    </div>
  );
};
