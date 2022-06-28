import React from "react";

const CallBackMe = () => {
  return {
    textCallBack: (
      <div>
        <span className="form-callbackme__span">
          Введіть Ваше ім'я та номер для зв'язку з Вами
        </span>
        <form action="" className="form-callbackme">
          <label for="name" className="form-callbackme__label">
            Ім'я:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-callbackme__input"
          />

          <label for="phone" className="form-callbackme__label">
            Номер:*
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="form-callbackme__input"
          />
          <input
            type="submit"
            value="Відправити"
            className="form-callbackme__send default-button form-callbackme__input"
          ></input>
        </form>
      </div>
    ),

    nameCallBack: (
      <div>
        Перетелефонувати
        <br />
        мені
      </div>
    ),
  };
};

export const { textCallBack, nameCallBack } = CallBackMe();
