import React from "react"

// Components
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import { RecipeCard } from '../components/index.ts'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <h1>{tagHeader}</h1>
      <div className="recipe-grid">
        {edges.map(({ node }, index) => {
          return (
            <RecipeCard
              key={index}
              url={node.frontmatter.path}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
            />
          )
        })}
      </div>
      {/*
              This links to a page that does not yet exist.
              We'll come back to it!
            */}
      <Link to="/tags">All tags</Link>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
            date(fromNow: true)
            author
            categories
            tags
            description
            ingredients
            steps
          }
        }
      }
    }
  }
`