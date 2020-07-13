const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        sort: { fields: [frontmatter___date], order: DESC }
        ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              date (formatString: "YYYY MM DD")
              path
              title
              templateKey
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              templateKey
              title
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              templateKey
              title
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((edge) => {
      const id = edge.node.id
      const previous = edge.previous
      const next = edge.next
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          previous,
          next,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const filePath = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value : filePath.replace(
        /^(\/blog\/)/, //remove /blog/ in url
        ""
      )
    })
  }
}


//fix trianglify here
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /canvas/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}