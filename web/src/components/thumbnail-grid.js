import React from 'react';

import ProjectPreview from './project-preview';
import PostPreview from './post-preview';
import ProfilePreview from './profile-preview';
import Office from './office';

const ThumbnailGrid = (props) => {
  const content = (props.content || [])
    .filter((c) => !c.disabled)
    .map((c, i) => {
      let el = null;
      switch (c._type) {
        case 'project':
          el = <ProjectPreview key={i} {...c} />;
          break;
        case 'post':
          el = <PostPreview key={i} {...c} />;
          break;
        case 'person':
          el = <ProfilePreview key={i} {...c} />;
          break;
        case 'office':
          el = <Office key={i} {...c} />;
          break;
        default:
          el = null;
      }
      return el;
    });

  return <section className={`rec-preview-container`}>{content}</section>;
};

export default ThumbnailGrid;
