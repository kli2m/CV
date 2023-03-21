import React from 'react';
import './Progress.scss';

interface progressType {
  title: string;
  percent: number;
}

const Progress: React.FC<progressType> = (props) => {
  const { title, percent } = props;

  const getProgressBarStyle: React.CSSProperties = {
    transform: `rotate(${((360 / 100) * percent) / 2}deg)`,
  };

  return (
    <div className="progress">
      <div className="outside-circle">
        <div className="outside-circle__mask half">
          <div className="fill" style={getProgressBarStyle}></div>
        </div>
        <div className="outside-circle__mask full" style={getProgressBarStyle}>
          <div className="fill" style={getProgressBarStyle}></div>
        </div>
        <div className="inside-circle"> {percent}% </div>
      </div>
      <div className="title">{title}</div>
    </div>
  );
};

export default Progress;
