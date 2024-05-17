import React from 'react';
import { toHeaderCase } from 'js-convert-case';
import Preview from '../preview';
import './Grid.css';

function createGridContentClass(props) {
  let className = '';
  switch (props._type) {
    case 'module.projects':
      className = 'projects';
      break;
    case 'module.people':
      className = 'people';
      break;
    case 'postGroup':
      className = 'posts';
      break;
    default:
      console.log('Sorry unable to create className for this grid.');
  }
  return className;
}

const Grid = (props) => {
  // console.dir('props in Grid', props);
  const gridContent = props.content;
  const gridContentClass = createGridContentClass(props);

  return (
    <section className={`grid`}>
      {props.title ? <h3 className={`grid__title`}>{props.title}</h3> : ''}
      {props.subtitle ? (
        <h4 className={`grid__subtitle`}>{props.subtitle}</h4>
      ) : (
        ''
      )}
      <div className={`grid__container grid__container--${gridContentClass}`}>
        {gridContent.map((item) => (
          <Preview key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Grid;
