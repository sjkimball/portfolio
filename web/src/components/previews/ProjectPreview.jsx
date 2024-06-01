import React from 'react';
import { Link } from 'gatsby';

import PrimaryImage from '../PrimaryImage';

import { preview, figure } from './ProjectPreview.module.css';

const ProjectPreview = (project) => {
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

export default ProjectPreview;
