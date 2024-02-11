import React from 'react';
import PostPreview from './postPreview';

import './postGrid.css';

const PostGrid = (props) => {
  const { posts, _key: key } = props;

  return (
    <section key={key} className="postGrid">
      {posts.map((post) => {
        return <PostPreview key={post._id} {...post} />;
      })}
    </section>
  );
};

export default PostGrid;
