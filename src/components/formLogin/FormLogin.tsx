import React from "react";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {

  // const {loggeIn, email} = props;

  const navigate = useNavigate();

  const onButtonClick = () => {

  }

  return (
    <div className="backdrop">
      <form className="form-login">
        <button className="form-login__btn">
       
           Google
        </button>
        <label className="form-login__label">
          Електронна адреса <span className="form-login__required">*</span>
          <input
            type="email"
            placeholder="your@email.com"
            className="form-login__input"
          />
        </label>
        <label className="form-login__label">
          Пароль <span className="form-login__required">*</span>
          <input
            type="password"
            placeholder="Пароль"
            className="form-login__input"
          />
        </label>
        <button onClick={onButtonClick} className="form-login--submit form__btn">Увійти</button>
        <a href="/" className="form-login__link--registration">
          Реєстрація
        </a>
      </form>
    </div>
  );
};

export default FormLogin;
