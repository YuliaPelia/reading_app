import React from "react";
import Form from "../formLogin/FormLogin";
import Quotes from "../quotes/Quotes";
import './login.scss'

const Login = () => {
  return (
    <section className="login">
      <div className="fl-container">
        <Form />
        <Quotes/>
      </div>
    </section>
  );
};

export default Login;
