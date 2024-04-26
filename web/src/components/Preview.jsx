import React from 'react';

import { format, zonedTimeToUtc } from 'date-fns-tz';

import { Link } from 'gatsby';
import PrimaryImage from './PrimaryImage';

import './Preview.css';

function ProjectPreview(project) {
  return (
    <Link
      to={`/work/${project.client.slug.current}/${project.slug.current}`}
      className={`preview preview--project`}
    >
      <h4>{project.title}</h4>
      <PrimaryImage imageAsset={project.cover} />
    </Link>
  );
}

function ProfilePreview(person) {
  const { profileImg, name, office, slug } = person;
  const profileSlug = slug.current;
  const officeName = office.contactInfo.address.city;
  return (
    <Link to={`/about/${profileSlug}`} className={`preview preview--profile`}>
      <h4>{name}</h4>
      <h5>{officeName}</h5>
      <PrimaryImage imageAsset={profileImg} />
    </Link>
  );
}

function PostPreview(post) {
  const { cover, publishedAt, title, slug, subtitle } = post;
  // const utcTime = zonedTimeToUtc(publishedAt, 'America/Chicago');
  // const formattedDate = format(utcTime, 'MMMM d, yyyy');
  return (
    <Link to={`/blog/${slug.current}`} className={`preview preview--post`}>
      <h4>{title}</h4>
      {/* <time dateTime={formattedDate}>{formattedDate}</time> */}
      <p>{subtitle}</p>
      {<PrimaryImage imageAsset={cover} />}
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
  const content = createPreviewContent(props);
  return content;
};

export default Preview;
