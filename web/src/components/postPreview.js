import React from 'react';

import { Link } from 'gatsby';

import PrimaryImage from './PrimaryImage';

import { format, zonedTimeToUtc } from 'date-fns-tz';

import './postPreview.css';

const PostPreview = (props) => {
  const { cover, publishedAt, title, slug, subtitle } = props;
  const utcTime = zonedTimeToUtc(publishedAt, 'America/Chicago');
  const formattedDate = format(utcTime, 'MMMM d, yyyy');
  return (
    <Link to={`/blog/${slug.current}`} className="postPreview">
      <h4>{title}</h4>
      <time dateTime={formattedDate}>{formattedDate}</time>
      <p>{subtitle}</p>
      {<PrimaryImage imageAsset={cover} imageType="square" />}
    </Link>
  );
};

export default PostPreview;
