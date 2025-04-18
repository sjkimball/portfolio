import React from 'react';

import PortableText from './portableText/PortableText';
import ImageModule from './portableText/blocks/Image';

import {
  article,
  header,
  projectClient,
  projectTitle,
  projectSubtitle,
  projectDisciplines,
  metadata,
  gallery,
} from './Project.module.css';

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
  // console.dir('props in project', props.cover);
  const {
    title,
    subtitle,
    disciplines,
    cover,
    _rawBody: body,
    productImages,
    client,
    sector,
    members,
  } = props;

  return (
    <article className={`project ${article}`}>
      <header className={header}>
        <hgroup>
          <h1 className={projectClient}>{client.name}</h1>
          <p className={projectTitle}>{title}</p>
          <p className={projectSubtitle}>{subtitle}</p>
        </hgroup>
        <ImageModule {...cover} />
      </header>
      <PortableText blocks={body} />
      <div className={metadata}>
        <section>
          <h6>Client</h6>
          <p>{client.name}</p>
        </section>
        <section>
          <h6>Sector</h6>
          <p>{convertCamelToTitle(sector)}</p>
        </section>
        <section>
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
      {/* <aside className={gallery}>
        {productImages.map((image, i) => (
          <ImageModule key={i} {...image} />
        ))}
      </aside> */}
    </article>
  );
};

export default Project;
