import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
// import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
// import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { DataPartners } from "./DataPartners";

export const Partners = () => {
  const [width, setWidth] = useState(0);

  const partners = useRef();

  useEffect(() => {
    setWidth(partners.current.scrollWidth - partners.current.offsetWidth);
  }, []);

  return (
    <div className="wrapper wrapper__partners">
      <h2> Наші Партнери </h2>
      <div className="partners__container">
        {/* <ArrowLeftOutlinedIcon
          className="partners__left"
          onClick={(e) => handleChange("left")}
        /> */}
        <motion.div ref={partners} className="partners">
          <motion.div
            dragConstraints={{ right: 0, left: -width }}
            className="partners__inner"
          >
            {DataPartners.map((image) => {
              return (
                <div className="partners__item" key={image + "partners"}>
                  <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, scale: [1, 2, 2, 1, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 4 }}
                    animate={{
                      x: -width,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    src={image}
                    alt={image}
                  />
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* <ArrowRightOutlinedIcon
          className="partners__right"
          onClick={(e) => handleChange("right")}
        /> */}
      </div>
    </div>
  );
};
