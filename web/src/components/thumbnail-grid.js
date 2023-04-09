import React from 'react';

import ProjectPreview from './project-preview';
import PostPreview from './post-preview';
import ProfilePreview from './profile-preview';
import Office from './office';

const ThumbnailGrid = (props) => {
  console.log('content in thumbnail grid', props);

  const content = (props.content || [])
    .filter((c) => !c.disabled)
    .map((c, i) => {
      let el = null;
      switch (c._type) {
        case 'project':
          el = <ProjectPreview key={c._key} content={c} />;
          break;
        case 'post':
          el = <PostPreview key={c._key} content={c} />;
          break;
        case 'person':
          el = <ProfilePreview key={c._key} content={c} />;
          break;
        case 'office':
          el = <Office key={c._key} content={c} />;
          break;
        default:
          el = null;
      }
      return el;
    });

  return <section className={`rec-preview-container`}>{content}</section>;
};

export default ThumbnailGrid;
