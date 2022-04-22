import React from 'react';
import { menuBar } from 'constants/index';
import './MenuBar.scss';

const MenuBar = () => (
  <div className="menu-bar">
    {Object.keys(menuBar).map((value, ind) => (
      <div key={` ${value} + ${ind}`} className="menu-bar__item">
        <div className="menu-bar__item_border">
        <span> {value}</span>
        </div>
      </div>
    ))}
  </div>
);
export default MenuBar;
