import React from 'react';

import ProjectPreview from '../previews/ProjectPreview';

import {
  moduleProjects,
  header,
  container,
  containerItems,
} from './Projects.module.css';

const Projects = (props) => {
  // console.dir('props in Projects', props);
  const { content, darkMode, fullWidth, subtitle, title } = props;
  return (
    <section
      data-theme={darkMode == true ? 'dark' : 'light'}
      className={`module--projects ${fullWidth == true ? 'fullWidth' : ''} ${moduleProjects}`}
    >
      <div className={container}>
        <hgroup className={`${header}`}>
          {title ? <h2>{title}</h2> : ''}
          {subtitle ? <p>{subtitle}</p> : ''}
        </hgroup>
        <div className={containerItems}>
          {content.map((item, i) => (
            <ProjectPreview key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
