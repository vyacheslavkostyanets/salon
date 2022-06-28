import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";

const PhoneModalInfo = () => {
  return {
    text: (
      <div className="phones-modal">
        <span className="phones-modal__span">
          Натисніть на потрібний номер для виклику
        </span>
        <a href="tel:123-456-7890p123">
          <div className="phones-modal__item">044-123-45-67</div>
        </a>
        <a href="tel:123-456-7890p123">
          <div className="phones-modal__item">044-123-45-67</div>
        </a>
        <a href="tel:123-456-7890p123">
          <div className="phones-modal__item">044-123-45-67</div>
        </a>
      </div>
    ),

    name: (
      <div className="flex-center">
        <PhoneIcon style={{ fontSize: "3rem" }} />
      </div>
    ),
  };
};

export const { text, name } = PhoneModalInfo();
