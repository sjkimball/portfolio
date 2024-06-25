import React from 'react';
import { Link } from 'gatsby';

import ImageModule from '../portableText/blocks/Image';

import { link, content } from './ProjectPreview.module.css';

const ProjectPreview = (props) => {
  // console.log('props in Project Preview', props);
  const { client, cover, slug, title } = props;
  return (
    <Link
      to={`/work/${client.slug.current}/${slug.current}`}
      className={`preview--project ${link}`}
    >
      <hgroup>
        <h4>{client.name}</h4>
        <h5>{title}</h5>
      </hgroup>
      <ImageModule {...cover} />
    </Link>
  );
};

export default ProjectPreview;
