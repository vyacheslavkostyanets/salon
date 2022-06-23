import React, { useEffect, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { BackDrop } from "./BackDrop";
import { motion } from "framer-motion";

const links = [
  "Послуги",
  "Ціни",
  "Масажисти",
  "Відгуки",
  "Сертифікати",
  "Статті",
  "Контакти",
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideOrShow, setHideOrShow] = useState({});

  useEffect(() => {
    console.log(window.screen.width, "window.screen.width");
  }, []);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      setHideOrShow(() => {
        return {};
      });
    } else {
      setHideOrShow(() => {
        return {
          display: "flex",
        };
      });
    }
  };

  return (
    <div className="nav__container">
      <div className="nav__wrapper">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: [1.1, 1.2, 1.3, 1.5, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="nav__button"
        >
          {isOpen ? (
            <CloseSharpIcon
              style={{ color: "white", fontSize: "3.7rem" }}
              onClick={handleMenu}
            />
          ) : (
            <MenuRoundedIcon
              style={{ color: "white", fontSize: "3.7rem" }}
              onClick={handleMenu}
            />
          )}
        </motion.div>
        {isOpen ? <BackDrop handleMenu={handleMenu} /> : null}
        <div className={`nav nav__vision`} style={hideOrShow}>
          <nav className="nav__body">
            <ul className="nav__list">
              {links.map((link, index) => {
                return (
                  <li className="nav__list__item" key={index}>
                    <a href="/#" className="nav__list__link">
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
