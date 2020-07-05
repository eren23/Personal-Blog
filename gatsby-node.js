const path = require("path")

//The one below was for the slugs we don't need it anymore
// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }
// this functions registers and runs to gatsby when they suppose to, so when new node is created

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const blogsTemplate = path.resolve("./src/templates/blogs.js")

  const res = await graphql(`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  const posts = res.data.allContentfulBlogPost.edges
  const postsPerPage = 10
  const numberOfPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numberOfPages }).forEach((_, index) => {
    const isFirstPage = index === 0
    const currentPage = index + 1

    //if (isFirstPage) return

    createPage({
      component: blogsTemplate,
      path: `/blog/${currentPage}`,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numberOfPages: numberOfPages,
        currentPage: currentPage,
      },
    })
  })
}
