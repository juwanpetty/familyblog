import React, { PureComponent } from 'react'
import Link from 'gatsby-link'

import styles from './Navigation.module.scss'

class Navigation extends PureComponent {
  // methods

  render() {
    return (
      <div className={styles.CarouselWrapper}>
        <div className={styles.Reverse}>Reverse</div>
        <div className={styles.Navigation}>
          <ul class={styles.CarouselNavigationInner}>
            <li>
              <Link to="/">Lunch</Link>
            </li>
            <li>
              <Link to="/">Pasta</Link>
            </li>
            <li>
              <Link to="/">Seafood</Link>
            </li>
            <li>
              <Link to="/">Pastries</Link>
            </li>
            <li>
              <Link to="/">Healthy</Link>
            </li>
            <li>
              <Link to="/">Six</Link>
            </li>
            <li>
              <Link to="/">Twelve</Link>
            </li>
            <li>
              <Link to="/">Breakfast</Link>
            </li>
            <li>
              <Link to="/">Sides</Link>
            </li>
            <li>
              <Link to="/">Dessert</Link>
            </li>
            <li>
              <Link to="/">Drinks</Link>
            </li>
            <li>
              <Link to="/">Snacks</Link>
            </li>
          </ul>
        </div>
        <div className={styles.Forward}>Forward</div>
      </div>
    )
  }
}

export default Navigation
