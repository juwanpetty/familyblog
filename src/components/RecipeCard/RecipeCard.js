import React, { PureComponent } from 'react'

import Link from 'gatsby-link'
import styles from './RecipeCard.module.scss'

const ellipsize = require('ellipsize');
// import Img from 'gatsby-image'


class RecipeCard extends PureComponent {
  // methods

  render() {
    const {url, title, description, featuredImage, size} = this.props;

    let cardStyle, cardTitle, descriptionMarkup = null;

    switch (size) {
      case 'small':
        cardStyle = styles.SmallCard;
        cardTitle = <h3 className={styles.SmallTitle}>{title}</h3>;
        break;
    
      case 'medium':
        cardStyle = styles.MediumCard;
        cardTitle = <h3 className={styles.MediumTitle}>{title}</h3>;
        descriptionMarkup = <p className={styles.Description}>{ellipsize(description, 90)}</p>; 
        break;

      case 'large':
        cardStyle = styles.LargeCard;
        cardTitle = <h3 className={styles.LargeTitle}>{title}</h3>;
        descriptionMarkup = <p className={styles.Description}>{ellipsize(description, 90)}</p>; 
        break;

      default:
        cardStyle = styles.SmallCard;
        cardTitle = <h3 className={styles.SmallTitle}>{title}</h3>;
        break;
    }

    console.log(featuredImage);

    return (
      <div className={cardStyle}>
        <Link to={url} className={styles.Image}>
          {/* <img src={featuredImage} alt={title} /> */}
        </Link>

        <div className={styles.Meta}>
          <p className={styles.CatDate}><Link to="/">News</Link> / 2 hrs ago</p>
          <Link to={url}>{cardTitle}</Link>
          {descriptionMarkup}
          <Link className={styles.Author} to="/">By Juwan Petty</Link>
        </div>
      </div>
    )
  }
}

export default RecipeCard
