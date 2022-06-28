import React from "react";
import FaceSharpIcon from "@mui/icons-material/FaceSharp";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PlaceIcon from "@mui/icons-material/Place";
import logo from "../../assets/img/logo.png";
import Navigation from "./Navigation";
import { ModalButton } from "./ModalButton";
import { text, name } from "./PhoneModalInfo";
import { textCallBack, nameCallBack } from "./CallBackMe";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top top-header">
        <div className="top-header__container">
          <Navigation />
          <a href="/#" className="top-header__user">
            <FaceSharpIcon style={{ color: "white", fontSize: "2.7rem" }} />
            Кабінет
          </a>
        </div>
      </div>
      <div className="header__body body-header">
        <div className="body-header__container">
          <a href="/#" className="body-header__logo">
            <img src={logo} alt="logo" />
          </a>
          <div className="body-header__search ">
            <form action="#" className="search-header">
              <button type="submit" className="search-header__button">
                <SearchRoundedIcon style={{ fontSize: "2.7rem" }} />
              </button>
              <input
                type="text"
                className="search-header__input"
                placeholder="Пошук"
              />
            </form>
          </div>
          <div className="body-header__actions actions-header">
            <div className="actions-header__location">
              <a href="/#" className="actions-header__location__link">
                <PlaceIcon style={{ fontSize: "3rem" }} />
                Київ
              </a>
            </div>
            <div className="actions-header__phones phones-header">
              <ModalButton text={text} name={name} />

              <div className="phones-header__items">
                <span className="phones-header__item">044-123-45-67</span>
                <span className="phones-header__item">044-123-45-67</span>
              </div>
              <ModalButton
                text={textCallBack}
                name={nameCallBack}
                className="phones-header__callback default-button"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="header__catalog catalog-header"></div>
    </header>
  );
};

export { Header };
