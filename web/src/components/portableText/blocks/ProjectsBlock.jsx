import React from 'react';

import ProjectPreview from '../../previews/ProjectPreview';

import { block, header, container } from './ProjectsBlock.module.css';

const ProjectsBlock = (props) => {
  // console.dir('props in ProjectsBlock', props);
  const contentObject = props.value ? props.value : props;
  const { content, darkMode, fullWidth, subtitle, title } = contentObject;

  return (
    <div
      data-theme={darkMode == true ? 'dark' : 'light'}
      className={`block block--projects ${block}`}
    >
      <hgroup className={header}>
        {title ? <h2>{title}</h2> : ''}
        {subtitle ? <p>{subtitle}</p> : ''}
      </hgroup>
      <div className={container}>
        {content.map((item, i) => (
          <ProjectPreview key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsBlock;
