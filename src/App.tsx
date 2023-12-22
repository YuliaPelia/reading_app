import React from "react";

import Header from "./blocks/header/Header";
import Login from "./components/login/Login";
import "./scss/index.scss";

function App() {
  return (
    <div className="App">
      <Header />

      <Login />
    </div>
  );
}

export default App;
