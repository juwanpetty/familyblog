import React from 'react'
import Link from 'gatsby-link'
import { Container } from '../index.ts'

import styles from './Header.module.scss'

const Header = ({ siteTitle }) => (
  <Container>
    <div className={styles.Header}>
      <Link className={styles.Logo} to="/">{siteTitle}</Link>

      <ul className={styles.HeaderLinks}>
        <li><Link to="/">The Latest</Link></li>
        <li><Link to="/">Popular</Link></li>
        <li><Link to="/">Staff Picks</Link></li>
        <li><Link to="/">About Us</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>

      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    </div>
  </Container>
)

export default Header
