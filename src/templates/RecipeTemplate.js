import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const { title, author, tags, body, categories } = data.contentfulPost
  const bodyMarkup = body.childMarkdownRemark.html
  const authorMarkup = author.biography.childMarkdownRemark.html

  return (
    <Layout>
      <div className="recipe-template">
        <div className="share">
          <div className="share-container">
            <Link to="/" className="share-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-mail"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </Link>
            <Link to="/" className="share-item">
              <svg
                width="48"
                height="40"
                viewBox="0 0 48 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Twitter"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M48 4.73528C46.2363 5.53846 44.3374 6.08162 42.3455 6.3243C44.3796 5.0762 45.9405 3.09715 46.6758 0.739617C44.7713 1.89527 42.6667 2.73601 40.4184 3.18671C38.6265 1.22499 36.0655 0 33.2312 0C27.7964 0 23.3872 4.52149 23.3872 10.0975C23.3872 10.8891 23.4717 11.6576 23.6408 12.3973C15.4562 11.9754 8.20144 7.95955 3.34143 1.84326C2.4934 3.33983 2.0088 5.0762 2.0088 6.92524C2.0088 10.4269 3.74714 13.5182 6.38986 15.3297C4.77831 15.2806 3.25691 14.8212 1.9271 14.0701V14.1943C1.9271 19.0885 5.32206 23.1708 9.8299 24.0953C9.0044 24.3322 8.13383 24.4507 7.23508 24.4507C6.60116 24.4507 5.98133 24.39 5.38123 24.2716C6.63497 28.2817 10.2694 31.2026 14.58 31.2806C11.2104 33.9906 6.96179 35.6056 2.34971 35.6056C1.5552 35.6056 0.769149 35.5594 0 35.467C4.35851 38.3272 9.53689 40 15.0956 40C33.2115 40 43.1146 24.6154 43.1146 11.2705C43.1146 10.8313 43.1062 10.3922 43.0893 9.96172C45.0136 8.53738 46.6843 6.76056 48 4.73528"
                  fill="#00AAEC"
                />
              </svg>
            </Link>
            <Link to="/" className="share-item">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Facebook"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.6384 48H2.64923C1.18567 48 0 46.8136 0 45.3506V2.64921C0 1.18585 1.18586 0 2.64923 0H45.351C46.814 0 48 1.18585 48 2.64921V45.3506C48 46.8138 46.8138 48 45.351 48H33.1193V29.4118H39.3585L40.2928 22.1676H33.1193V17.5426C33.1193 15.4453 33.7017 14.016 36.7093 14.016L40.5453 14.0143V7.53509C39.8819 7.44681 37.6048 7.24957 34.9556 7.24957C29.4248 7.24957 25.6384 10.6255 25.6384 16.8252V22.1676H19.3831V29.4118H25.6384V48V48Z"
                  fill="#4460A0"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="recipe-content">
          <div className="recipe-header">
            <h1 className="recipe-title">{title}</h1>

            <div className="recipe-meta">
              <div className="image-container">
                <img src="" alt="" />
              </div>
              <p>
                by{' '}
                <Link className="author" to="/">
                  {author.name}
                </Link>{' '}
                in{' '}
                <Link to="/" className="category">
                  {categories[0]}
                </Link>
              </p>
            </div>
          </div>
          <div
            className
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: bodyMarkup }}
          />
          <div className="tags-share">
            <ul className="tags">
              {tags.map(tag => (
                <li>
                  <Link to="/">{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="recipe-author">
            <h3>About the Author</h3>
            <div className="author-info">
              <div className="image-container">
                <img src="" alt="" />
              </div>
              <div className="info">
                <h4>{author.name}</h4>
                <div
                  className
                  className="markdown-body"
                  dangerouslySetInnerHTML={{ __html: authorMarkup }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      tags
      categories
      author {
        name
        biography {
          childMarkdownRemark {
            html
          }
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
