import React, { PureComponent } from 'react'

import Link from 'gatsby-link'
import styles from './RecipeCard.module.scss'

const ellipsize = require('ellipsize');
// import Img from 'gatsby-image'


class RecipeCard extends PureComponent {
  // methods

  render() {
    const {url, title, description} = this.props;

    return (
      <div className={styles.RecipeCard}>
        <Link to={url} className={styles.ImageWrapper}>
          {/* <img
            src="https://source.unsplash.com/random"
            alt={title}
          /> */}
        </Link>
        <div className={styles.Detail}>
          <Link to={url}>
            <h3 className={styles.Title}>{title}</h3>
          </Link>
          <Link to={url}>
            <p className={styles.Description}>
              {ellipsize(description, 90)}
            </p>
          </Link>
        </div>
      </div>
    )
  }
}

export default RecipeCard
