import React from 'react'
import Link from 'gatsby-link'

import {Container} from '../index.ts'

import styles from './Footer.module.scss'

const Footer = ({ siteTitle }) => (
  <Container>
    <div className={styles.Footer}>
      &copy; {new Date().getFullYear()} — Juwan Petty 

      <ul className={styles.FooterLinks}>
        <li><Link to="/">Changelog</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
    </div>
  </Container>
)

export default Footer
