import React from 'react'
import { graphql, Link } from 'gatsby'

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
        url="/"
        title="Chicken Stew with Cheesy Onion Biscuits"
        featuredImage="/"
        description="Here's one of the most useful generic pieces of advice I carry around in my head. How..."
      />
    </div>

    <div className="main">
      <div className="recipe-grid">
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <RecipeCard
            key={index}
            size="medium"
            url={node.frontmatter.path}
            title={node.frontmatter.title}
            featuredImage={node.frontmatter.featuredImage}
            description={node.frontmatter.description}
          />
        ))}
      </div>
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="section-header">
            <h2>Stuff You Should Read</h2>
          </div>

          <div className="sidebar-list">
            <div className="sidebar-listitem">
              <div>1</div>
              <RecipeCard
                size="small"
                url="/"
                title="Red Pepper Fettuccine with Shrimp"
                featuredImage="/"
                description="Here's one of the most useful generic pieces of advice I carry around in my head. How..."
              />
            </div>
            <div className="sidebar-listitem">
              <div>2</div>
              <RecipeCard
                size="small"
                url="/"
                title="Mushroom Fettuccine"
                featuredImage="/"
                description="I’m totally enjoying Gatsby for various reasons, and in this post I want to share how easy it is to add customized page transitions to…"
              />
            </div>
            <div className="sidebar-listitem">
              <div>3</div>
              <RecipeCard
                size="small"
                url="/"
                title="Chicken Stew with Cheesy Onion Biscuits"
                featuredImage="/"
                description="I’m totally enjoying Gatsby for various reasons, and in this post I want to share how easy it is to add customized page transitions to…"
              />
            </div>
            <div className="sidebar-listitem">
              <div>4</div>
              <RecipeCard
                size="small"
                url="/"
                title="Southwest Cilantro Lime Corn Salad"
                featuredImage="/"
                description="I’m totally enjoying Gatsby for various reasons, and in this post I want to share how easy it is to add customized page transitions to…"
              />
            </div>
            <div className="sidebar-listitem">
              <div>5</div>
              <RecipeCard
                size="small"
                url="/"
                title="Chicken Miso Ramen"
                featuredImage="/"
                description="I’m totally enjoying Gatsby for various reasons, and in this post I want to share how easy it is to add customized page transitions to…"
              />
            </div>
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

    <div className="pagination">
      {data.allMarkdownRemark.totalCount > 10 ? <Link className="paginate-link right" to="/recipes/2">
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
      </Link>: null}
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
      totalCount
      edges {
        node {
          frontmatter {
            title
            featuredImage
            path
            description
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
