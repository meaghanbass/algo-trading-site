exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions

    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    if (page.path.match(/^\/account/)) {
        page.matchPath = "/account/*"
    
        // Update the page.
        createPage(page)
    }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
        /*
        * During the build step, `auth0-js` will break because it relies on
        * browser-specific APIs. Fortunately, we don’t need it during the build.
        * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
        * during the build. (See `src/utils/auth.js` to see how we prevent this
        * from breaking the app.)
        */
        actions.setWebpackConfig({
            module: {
            rules: [
                {
                test: /auth0-js/,
                use: loaders.null(),
                },
            ],
            },
        })
    }
}

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const { createPage } = actions
    const result = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/pages.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
    })
}