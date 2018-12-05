import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default class RecipeTemplate extends Component {
  render() {
    const data = this.props.data.markdownRemark.frontmatter
    const { categories, title, path } = data

    return (
      <Layout>
        <div className="blog-post">
          <div className="post-header">
            <p className="header-tags">{categories.length && categories[0]}</p>
            <h1 className="header-title">{title}</h1>
          </div>

          <div className="post-content">
            <p className="post-description">
              Great little plugin that speeds up the scrolling speed when you
              use a trackpad.
            </p>

            <div className="post-image" />

            <div className="post-ingredients">
              <h3>Ingredients</h3>
              <ul className="ingredients">
                <li className="ingredient">
                  4 pounds unpeeled russet potatoes (about 5 large potatoes)
                </li>
                <li className="ingredient">
                  1 pound yellow onions (about 2 medium onions)
                </li>
                <li className="ingredient">1/4 cup matzo meal</li>
                <li className="ingredient">
                  2 teaspoons kosher salt, plus more to taste
                </li>
                <li className="ingredient">
                  1/2 teaspoon freshly ground black pepper
                </li>
                <li className="ingredient">2 large eggs, lightly beaten</li>
                <li className="ingredient">
                  1/4–1/2 cup (or more) vegetable oil
                </li>
                <li className="ingredient">
                  1/4 cup (or more) schmaltz (rendered chicken fat; optional)
                </li>
                <li className="ingredient">Apple sauce, for serving</li>
                <li className="ingredient">Sour cream, for serving</li>
              </ul>
            </div>

            <div className="post-instructions">
              <h3>Instructions</h3>
              <p>
                Heat the olive oil in a large soup pot over medium heat and add
                the onion, garlic, and jalapeño. Saute until soft and fragrant.
              </p>
              <p>
                Add sweet potatoes. I like to brown them a little bit with the
                aromatics to get them nice and flavorful.
              </p>
              <p>
                Add tomatoes, coconut milk, water, spices, and peanuts. Simmer
                until sweet potatoes are fork-tender.
              </p>
              <p>
                Add peanut butter and kale. Simmer until everything is thick,
                creamy, and delicious. Top with more peanuts and a little
                cilantro if you’re obsessed like me.
              </p>
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
        categories
      }
    }
  }
`
