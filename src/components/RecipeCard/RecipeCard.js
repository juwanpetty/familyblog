import React, { PureComponent } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './RecipeCard.module.scss'

class RecipeCard extends PureComponent {
  // methods

  render() {
    return (
      <div className={styles.RecipeCard}>
        <div className={styles.ImageWrapper}>
          {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
          <img src="https://source.unsplash.com/random" alt="Image" />
        </div>
        <Link to="/" className={styles.Overflow}>
          <h3 className={styles.Title}>
            This Anti-Aging Scientist Turns His Findings Into a Lifestyle
          </h3>
        </Link>
        <div className={styles.Meta}>
          <Link to="/" className={styles.Author}>
            By John Doe
          </Link>{' '}
          <p className={styles.ArticleDate}>Sep 6, 2018</p>
        </div>
      </div>
    )
  }
}

export default RecipeCard
