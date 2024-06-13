import React from 'react';

import ProjectPreview from '../../previews/ProjectPreview';

import { block, container } from './ProjectsBlock.module.css';

const ProjectsBlock = (props) => {
  // console.dir('props in ProjectsBlock', props);
  const { value } = props;

  const content = value.content.map((item, i) => (
    <ProjectPreview key={i} {...item} />
  ));

  return (
    <div
      data-theme={value.darkMode == true ? 'dark' : 'light'}
      className={`block block--projects ${value.fullWidth == true ? 'fullWidth' : ''} ${block}`}
    >
      {value.title ? <h2>{value.title}</h2> : ''}
      {value.subtitle ? <p>{value.subtitle}</p> : ''}
      <div className={container}>{content}</div>
    </div>
  );
};

export default ProjectsBlock;
