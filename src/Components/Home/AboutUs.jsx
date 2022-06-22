import React from "react";
import about from "../../assets/img/about/about.jpg";
import { motion } from "framer-motion";

const AboutUs = () => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <div className="about about__container">
      <h2>Про нас</h2>
      <div className="about__wrapper">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2 }}
          className="about__text"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            quasi inventore dolores debitis nemo consectetur, consequuntur earum
            culpa corrupti vitae nesciunt tenetur, facilis at fuga soluta
            officia eum placeat. Hic, dolore illum porro illo nobis tenetur at
            laboriosam cupiditate doloribus totam ipsam alias saepe animi
            voluptatum, facere accusamus odio ipsum sint nisi aperiam maiores
            eius. Sequi fuga laudantium atque a ab omnis, odit repellendus
            perspiciatis, doloribus quod doloremque dolorum laborum aut nemo. Et
            nulla est quibusdam corrupti repellendus rem vero, eaque autem iste
            suscipit? Tempora voluptate magnam pariatur eligendi commodi
            sapiente sequi ducimus dicta placeat vel nam veniam, ullam voluptas!
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 7 }}
          variants={variants}
          className="about__image"
        >
          <img src={about} alt={about} />
        </motion.div>
      </div>
    </div>
  );
};

export { AboutUs };
