import React from 'react';

// import { format, utcToZonedTime } from 'date-fns-tz'

import PrimaryImage from './primaryImage';

import './office.css';

function SecondaryAddress(props) {
  if (!props.address.streetSecondary) {
    return null;
  }
  return (
    <>
      {props.address.streetSecondary}
      <br />
    </>
  );
}

const Office = (props) => {
  const { images, contactInfo, description } = props;
  const address = contactInfo.address;

  return (
    <section className="sk-office">
      <header className="sk-office__header">
        <h4>{address.city}</h4>
      </header>
      <section className="sk-office__info">
        <section className="info__links">
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          <a href={`tel:1-${contactInfo.phone}`}>+1 {contactInfo.phone}</a>
        </section>
      </section>
      <section className="sk-office__images">
        {images.map((image) => {
          return (
            <PrimaryImage
              key={image.asset._id}
              imageAsset={image}
              imageUse={`cover`}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Office;
