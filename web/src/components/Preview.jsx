import React from 'react';

import { format, zonedTimeToUtc } from 'date-fns-tz';

import { Link } from 'gatsby';
import PrimaryImage from './PrimaryImage';

import {
  preview,
  figure,
  figureProject,
  figureProfile,
} from './Preview.module.css';

function ProjectPreview(project) {
  const { client, cover, slug, title } = project;
  return (
    <Link
      to={`/work/${client.slug.current}/${slug.current}`}
      className={preview}
    >
      <figure className={`${figure} ${figureProject}`}>
        <PrimaryImage imageAsset={cover} />
        <figcaption>
          <h4>{client.name}</h4>
          <h5>{title}</h5>
        </figcaption>
      </figure>
    </Link>
  );
}

function ProfilePreview(person) {
  const { image, firstName, preferredName, lastName, slug } = person;
  const name = preferredName
    ? `${preferredName} ${lastName}`
    : `${firstName} ${lastName}`;
  return (
    <Link to={`/about/${slug.current}`} className={preview}>
      <figure className={`${figure} ${figureProfile}`}>
        <PrimaryImage imageAsset={image} />
        <figcaption>
          <h4>{name}</h4>
        </figcaption>
      </figure>
    </Link>
  );
}

function PostPreview(post) {
  const { cover, publishedAt, title, slug, subtitle } = post;
  // const utcTime = zonedTimeToUtc(publishedAt, 'America/Chicago');
  // const formattedDate = format(utcTime, 'MMMM d, yyyy');
  return (
    <Link to={`/blog/${slug.current}`} className={`preview`}>
      <figure className={`preview__figure preview__figure--post`}>
        <PrimaryImage imageAsset={cover} />
        <figcaption>
          <h4>{title}</h4>
          {/* <time dateTime={formattedDate}>{formattedDate}</time> */}
          <p>{subtitle}</p>
        </figcaption>
      </figure>
    </Link>
  );
}

function createPreviewContent(props) {
  let el = null;
  switch (props._type) {
    case 'project':
      el = ProjectPreview(props);
      break;
    case 'person':
      el = ProfilePreview(props);
      break;
    case 'post':
      el = PostPreview(props);
      break;
    default:
      el = null;
  }
  return el;
}

const Preview = (props) => {
  // console.dir('props in preview', props);
  const content = createPreviewContent(props);
  return content;
};

export default Preview;
