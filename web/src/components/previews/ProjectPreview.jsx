import React from 'react';
import { Link } from 'gatsby';

import ImageModule from '../modules/Image';

import { container, content } from './ProjectPreview.module.css';

const ProjectPreview = (props) => {
  // console.log('props in Project Preview', props);
  const { client, cover, slug, title } = props;
  return (
    <Link
      to={`/work/${client.slug.current}/${slug.current}`}
      className={`preview--project ${container}`}
    >
      <div className={content}>
        <hgroup>
          <h4>{client.name}</h4>
          <h5>{title}</h5>
        </hgroup>
        <ImageModule {...cover} />
      </div>
    </Link>
  );
};

export default ProjectPreview;
