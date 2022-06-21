import React, { useState, useEffect, useCallback } from "react";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { DataServices } from "./DataServices";
const dataservices = DataServices();

export const Services = () => {
  console.log(dataservices, "DataServices");
  const [services, setservicesState] = useState(0);

  const handleservices = useCallback(
    (side) => {
      const servicess = dataservices.length - 1;
      if (side === "left") {
        services - 1 >= 0
          ? setservicesState(services - 1)
          : setservicesState(servicess);
      } else {
        const numberSlide = services + 1;
        numberSlide > servicess
          ? setservicesState(0)
          : setservicesState(numberSlide);
      }
    },
    [services]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      handleservices("right");
    }, 2000);

    return () => clearInterval(interval);
  }, [services, handleservices]);

  return (
    <div className="wrapper wrapper__services">
      <div className="services__container">
        <h2> Послуги які ми надаємо </h2>
        <div className="services">
          <ArrowLeftOutlinedIcon
            className="services__left"
            onClick={() => handleservices("left")}
          />
          <div className="services__blocks">
            <img src={dataservices[services].img} alt="services" />
            <div className="services__description">
              <h2 className="services__description__header">
                {dataservices[services].price}
              </h2>
              <br />
              <p className="services__description__short">
                {dataservices[services].description}
              </p>
            </div>
          </div>

          <ArrowRightOutlinedIcon
            className="services__right"
            onClick={() => handleservices("right")}
          />
        </div>
      </div>
    </div>
  );
};
