import React from 'react';
import FigureBlock from './FigureBlock';
import ProjectCard from './cards/ProjectCard';
import PersonCard from './cards/PersonCard';
import ImageModule from './Figure';

import { container } from './Grid.module.css';

const Grid = (props) => {
  // console.log('props in GridBlock', props);
  const contentObject = props.value ? props.value : props;
  const { content, darkMode, fullWidth, layout } = contentObject;

  const gridContent = content.map((item, i) => {
    let el = null;
    switch (item._type) {
      case 'block.figure':
        el = <FigureBlock key={i} {...item} />;
        break;
      case 'block.image':
        el = <ImageModule key={i} {...item} />;
        break;
      case 'project':
        el = <ProjectCard key={i} {...item} />;
        break;
      case 'person':
        el = <PersonCard key={i} {...item} />;
        break;
      default:
        el = null;
    }
    return el;
  });

  return <div className={`${container}`}>{gridContent}</div>;
};

export default Grid;
