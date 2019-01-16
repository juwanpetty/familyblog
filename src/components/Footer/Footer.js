import React from 'react'

import {Container} from '../index.ts'

import styles from './Footer.module.scss'

const Footer = ({ siteTitle }) => (
  <Container>
    <div className={styles.Footer}>
      <div className={styles.FooterActions}>
        <div>
          <h6>For media queries</h6>
          <a href="mailto:email@email.com">contact@{siteTitle}.com</a>
        </div>

        <div className={styles.FooterLogo}>
          <h6>{siteTitle}</h6>
        </div>

        <div>
          <h6>Designed & Developed by</h6>
          <a href="/">Juwan Petty</a>
        </div>
      </div>

      <p className={styles.Copyright}>{siteTitle} Copyright. All Rights Reserved {new Date().getFullYear()}. View our Privacy Policy</p>
    </div>
  </Container>
)

export default Footer
