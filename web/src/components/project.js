import React from 'react';

import PreviewImage from '../components/preview-image';
import Markdown from 'react-markdown';

import '../styles/layout.css';

const Project = (props) => {
  const {
    client,
    sector,
    subtitle,
    description,
    cover,
    productImages,
    office,
    disciplines,
    members,
  } = props.project;

  return (
    <article className={`rec-article rec-project`}>
      <header className={`rec-article__header rec-project__header`}>
        <h2>{client.name}</h2>
        <section className={`rec-project__disciplines`}>
          <h6 hidden>Disciplines</h6>
          <ul className={`rec-tags rec-project__tags`}>
            {disciplines.map((discipline, index) =>
              index == disciplines.length - 1 ? (
                <li key={index} value={discipline}>
                  {discipline}
                </li>
              ) : (
                <li key={index} value={discipline}>{`${discipline}, `}</li>
              ),
            )}
          </ul>
        </section>
        <h3>{subtitle}</h3>
        <PreviewImage imageAsset={cover} imageType={`cover`} />
      </header>
      <section className={'rec-article__body rec-project__body'}>
        <section className={`rec-project__description`}>
          <Markdown>{description}</Markdown>
        </section>
        <section className={`rec-project__gallery`}>
          {productImages.map((image) => {
            return <PreviewImage key={image.asset._id} imageAsset={image} />;
          })}
        </section>
        <section className={`rec-project__metadata`}>
          <section>
            <h6>Client</h6>
            <ul>
              <li>{client.name}</li>
            </ul>
          </section>
          <section>
            <h6>Sector</h6>
            <p>{sector}</p>
          </section>
          <section>
            <h6>Disciplines</h6>
            <ul>
              {disciplines.map((discipline, index) => (
                <li key={index} value={discipline}>
                  {discipline}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h6>Office</h6>
            <ul>
              <li key={office._id} value={office.contactInfo.address.city}>
                {office.contactInfo.address.city}
              </li>
            </ul>
          </section>
          <section>
            <h6>Partner</h6>
            <ul>
              {members.map((member) => (
                <li key={member._key} value={member.name}>
                  {member.name}
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
      <footer className={`rec-article__footer rec-project__footer`}></footer>
    </article>
  );
};

export default Project;
