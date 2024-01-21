import React from 'react';

import MessageImage from '../components/messageImage';

import './two-up.css';

const TwoUpContainer = (props) => {
  const { title, layout } = props;

  const content = (props.content || [])
    .filter((c) => !c.disabled)
    .map((c, i) => {
      let el = null;
      switch (c._type) {
        case 'messageImage':
          el = <MessageImage key={c._key} {...c} />;
          break;
        default:
          el = null;
      }
      return el;
    });

  return (
    <section className={`two_up_container two_up_layout_${layout}`}>
      {content}
    </section>
  );
};

export default TwoUpContainer;
