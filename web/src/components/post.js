import React from 'react';

import PreviewImage from '../components/preview-image';
import Markdown from 'react-markdown';
import { format, parseISO } from 'date-fns';

import '../styles/layout.css';

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
    <article className={`rec-article rec-post`}>
      <header className={`rec-article__header rec-post__header`}>
        <h2>{title}</h2>
        <time dateTime={publishedAt}>{formattedDate}</time>
        <h3>{subtitle}</h3>
        <div className={`rec-article__authors`}>{preppedAuthors}</div>
        <PreviewImage imageAsset={cover} imageType={`cover`} />
      </header>
      <section className={`rec-article__body rec-post__body`}>
        <Markdown>{body}</Markdown>
      </section>
      <footer
        id={`rec-post__footer`}
        className={`rec-article__footer`}
      ></footer>
    </article>
  );
};

export default Post;
