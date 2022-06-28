import React from "react";
import map from "../../assets/img/footer/map-ukraine.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="<footer footer__container">
      <nav className="footer__wrapper">
        <ul className="footer__list list">
          <li className="list__item">
            <a href="/#" className="list__link">
              Послуги
            </a>
          </li>
          <li className="list__item">
            <a href="/#" className="list__link">
              Ціни
            </a>
          </li>
          <li className="list__item">
            <a href="/#" className="list__link">
              Масажисти
            </a>
          </li>
          <li className="list__item">
            <a href="/#" className="list__link">
              Відгуки
            </a>
          </li>
          <li className="list__item">
            <a href="/#" className="list__link">
              Сертифікати
            </a>
          </li>
          <li className="list__item">
            <a href="/#" className="list__link">
              Статті
            </a>
          </li>
          <li className="list__item">
            <a href="/#" className="list__link">
              Контакти
            </a>
          </li>
        </ul>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          whileInView={{
            scale: [1, 1.1, 1.1, 1, 1],
          }}
          viewport={{ once: true }}
          transition={{ duration: 5 }}
          className="footer__map list__map"
        >
          <img src={map} alt={map} />
        </motion.div>
      </nav>
      <div className="footer__date">
        © {new Date().getFullYear()} Massage Salon Ukraine Masage@M.Ma
      </div>
    </footer>
  );
};

export { Footer };
