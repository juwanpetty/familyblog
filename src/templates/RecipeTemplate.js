import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  // const { markdownRemark } = data // data.markdownRemark holds our post data
  // const { frontmatter } = markdownRemark
  return (
    <Layout>
      <div className="blog-post">
        <div className="post-header">
          <p className="header-tags">Plugins</p>
          <h1 className="header-title">Sketch Trackpad Speed</h1>
        </div>

        <div className="post-content">
          <p className="post-description">Great little plugin that speeds up the scrolling speed when you use a trackpad.</p>

          <div className="post-image"></div>

          <div className="post-ingredients">
            <h3>Ingredients</h3>
            <p>Heat the olive oil in a large soup pot over medium heat and add the onion, garlic, and jalapeño. Saute until soft and fragrant.</p>
            <p>Add sweet potatoes. I like to brown them a little bit with the aromatics to get them nice and flavorful.</p>
            <p>Add tomatoes, coconut milk, water, spices, and peanuts. Simmer until sweet potatoes are fork-tender.</p>
            <p>Add peanut butter and kale. Simmer until everything is thick, creamy, and delicious. Top with more peanuts and a little cilantro if you’re obsessed like me.</p>
          </div>

          <div className="post-instructions">
            <h3>Instructions</h3>
            <p>Heat the olive oil in a large soup pot over medium heat and add the onion, garlic, and jalapeño. Saute until soft and fragrant.</p>
            <p>Add sweet potatoes. I like to brown them a little bit with the aromatics to get them nice and flavorful.</p>
            <p>Add tomatoes, coconut milk, water, spices, and peanuts. Simmer until sweet potatoes are fork-tender.</p>
            <p>Add peanut butter and kale. Simmer until everything is thick, creamy, and delicious. Top with more peanuts and a little cilantro if you’re obsessed like me.</p>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`