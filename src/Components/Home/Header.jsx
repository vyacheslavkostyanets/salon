import React from "react";
import FaceSharpIcon from "@mui/icons-material/FaceSharp";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PlaceIcon from "@mui/icons-material/Place";
import logo from "../../assets/img/logo.png";
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// import CloseSharpIcon from '@mui/icons-material/CloseSharp';

const Header = () => {
  return (
    <header className="header">
      <div className="header__top top-header">
        <div className="top-header__container">
          <div className="top-header__menu menu">
            <nav className="menu__body">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="/#" className="menu__link">
                    Послуги
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/#" className="menu__link">
                    Ціни
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/#" className="menu__link">
                    Масажисти
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/#" className="menu__link">
                    Відгуки
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/#" className="menu__link">
                    Сертифікати
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/#" className="menu__link">
                    Статті
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/#" className="menu__link">
                    Контакти
                  </a>
                </li>
              </ul>
            </nav>

            {/* <MenuRoundedIcon style={{color: "white", fontSize: "2.7rem"}}/>
				<CloseSharpIcon  style={{color: "white", fontSize: "2.7rem"}}/> */}
          </div>
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
                <PlaceIcon style={{ fontSize: "2.7rem" }} />
                Київ
              </a>
            </div>
            <div className="actions-header__phones phones-header">
              <span className="phones-header__item">044-123-45-67</span>
              <span className="phones-header__item">044-123-45-67</span>
              <button className="phones-header__callback default-button">
                Перетелефонувати
                <br />
                мені
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="header__catalog catalog-header"></div>
    </header>
  );
};

export { Header };
