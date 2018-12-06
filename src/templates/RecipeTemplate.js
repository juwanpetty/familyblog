import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import kebabCase from "lodash/kebabCase"

export default class RecipeTemplate extends Component {
  render() {
    const data = this.props.data.markdownRemark.frontmatter
    const { tags, title, description, ingredients, steps } = data

    return (
      <Layout>
        <div className="blog-post">
          <div className="post-header">
            <div className="post-tags">
              {tags.map((tag, index) => {
                return (<Link key={index} to={`/tags/${kebabCase(tag)}/`} className="header-tags">{tag}</Link>)
              })}
            </div>
            <h1 className="header-title">{title}</h1>
            
          </div>

          <div className="post-content">
            <p className="post-description">{description}</p>

            <div className="post-image" />

            <div className="post-ingredients">
              <h3>Ingredients</h3>
              <ul className="ingredients">
                {ingredients.map(ingredient => {
                  return <li className="ingredient">{ingredient}</li>
                })}
              </ul>
            </div>

            <div className="post-instructions">
              <h3>Instructions</h3>
              {steps.map(step => {
                return <p>{step}</p>
              })}
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
