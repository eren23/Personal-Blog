import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import "bootstrap/dist/css/bootstrap.min.css"

const indexPage = () => {
  return (
    <Layout>
      <Head title="Home" />

      <h1>Hello</h1>
      <p>
        <br />
        <br />
        Welcome to my blog.
        <br />
        <br />
        I'll, from time to time, publish stuff that I like here.
      </p>
    </Layout>
  )
}

export default indexPage
