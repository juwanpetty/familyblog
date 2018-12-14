import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import kebabCase from "lodash/kebabCase"

import imageIcon from '../icons/image.svg';
import quoteIcon from '../icons/quote.svg';
import instructionsIcon from '../icons/instructions.svg';
import ingredientsIcon from '../icons/ingredients.svg';

export default class RecipeTemplate extends Component {
  render() {
    const data = this.props.data.markdownRemark.frontmatter
    const { tags, title, description, ingredients, steps } = data

    return (
      <Layout>
        <div className="blog-post">
          <div className="post-header">
            <h1 className="header-title">{title}</h1>
          </div>

          <div className="post-content">
            <div className="post-description">
              <div className="section-icon">
                <img src={quoteIcon} alt=""/>
              </div>

              <p>{description}</p>
            </div>

            <div className="post-image">
              <div className="section-icon">
                <img src={imageIcon} alt=""/>
              </div>
            </div>

            <div className="post-ingredients">
              <div className="section-icon">
                <img src={ingredientsIcon} alt=""/>
              </div>

              <h3>Ingredients</h3>

              <ul className="ingredients">
                {ingredients.map((ingredient, index) => {
                  return <li key={index} className="ingredient">{ingredient}</li>
                })}
              </ul>
            </div>

            <div className="post-instructions">
              <div className="section-icon">
                <img src={instructionsIcon} alt=""/>
              </div>

              <h3>Instructions</h3>
              
              {steps.map(step => {
                return <p>{step}</p>
              })}
            </div>

            <div className="post-footer">
              <div className="post-tags">
                {tags.map((tag, index) => {
                  return (<Link key={index} to={`/tags/${kebabCase(tag)}/`} className="footer-tags">{tag}</Link>)
                })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        description
        ingredients
        steps
      }
    }
  }
`
