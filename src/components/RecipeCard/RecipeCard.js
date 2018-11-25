import React, { PureComponent } from 'react'
import Link from 'gatsby-link'
// import Img from 'gatsby-image'

import styles from './RecipeCard.module.scss'

class RecipeCard extends PureComponent {
  // methods

  render() {
    return (
      <div className={styles.RecipeCard}>
        <Link to="/" className={styles.ImageWrapper}>
          <img
            src="https://source.unsplash.com/random"
            alt="This Anti-Aging Scientist Turns His Findings Into a Lifestyle"
          />
        </Link>
        <div className={styles.Detail}>
          <Link to="/">
            <h3 className={styles.Title}>This Anti-Aging Scientist Turns His Findings Into a Lifestyle</h3>
          </Link>
          <Link to="/">
            <p className={styles.Description}>
              Plugin that can size layers to common photo dimensions and scale them to fit in a row.
            </p>
          </Link>
        </div>
      </div>
    )
  }
}

export default RecipeCard
