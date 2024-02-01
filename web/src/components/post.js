import React from 'react';

import PreviewImage from '../components/preview-image';
import Markdown from 'react-markdown';
import { format, parseISO } from 'date-fns';

import '../styles/layout.css';
import './post.css';

function getAvatar(author, prefix, index) {
  return (
    <a key={index} href={`${prefix}${author.slug.current}`}>
      <PreviewImage
        key={index}
        imageAsset={author.profileImg}
        imageType={`avatar`}
      />
    </a>
  );
}

function getName(author, prefix, index) {
  return (
    <a key={index} href={`${prefix}${author.slug.current}`}>
      <span>{author.name}</span>
    </a>
  );
}

function showAuthors(authorArray, prefix) {
  if (authorArray.length == 1) {
    return (
      <>
        {getAvatar(authorArray[0], prefix)}
        <p>By {getName(authorArray[0], prefix)}</p>
      </>
    );
  } else {
    return (
      <>
        <div>
          {authorArray.map((author) => {
            return getAvatar(author, prefix);
          })}
        </div>
        <p>
          By&nbsp;
          {authorArray.map((author, i) => [
            i > 0 && i !== authorArray.length - 1 && ', ',
            i > 0 && ', ' && i == authorArray.length - 1 && ' and ',
            getName(author, prefix),
          ])}
        </p>
      </>
    );
  }
}

const Post = ({ post }) => {
  const prefix = '/about/';
  const { authors, body, cover, keywords, publishedAt, title, subtitle } = post;
  const formattedDate = format(parseISO(publishedAt), 'MMMM d, yyyy');
  const preppedAuthors = showAuthors(authors, prefix);
  return (
    <article className="sk-post">
      <header className="sk-post__header">
        <h2 className="display-md">{title}</h2>
        <time className="body-lg" dateTime={publishedAt}>
          {formattedDate}
        </time>
        <h3 className="headline-xs">{subtitle}</h3>
        <div className="sk-post__authors">{preppedAuthors}</div>
        <PreviewImage imageAsset={cover} imageType={`cover`} />
      </header>
      <section className="sk-post__body">
        <Markdown>{body}</Markdown>
      </section>
      <footer className="sk-post__footer"></footer>
    </article>
  );
};

export default Post;
