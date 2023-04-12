import React from 'react';

import { Link } from 'gatsby';

import PreviewImage from '../components/preview-image';

import { format, parseISO } from 'date-fns';

import './preview.css';

const PostPreview = (props) => {
  const { coverImg, publishedAt, title, slug, subtitle } = props;
  const dateForTime = parseISO(publishedAt);
  const formattedDate = format(dateForTime, 'MMMM d, yyyy');
  return (
    <Link to={`/blog/${slug.current}`} className={`preview preview--light`}>
      <h4>{title}</h4>
      <time dateTime={dateForTime}>{formattedDate}</time>
      <p>{subtitle}</p>
      {<PreviewImage imageAsset={coverImg} />}
    </Link>
  );
};

export default PostPreview;
