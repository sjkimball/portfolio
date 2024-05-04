import React from 'react';

import PrimaryImage from './primaryImage';

import './InfoSection.css';

const InfoSection = (props) => {
  const { _key: key, title, content } = props;
  return (
    <section key={key} className={`infoSection`}>
      {title ? <h3>{title}</h3> : ''}
      {content.map((item, i) => {
        if (item.image) {
          return (
            <figure key={item._key} className="infoBlock infoBlock--image">
              <PrimaryImage imageAsset={item.image} />
              <figcaption>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </figcaption>
            </figure>
          );
        } else {
          return (
            <div key={item._key} className="infoBlock infoBlock--text">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          );
        }
      })}
    </section>
  );
};

export default InfoSection;
