import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import { RecipeCard } from '../components/index.ts'

const IndexPage = ({ data }) => (
  <Layout>
    <div className="recipe-grid">
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <RecipeCard
          key={index}
          url={node.frontmatter.path}
          title={node.frontmatter.title}
          description={node.frontmatter.description}
        />
      ))}
    </div>

    <div className="pagination">
      <Link className="paginate-link right" to="/recipes/2">
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-arrow-right"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
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
