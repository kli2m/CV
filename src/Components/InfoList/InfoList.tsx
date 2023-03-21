import React from 'react';
import './InfoList.scss';
import { Event } from 'interfaces';

type InfoListType = {
  experience: Event[];
};

const InfoList: React.FC<InfoListType> = (props) => {
  const { experience } = props;
  return (
    <ul className="list">
      {experience.map((item, ind) => (
        <li className="list__item" key={`${item.TITLE} ${ind}`}>
          <div className="item__header">
            <div className="item__header_title">{item.TITLE}</div>
            <div className="item__header_dates">{item.PERIOD}</div>
          </div>
          <div className="item__description">{item.DESCRIPTION}</div>
        </li>
      ))}
    </ul>
  );
};
export default InfoList;
