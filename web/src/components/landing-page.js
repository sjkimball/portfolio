import React from 'react'

import CoverImage from '../components/cover-image'
import FeaturedContainer from './featured-container'

import './landing-page.css'

function isDisabled (item) {
  return !item.disabled;
}
function isHero (item) {
  return item._type == 'hero'
}
function isFeaturedSection (item) {
  return (item._type == 'featuredProjects' || item._type == 'featuredPosts' || item._type == 'featuredPeople')
}

const LandingPage = ({pageContent}) => {
  const {heading, subheading, content} = pageContent
  const heroes = content.filter(isDisabled).filter(isHero)
  const previewContainers = content.filter(isDisabled).filter(isFeaturedSection)

  return (
    <article id={`rec-landing`} className={`rec-article rec-landing`}>
      <header id={`rec-landing__header`} className={`rec-article__header`}>
        {
          (heroes.length > 0) ? heroes.map((hero) => {
            return (
              // need to create HeroImage component
              <CoverImage key={hero._key} {...hero} imageAsset={hero.heroImage}/>
            )
          }) :
          <>
            <h2>{heading}</h2>
            <h4>{subheading}</h4>
          </>
        }
      </header>
      <section>
        {
          previewContainers.map((item) => {
            return (
              <FeaturedContainer key={item._key} content={item} />
            )
          })
        }
      </section>
    </article>
  )
}

export default LandingPage