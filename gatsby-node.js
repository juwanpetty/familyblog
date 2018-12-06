const path = require('path')
const _ = require("lodash")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const RecipeTemplate = path.resolve(`src/templates/RecipeTemplate.js`)
  const tagTemplate = path.resolve("src/templates/tags.js")

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
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: RecipeTemplate,
        context: {}, // additional data can be passed via context
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    console.log('TAGS:', tags);

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })

    // create recipe list pages
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
