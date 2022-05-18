import React from 'react';
import { INFO } from 'constants/index';
import './AboutMe.scss';

const AboutMe = () => (
  <div className="about-me">
    <div className="about-me__foto-block">
      <img className="about-me__foto-block_img" src="../assets/img/personal_foto.jpg" />
    </div>
    <div className="about-me__bio">
      <pre className="about-me__bio_text">
        {INFO.ABOUT}
      </pre>
    </div>
  </div>
);

export default AboutMe;
