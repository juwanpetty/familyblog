import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { RecipeCard } from '../components/index.ts'

export default class RecipeList extends Component {
  render() {
    const { currentPage, numPages } = this.props.pageContext
    const posts = this.props.data.allMarkdownRemark.edges

    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout>
        <div className="recipe-grid">
          {posts.map(({ node }, index) => (
            <RecipeCard
              key={index}
              url={node.frontmatter.path}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
            />
          ))}
        </div>

        <div className="pagination">
          {!isFirst && (
            <Link className="paginate-link left" to={prevPage}>
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
                className="feather feather-arrow-left"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Previous
            </Link>
          )}

          {!isLast && (
            <Link className="paginate-link right" to={nextPage}>
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
          )}
        </div>
      </Layout>
    )
  }
}

export const recipeListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
