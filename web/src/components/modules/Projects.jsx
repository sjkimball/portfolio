import React from 'react';

import ProjectPreview from '../previews/ProjectPreview';

import { grid, container } from './Projects.module.css';

const Projects = (props) => {
  // console.dir('props in Projects', props);
  const gridContent = props.content;
  return (
    <section data-theme="dark" className={grid}>
      {props.title ? <h2>{props.title}</h2> : ''}
      {props.subtitle ? <p>{props.subtitle}</p> : ''}
      <div className={container}>
        {gridContent.map((item, i) => (
          <ProjectPreview key={i} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
