import React from 'react';
import Markdown from 'react-markdown';

import CoverImage from './coverImage';
import PreviewImage from './previewImage';

import './project.css';

function acronymPrep(discipline) {
  function capitalizeAcronym(match, string) {
    return match.toUpperCase();
  }
  return discipline.replace(/\b(?:Ux|Ui)/g, capitalizeAcronym);
}

function convertCamelToTitle(camelString) {
  const str = camelString.replace(/([a-z])([A-Z])/g, '$1 $2');
  const titleStr = str.charAt(0).toUpperCase() + str.slice(1);
  return acronymPrep(titleStr);
}

const Project = ({ project }) => {
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
  } = project;

  return (
    <article className="sk-project">
      <header className="sk-project__header">
        <h2>{client.name}</h2>
        <h3>{subtitle}</h3>
        <div className="sk-project__disciplines">
          <h6 hidden>Disciplines</h6>
          <ul className="sk-project__tags">
            {disciplines.map((discipline, index) => (
              <li key={index} value={discipline}>
                {convertCamelToTitle(discipline)}
              </li>
            ))}
          </ul>
        </div>
        <CoverImage imageAsset={cover} />
      </header>
      <section className="sk-project__body">
        <section className="sk-project__description markdown">
          <Markdown>{description}</Markdown>
        </section>
      </section>
      <section className="sk-project__metadata">
        <section>
          <h6>Client</h6>
          <p>{client.name}</p>
        </section>
        <section>
          <h6>Sector</h6>
          <p>{convertCamelToTitle(sector)}</p>
        </section>
        <section className="sk-project__disciplines">
          <h6>Disciplines</h6>
          <ul>
            {disciplines.map((discipline, index) => (
              <li key={index} value={discipline}>
                {convertCamelToTitle(discipline)}
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
          <h6>Team</h6>
          <ul>
            {members.map((member) => (
              <li key={member._key} value={member.name}>
                {member.name}
              </li>
            ))}
          </ul>
        </section>
      </section>
      <aside className="sk-project__gallery">
        {productImages.map((image) => {
          return <PreviewImage key={image.asset._id} imageAsset={image} />;
        })}
      </aside>
    </article>
  );
};

export default Project;
