import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="Page Not Found" />
      <h1>Page not Found</h1>
      <p>
        <Link to="/">Return to Home Page</Link>
      </p>
    </Layout>
  )
}

export default NotFound
