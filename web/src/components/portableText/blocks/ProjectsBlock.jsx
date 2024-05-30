import React from 'react';

import Preview from '../../Preview';

import { projectsBlock } from './ProjectsBlock.module.css';

const ProjectsBlock = (props) => {
  // console.dir('props in ProjectsBlock', props);
  const { value } = props;

  const content = value.content.map((item, i) => <Preview key={i} {...item} />);

  return (
    <div className={projectsBlock}>
      {value.title ? <h3>{value.title}</h3> : ''}
      {value.subtitle ? <p>{value.subtitle}</p> : ''}
      <div>{content}</div>
    </div>
  );
};

export default ProjectsBlock;
