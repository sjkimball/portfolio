import React from 'react';
import { Link } from 'gatsby';

import PrimaryImage from '../PrimaryImage';

import { grid, container, preview, figure } from './Projects.module.css';

const Preview = (project) => {
  const { client, cover, slug, title } = project;
  return (
    <Link
      to={`/work/${client.slug.current}/${slug.current}`}
      className={preview}
    >
      <figure className={figure}>
        <PrimaryImage imageAsset={cover} />
        <figcaption>
          <h4>{client.name}</h4>
          <h5>{title}</h5>
        </figcaption>
      </figure>
    </Link>
  );
};

const Projects = (props) => {
  // console.dir('props in Projects', props);
  const gridContent = props.content;
  return (
    <section className={grid}>
      {props.title ? <h2>{props.title}</h2> : ''}
      {props.subtitle ? <p>{props.subtitle}</p> : ''}
      <div className={container}>
        {gridContent.map((item, i) => (
          <Preview key={i} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
