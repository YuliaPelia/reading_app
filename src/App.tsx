import React from "react";

import Header from "./blocks/header/Header";
import Login from "./components/login/Login";

import Registaration from "./components/registration/Registaration";

import "./scss/index.scss";

function App() {
  return (
    <div className="App">
      <Header />

      {/* <Login /> */}

      <Registaration/>
    </div>
  );
}

export default App;
