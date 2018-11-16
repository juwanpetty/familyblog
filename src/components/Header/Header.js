import React from 'react'
import Link from 'gatsby-link'

import { Navigation } from '../index.ts'
import styles from './Header.module.scss'

const Header = ({ siteTitle }) => (
  <div className={styles.Header}>
    <div className={styles.Wrapper}>
      <Link to="/">
        <h1 className="heading-3">{siteTitle}</h1>
      </Link>

      <div className={styles.HeaderLinks}>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </div>
    </div>
  </div>
)

export default Header
