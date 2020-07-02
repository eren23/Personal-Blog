import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const indexPage = () => {
  return (
    <Layout>
      <Head title="Home" />

      <h1>Hello</h1>
      <p>
        This blog was meant to teach me Gatsby but maybe in time I can write
        down couple of things and teach some to others.
      </p>
    </Layout>
  )
}

export default indexPage
