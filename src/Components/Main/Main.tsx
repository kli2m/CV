import React from 'react';
import { Chapter, ContactInfo, AboutMe } from 'Components';
import Progress from 'Components/Progress/Progress';
import './Main.scss';

const Main = () => (
  <main className="main">
    <div className="main__personal-info">
      <Chapter title={'ABOUT ME'} />
      <div className="about-block">
        <ContactInfo />
        <AboutMe />
      </div>

      <Chapter title={'SKILLS'} />
      <div className="skills-block">
        <Progress title={'HTML/CSS'} percent={90} />
        <Progress title={'JavaScript'} percent={90} />
        <Progress title={'React'} percent={70} />
        <Progress title={'NodeJs'} percent={40} />
      </div>
    </div>
  </main>
);

export default Main;
