import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" /> <h1>About Page Title</h1>
      <p>Bio will be here</p>
      <p>
        Go to Contact page <Link to="/contact">Here</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
