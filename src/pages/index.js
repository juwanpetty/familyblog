import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { RecipeCard } from '../components/index.ts'

const IndexPage = ({ data }) => (
  <Layout>
    <div className="indexTag">
      <div className="section-header">
        <h2>Airbnb Engineering & Data Science</h2>
        <p>Create engineers and data scientists building a world where you can belong anywhere.</p>
      </div>
    </div>

    <div className="featured">
      <RecipeCard
        size="large"
        url={data.contentfulFeaturedPost.post.slug}
        title={data.contentfulFeaturedPost.post.title}
        featuredImage="/"
        description={data.contentfulFeaturedPost.post.description.description}
        author={data.contentfulFeaturedPost.post.author.name}
        publishedAt={data.contentfulFeaturedPost.post.publishDate}
      />
    </div>

    <div className="main">
      <div className="recipe-grid">
        {data.allContentfulPost.edges.map(({ node }, index) => (
          <RecipeCard
            key={index}
            size="medium"
            url={node.slug}
            title={node.title}
            featuredImage={node.heroImage.fluid.base64}
            description={node.description.description}
            author={node.author.name}
            publishedAt={node.publishDate}
          />
        ))}
      </div>
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="section-header">
            <h2>Stuff You Should Read</h2>
          </div>

          <div className="sidebar-list">
            {data.allContentfulRecommendedPosts.edges.map(({ node }, index) => (
              <div className="sidebar-listitem">
                <div>{index + 1}</div>
                <RecipeCard
                  size="small"
                  url={node.posts[0].slug}
                  title={node.posts[0].title}
                  featuredImage="/"
                  description={node.posts[0].description.description}
                  author={node.posts[0].author.name}
                  publishedAt={node.posts[0].publishDate}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="newsletter">
        <div>
          <h2>{data.site.siteMetadata.title}'s Newsletter</h2>
          <p>All of the jams, none of the spam.</p>
        </div>
        <form onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Your Email Address" />
          <button>Sign Up</button>
        </form>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate
          author {
            name
          }
          description {
            description
          }
          heroImage {
            fluid(maxWidth: 800) {
              base64
            }
          }
        }
      }
    }
    contentfulFeaturedPost {
      post {
        title
        slug
        publishDate
        description {
          description
        }
        author {
          name
        }
      }
    }
    allContentfulRecommendedPosts {
      edges {
        node {
          posts {
            title
            slug
            publishDate
            description {
              description
            }
            author {
              name
            }
          }
        }
      }
    }
  }
`
