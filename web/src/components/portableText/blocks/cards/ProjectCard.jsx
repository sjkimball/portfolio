import React from 'react';
import { Link } from 'gatsby';

import ImageFactory from '../../../ImageFactory';

import { link, content } from './Card.module.css';

const ProjectCard = (props) => {
  // console.log('props in Project Card', props);
  const { client, cover, slug, title } = props;
  return (
    <Link
      to={`/work/${client.slug.current}/${slug.current}`}
      className={`preview--project ${link}`}
    >
      <div className="card card-project">
        <hgroup>
          <h4>{client.name}</h4>
          <h5>{title}</h5>
        </hgroup>
        {/*Project Tags */}
        <ImageFactory asset={cover} />
      </div>
    </Link>
  );
};

export default ProjectCard;
