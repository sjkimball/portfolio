import React from 'react';

import { Link } from 'gatsby';

import PreviewImage from '../components/preview-image';

import { format, zonedTimeToUtc } from 'date-fns-tz';

import './preview.css';

const PostPreview = (props) => {
  const { coverImg, publishedAt, title, slug, subtitle } = props;
  console.log('publishedAt', publishedAt);
  const utcTime = zonedTimeToUtc(publishedAt, 'America/Chicago');
  const formattedDate = format(utcTime, 'MMMM d, yyyy');
  return (
    <Link to={`/blog/${slug.current}`} className={`preview preview--light`}>
      <h4>{title}</h4>
      <time dateTime={formattedDate}>{formattedDate}</time>
      <p>{subtitle}</p>
      {<PreviewImage imageAsset={coverImg} />}
    </Link>
  );
};

export default PostPreview;
