const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulPost(filter: { node_locale: { eq: "en-US" } }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    // console.log(JSON.stringify(result, null, 4));

    result.data.allContentfulPost.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/RecipeTemplate.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug,
        },
      })
    })
  })
}
