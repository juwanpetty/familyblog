import React from 'react'
import Link from 'gatsby-link'
import { Container } from '../index.ts'

import styles from './Header.module.scss'

const Header = ({ siteTitle }) => (
  <Container>
    <div className={styles.Header}>
      <Link className={styles.Selected} to="/">Latest</Link>

      <ul className={styles.HeaderLinks}>
        <li><Link to="/">Search</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
    </div>
  </Container>
)

export default Header
