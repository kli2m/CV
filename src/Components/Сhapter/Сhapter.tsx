import React from 'react';
import './Chapter.scss';

interface ChapterType {
  title: string;
}

const Chapter: React.FC<ChapterType> = (props) => {
  const { title } = props;
  return (
    <div className="chapter">
      <div className="chapter__parallelogram">
        <div className="chapter__parallelogram_title"> {title}</div>
      </div>
      <div className="chapter__dividing-line"></div>
    </div>
  );
};

export default Chapter;
