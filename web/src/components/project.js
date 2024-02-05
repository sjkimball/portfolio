import React from 'react';

import PreviewImage from '../components/preview-image';
import Markdown from 'react-markdown';

import '../styles/layout.css';
import './project.css';

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
    <article className={`sk-project`}>
      <header className={`sk-project__header`}>
        <h2>{client.name}</h2>
        <h3>{subtitle}</h3>
        <div className={`rec-project__disciplines`}>
          <h6 hidden>Disciplines</h6>
          <ul className="sk-project__tags">
            {disciplines.map((discipline, index) => (
              <li key={index} value={discipline} className="body-sm">
                {discipline}
              </li>
            ))}
          </ul>
        </div>
        <PreviewImage imageAsset={cover} imageType={`cover`} />
      </header>
      <section className={'sk-project__body'}>
        <section className={`sk-project__description`}>
          <Markdown>{description}</Markdown>
        </section>
        <section className={`sk-project__metadata`}>
          <section>
            <h6>Client</h6>
            <p>{client.name}</p>
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
      <aside className={`sk-project__gallery`}>
        {productImages.map((image) => {
          return <PreviewImage key={image.asset._id} imageAsset={image} />;
        })}
      </aside>
    </article>
  );
};

export default Project;
