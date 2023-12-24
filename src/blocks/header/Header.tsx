// src/components/MyComponent.tsx

import React from "react";
import "./header.scss";
// interface MyComponentProps {
//   name: string;
// }

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        BR
      </a>
    </header>
  );
};

export default Header;
