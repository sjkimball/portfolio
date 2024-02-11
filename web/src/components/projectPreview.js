import React from 'react';

import { Link } from 'gatsby';

import PreviewImage from './previewImage';

import './projectPreview.css';

const ProjectPreview = (props) => {
  const { client, cover, slug, title, id } = props;

  return (
    <Link
      to={`/work/${client.slug.current}/${slug.current}`}
      className="projectPreview"
    >
      <h4>{title}</h4>
      <PreviewImage imageAsset={cover} imageType="preview" />
    </Link>
  );
};

export default ProjectPreview;
