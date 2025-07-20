import React from 'react';
import { Link } from 'gatsby';

import ImageFactory from '../ImageFactory';

import { link, content } from './Card.module.css';

const PostCard = (props) => {
  const { cover, publishedAt, title, slug, subtitle } = post;
  // const utcTime = zonedTimeToUtc(publishedAt, 'America/Chicago');
  // const formattedDate = format(utcTime, 'MMMM d, yyyy');
  return (
    <Link to={`/blog/${slug.current}`} className={`preview`}>
      <figure className={`preview__figure preview__figure--post`}>
        <ImageFactory imageAsset={cover} />
        <figcaption>
          <h4>{title}</h4>
          {/* <time dateTime={formattedDate}>{formattedDate}</time> */}
          <p>{subtitle}</p>
        </figcaption>
      </figure>
    </Link>
  );
};

export default PostCard;
