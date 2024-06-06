import React from 'react';
import { Link } from 'gatsby';

import PrimaryImage from '../PrimaryImage';
import ImageModule from '../modules/Image';

import { preview, figure } from './ProjectPreview.module.css';

const ProjectPreview = (props) => {
  // console.log('props in Project Preview', props);
  const { client, cover, slug, title } = props;
  return (
    <Link
      to={`/work/${client.slug.current}/${slug.current}`}
      className={preview}
    >
      <div className={figure}>
        <h4>{client.name}</h4>
        <h5>{title}</h5>
        <ImageModule {...cover} />
      </div>
    </Link>
  );
};

export default ProjectPreview;
