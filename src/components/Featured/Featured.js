import React, { PureComponent } from 'react'

import Link from 'gatsby-link'
import styles from './Featured.module.scss'

const ellipsize = require('ellipsize');
// import Img from 'gatsby-image'


class Featured extends PureComponent {
  // methods

  render() {
    const {url, title, description, featuredImage} = this.props;

    return (
      <div className={styles.Featured}>
        <p className={styles.CatDate}><Link to="/">News</Link> / 2 hrs ago</p>
      </div>
    )
  }
}

export default Featured
