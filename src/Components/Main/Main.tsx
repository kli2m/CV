import React from 'react';
import { Chapter, ContactInfo, AboutMe, Progress, InfoList } from 'Components';
import { SKILLS, INFO } from 'constants/index';
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
        {SKILLS.map((skill, ind) => (
          <Progress key={`${skill} + ${ind}`} title={skill.SKILL} percent={skill.LEVEL} />
        ))}
      </div>
    </div>
    <div className="main__additional-info">
      <Chapter title={'EXPERIENCE'} />
      <div className="experience-block">
        <InfoList experience={INFO.EXPERINCE} />
      </div>
      <Chapter title={'EDUCATION'} />
      <div className="education-block">
        <InfoList experience={INFO.EDUCATION} />
      </div>
      <Chapter title={'LANGUAGES'} />
      <div className="education-block">
        <InfoList experience={INFO.LANGUAGES} />
      </div>
    </div>
  </main>
);

export default Main;
