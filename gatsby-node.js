const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const RecipeTemplate = path.resolve(`src/templates/RecipeTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: RecipeTemplate,
        context: {}, // additional data can be passed via context
      })
    })

    // create recipe list pages
    const posts = result.data.allMarkdownRemark.edges
    const postsPerPage = 10
    const numberOfPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numberOfPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/recipes` : `/recipes/${i + 1}`,
        component: path.resolve('./src/templates/RecipeList.js'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages: numberOfPages,
          currentPage: i + 1,
        },
      })
    })
  })
}
