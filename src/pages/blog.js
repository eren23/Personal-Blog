import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import classes from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  //PART BELOW FOR FETCHING FROM MARKDOWN FILES
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           html
  //           excerpt
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
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

  // const { title, date } = data.allMarkdownRemark.edges.node.frontmatter
  // console.log(data)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>My Blog</h1>
      <ol className={classes.posts}>
        {data.allContentfulBlogPost.edges.map(d => {
          return (
            <li className={classes.post}>
              <Link to={`/blog/${d.node.slug}`}>
                <h2>{d.node.title}</h2>
                <p>{d.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
