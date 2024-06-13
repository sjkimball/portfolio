import React from 'react';

import ProjectPreview from '../previews/ProjectPreview';

import { moduleProjects, container } from './Projects.module.css';

const Projects = (props) => {
  // console.dir('props in Projects', props);
  const { content, darkMode, fullWidth, subtitle, title } = props;
  return (
    <section
      data-theme={darkMode == true ? 'dark' : 'light'}
      className={`module--projects ${fullWidth == true ? 'fullWidth' : ''} ${moduleProjects}`}
    >
      {title ? <h2>{title}</h2> : ''}
      {subtitle ? <p>{subtitle}</p> : ''}
      <div className={container}>
        {content.map((item, i) => (
          <ProjectPreview key={i} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
