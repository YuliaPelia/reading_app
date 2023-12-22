// src/components/MyComponent.tsx

import React from 'react';
import './header.scss';
// interface MyComponentProps {
//   name: string;
// }

const Header = () => {
  return <header className='header' >
    <div className="fl-container">
        <a href="/" className='logo'>BR</a>
    </div>
  </header>;
  
};

export default Header;
