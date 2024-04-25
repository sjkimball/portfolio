import React from 'react';

import { Link } from 'gatsby';

import PrimaryImage from './PrimaryImage';

import './projectPreview.css';

const ProjectPreview = (props) => {
  const { client, cover, slug, title, id } = props;

  return (
    <Link
      to={`/work/${client.slug.current}/${slug.current}`}
      className="projectPreview"
    >
      <h4>{title}</h4>
      <PrimaryImage imageAsset={cover} />
    </Link>
  );
};

export default ProjectPreview;
