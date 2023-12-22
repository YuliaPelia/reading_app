import React from "react";
import Form from "../formLogin/FormLogin";
import './login.scss'

const Login = () => {
  return (
    <section className="login">
      <div className="fl-container">
        <Form />
      </div>
    </section>
  );
};

export default Login;
