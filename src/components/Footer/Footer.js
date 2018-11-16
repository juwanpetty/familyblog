import React from 'react'
import Link from 'gatsby-link'

import styles from './Footer.module.scss'

const Footer = ({ siteTitle }) => (
  <div className={styles.Footer}>
    <div className={styles.Wrapper}>
      <Link to="/">
        <h1 className="heading-3">{siteTitle}</h1>
      </Link>

      <div className={styles.FooterLinks}>
        <Link plain to="/">
          Changelog
        </Link>
        <Link plain to="/">
          Contact
        </Link>
      </div>
    </div>
  </div>
)

export default Footer
