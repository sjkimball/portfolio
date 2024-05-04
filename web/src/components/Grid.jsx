import React from 'react';
import { toHeaderCase } from 'js-convert-case';
import Preview from './preview';
import Office from './office';

import './Grid.css';

function createGridContentClass(props) {
  let className = '';
  switch (props._type) {
    case 'projectGroup':
      className = 'projects';
      break;
    case 'peopleGroup':
      className = 'people';
      break;
    case 'postGroup':
      className = 'posts';
      break;
    case 'officeGroup':
      className = 'offices';
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
        <Preview key={project.id} {...project} />
      ));
      break;
    case 'peopleGroup':
      content = props.people.map((person) => (
        <Preview key={person.id} {...person} />
      ));
      break;
    case 'postGroup':
      content = props.posts.map((post) => <Preview key={post.id} {...post} />);
      break;
    case 'officeGroup':
      content = props.offices.map((post) => <Office key={post.id} {...post} />);
      break;
    default:
      content = null;
  }
  return content;
}

const Grid = (props) => {
  // console.dir('props in Grid', props);
  const gridContent = createGridContent(props);
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
        {gridContent}
      </div>
    </section>
  );
};

export default Grid;
