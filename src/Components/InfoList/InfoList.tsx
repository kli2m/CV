import React from 'react';
import './InfoList.scss';
import { event } from 'interfaces';

type InfoListType = {
  experience: event[];
};

const InfoList: React.FC<InfoListType> = (props) => {
  const { experience } = props;
  return (
    <ul className="list">
      {experience.map((item, ind) => (
        <li className="list__item" key={`${item.title} ${ind}`}>
          <div className="item__header">
            <div className="item__header_title">{item.title}</div>
            <div className="item__header_dates">{item.dates}</div>
          </div>
          <div className="item__description">{item.description}</div>
        </li>
      ))}
    </ul>
  );
};
export default InfoList;
