import React from 'react';

import { Link } from 'gatsby';

import PreviewImage from '../components/preview-image';

import './preview.css';

const ProjectPreview = (props) => {
  const { client, cover, slug, title } = props;
  return (
    <Link
      to={`/work/${client.slug.current}/${slug.current}`}
      className="preview"
    >
      <h4>{client.name}</h4>
      {<PreviewImage imageAsset={cover} />}
    </Link>
  );
};

export default ProjectPreview;
