import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import classes from "../pages/blog.module.scss"
import Head from "../components/head"
import PaginationLinks from "../components/PaginationLinks"

const blogs = props => {
  const { currentPage, numberOfPages } = props.pageContext
  const data = props.data.allContentfulBlogPost.edges

  console.log(data)
  return (
    <Layout>
      <Head title="Blog" />
      <h1>My Blog</h1>
      <ol className={classes.posts}>
        {data.map(d => {
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PaginationLinks
          currentPage={currentPage}
          numberOfPages={numberOfPages}
        />
      </div>
    </Layout>
  )
}

export const postListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: { fields: publishedDate, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`

export default blogs
