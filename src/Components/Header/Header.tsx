import React from 'react';
import MenuBar from 'Components/MenuBar/MenuBar';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="content">
      <div className="content__personal-info">
        <p className="content__personal-info_name">Klimm Ivan</p>
        <p className="content__personal-info_specialization">Front-end developer</p>
      </div>
      <div className="content__menu">
        <MenuBar />
      </div>
    </div>
    <div className="header__menu"></div>
  </header>
);

export default Header;
