import React from 'react';

import ProjectPreview from '../previews/ProjectPreview';

import { moduleProjects, container } from './Projects.module.css';

const Projects = (props) => {
  // console.dir('props in Projects', props);
  const content = props.content.map((item, i) => (
    <ProjectPreview key={i} {...item} />
  ));
  return (
    <section data-theme="dark" className={moduleProjects}>
      {props.title ? <h2>{props.title}</h2> : ''}
      {props.subtitle ? <p>{props.subtitle}</p> : ''}
      <div className={container}>{content}</div>
    </section>
  );
};

export default Projects;
