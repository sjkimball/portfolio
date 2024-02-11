import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { format, parseISO } from 'date-fns';
import Markdown from 'react-markdown';

import CoverImage from './coverImage';
import AvatarImage from './avatarImage';

import './post.css';

function createAvatarLinks(authorArray) {
  return authorArray.map((author, i) => (
    <Link key={i} to={`/about/${author.slug.current}`} className="authorAvatar">
      <AvatarImage imageAsset={author.profileImg} />
    </Link>
  ));
}

function prepNameLinks(authorArray) {
  if (authorArray.length == 1) {
    return (
      <p>
        By&nbsp;
        <Link
          to={`/about/${authorArray[0].slug.current}`}
          className="authorName"
        >
          {authorArray[0].name}
        </Link>
      </p>
    );
  } else if (authorArray.length == 2) {
    const secondAuthor = authorArray.slice(1);
    const firstAuthor = authorArray.slice(0, 1);
    return (
      <p>
        By&nbsp;
        <Link
          to={`/about/${firstAuthor[0].slug.current}`}
          className="authorName"
        >
          {firstAuthor[0].name}
        </Link>
        <span> and </span>
        <Link
          to={`/about/${secondAuthor[0].slug.current}`}
          className="authorName"
        >
          {secondAuthor[0].name}
        </Link>
      </p>
    );
  } else if (authorArray.length > 2) {
    const lastAuthor = authorArray.slice(authorArray.length - 1);
    const otherAuthors = authorArray.slice(0, authorArray.length - 1);
    return (
      <p>
        By&nbsp;
        {otherAuthors.map((author, i) => {
          return (
            <Fragment key={i}>
              <Link to={`/about/${author.slug.current}`} className="authorName">
                {author.name}
              </Link>
              <span>, </span>
            </Fragment>
          );
        })}
        <span>and </span>
        <Link
          to={`/about/${lastAuthor[0].slug.current}`}
          className="authorName"
        >
          {lastAuthor[0].name}
        </Link>
      </p>
    );
  }
}

function createAuthors(authorArray) {
  const avatarLinks = createAvatarLinks(authorArray);
  const nameLinks = prepNameLinks(authorArray);
  return (
    <>
      <div className="authorAvatars">{avatarLinks}</div>
      {nameLinks}
    </>
  );
}

const Post = ({ post }) => {
  const { authors, body, cover, keywords, publishedAt, title, subtitle } = post;
  const formattedDate = format(parseISO(publishedAt), 'MMMM d, yyyy');
  const authorSection = createAuthors(authors);
  return (
    <article className="sk-post">
      <header className="sk-post__header">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <time dateTime={publishedAt}>{formattedDate}</time>
        <section className="sk-post__authors">{authorSection}</section>
        <CoverImage imageAsset={cover} />
      </header>
      <section className="sk-post__body markdown">
        <Markdown>{body}</Markdown>
      </section>
      {/* <footer className="sk-post__footer"></footer> */}
    </article>
  );
};

export default Post;
