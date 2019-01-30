import React, { PureComponent } from 'react'

import Link from 'gatsby-link'
import styles from './RecipeCard.module.scss'

const ellipsize = require('ellipsize')
const relativeDate = require('relative-date')
// import Img from 'gatsby-image'

class RecipeCard extends PureComponent {
  render() {
    const {
      url,
      title,
      description,
      featuredImage,
      size,
      author = 'John Doe',
      publishedAt = '2019-01-28T09:45-05:00',
      categories = 'news',
    } = this.props
    let cardStyle,
      cardTitle,
      descriptionMarkup = null

    switch (size) {
      case 'small':
        cardStyle = styles.SmallCard
        cardTitle = <h3 className={styles.SmallTitle}>{title}</h3>
        break

      case 'medium':
        cardStyle = styles.MediumCard
        cardTitle = <h3 className={styles.MediumTitle}>{title}</h3>
        descriptionMarkup = (
          <p className={styles.Description}>{ellipsize(description, 90)}</p>
        )
        break

      case 'large':
        cardStyle = styles.LargeCard
        cardTitle = <h3 className={styles.LargeTitle}>{title}</h3>
        descriptionMarkup = (
          <p className={styles.Description}>{ellipsize(description, 90)}</p>
        )
        break

      default:
        cardStyle = styles.SmallCard
        cardTitle = <h3 className={styles.SmallTitle}>{title}</h3>
        break
    }

    return (
      <div className={cardStyle}>
        <Link to={url} className={styles.Image}>
          {/* <img src={featuredImage} alt={title} /> */}
        </Link>

        <div className={styles.Meta}>
          <p className={styles.CatDate}>
            <Link to="/">{categories}</Link> /{' '}
            {relativeDate(Date.parse(publishedAt))}
          </p>
          <Link to={url}>{cardTitle}</Link>
          {descriptionMarkup}
          <Link className={styles.Author} to="/">
            By {author}
          </Link>
        </div>
      </div>
    )
  }
}

export default RecipeCard
