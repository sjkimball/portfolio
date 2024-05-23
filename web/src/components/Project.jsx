import React from 'react';

import PrimaryImage from './primaryImage';
import PortableText from './portableText/portableText';

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

const Project = (props) => {
  // console.dir('props in project', props);
  const {
    title,
    subtitle,
    disciplines,
    cover,
    _rawBody: description,
    productImages,
    client,
    sector,
    members,
  } = props;

  return (
    <article className="sk-project">
      <header className="sk-project__header">
        <h1>{client.name}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <div className="sk-project__disciplines">
          <h6 hidden>Disciplines</h6>
          <ul className="sk-project__tags">
            {disciplines.map((discipline, i) => (
              <li key={i} value={discipline}>
                {convertCamelToTitle(discipline)}
              </li>
            ))}
          </ul>
        </div>
        <PrimaryImage imageAsset={cover} imageUse={`cover`} />
      </header>
      <div className="sk-project__body">
        <PortableText blocks={description} />
      </div>
      <div className="sk-project__metadata">
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
            {disciplines.map((discipline, i) => (
              <li key={i} value={discipline}>
                {convertCamelToTitle(discipline)}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h6>Team</h6>
          <ul>
            {members.map((member, i) => {
              const { firstName, lastName, preferredName } = member;
              const name = preferredName
                ? `${preferredName} ${lastName}`
                : `${firstName} ${lastName}`;
              return (
                <li key={i} value={name}>
                  {name}
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      <aside className="sk-project__gallery">
        {productImages.map((image) => {
          return <PrimaryImage key={image.asset._id} imageAsset={image} />;
        })}
      </aside>
    </article>
  );
};

export default Project;
