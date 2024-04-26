import React from 'react';
import { toHeaderCase } from 'js-convert-case';
import Preview from './Preview';
import Office from './office';

import './Grid.css';

function createGridClass(props) {
  let className = '';
  switch (props._type) {
    case 'projectGroup':
      className = 'grid--projects';
      break;
    case 'peopleGroup':
      className = 'grid--people';
      break;
    case 'postGroup':
      className = 'grid--posts';
      break;
    case 'officeGroup':
      className = 'grid--offices';
      break;
    default:
      console.log('Sorry unable to create className for this grid.');
  }
  return className;
}
function createGridContent(props) {
  let content = [];
  switch (props._type) {
    case 'projectGroup':
      content = props.projects.map((project) => (
        <Preview key={project._id} {...project} />
      ));
      break;
    case 'peopleGroup':
      content = props.people.map((person) => (
        <Preview key={person._id} {...person} />
      ));
      break;
    case 'postGroup':
      content = props.posts.map((post) => <Preview key={post._id} {...post} />);
      break;
    case 'officeGroup':
      content = props.offices.map((post) => (
        <Office key={post._id} {...post} />
      ));
      break;
    default:
      content = null;
  }
  return content;
}

const Grid = (props) => {
  const gridContent = createGridContent(props);
  const gridClass = createGridClass(props);

  return (
    <section key={props._key} className={`grid ${gridClass}`}>
      {props.title ? <h3>{props.title}</h3> : ''}
      {props.subtitle ? <h4>{props.subtitle}</h4> : ''}
      <div>{gridContent}</div>
    </section>
  );
};

export default Grid;
