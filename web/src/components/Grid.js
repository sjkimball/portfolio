import React from 'react';
import { toHeaderCase } from 'js-convert-case';
import ProjectPreview from './projectPreview';
import ProfilePreview from './profilePreview';
import PostPreview from './postPreview';

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
      className = 'grid--post';
      break;
    default:
      console.log('Sorry unable to create className for this grid.');
  }
  return className;
}
function createContent(props) {
  let content = [];
  switch (props._type) {
    case 'projectGroup':
      content = props.projects.map((project) => (
        <ProjectPreview key={project._id} {...project} />
      ));
      break;
    case 'peopleGroup':
      content = props.people.map((person) => (
        <ProfilePreview key={person._id} {...person} />
      ));
      break;
    case 'postGroup':
      content = props.posts.map((post) => (
        <PostPreview key={post._id} {...post} />
      ));
      break;
    default:
      content = null;
  }
  return content;
}

const Grid = (props) => {
  const gridContent = createContent(props);
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
