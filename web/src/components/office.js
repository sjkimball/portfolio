import React from 'react';

// import { format, utcToZonedTime } from 'date-fns-tz'

import CoverImage from './coverImage';

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
        {/* <time>Current time</time> */}
      </header>
      <section className="sk-office__info">
        <section className="info__links">
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          <a href={`tel:1-${contactInfo.phone}`}>+1 {contactInfo.phone}</a>
        </section>
        <address>
          {address.street}
          <br />
          <SecondaryAddress address={address} />
          {address.city}, {address.stateProvince} {address.postalCode}
          <br />
          {address.country}
        </address>
        <p>{description}</p>
      </section>
      <section className="sk-office__images">
        {images.map((image) => {
          return <CoverImage key={image.asset._id} imageAsset={image} />;
        })}
      </section>
    </section>
  );
};

export default Office;
