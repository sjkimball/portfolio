import React from 'react';

import Preview from '../../Preview';

import ProjectPreview from '../../previews/ProjectPreview';

import { block, container } from './ProjectsBlock.module.css';

const ProjectsBlock = (props) => {
  // console.dir('props in ProjectsBlock', props);
  const { value } = props;

  const content = value.content.map((item, i) => (
    <ProjectPreview key={i} {...item} />
  ));

  return (
    <div className={block}>
      {value.title ? <h3>{value.title}</h3> : ''}
      {value.subtitle ? <p>{value.subtitle}</p> : ''}
      <div className={container}>{content}</div>
    </div>
  );
};

export default ProjectsBlock;
