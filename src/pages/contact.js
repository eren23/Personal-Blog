import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        <br />
        <br />
        Send me an email at: "erenak1996@gmail.com" or...
      </p>
      <a
        href="https://www.akbuluteren.com/"
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "1rem",
          fontStyle: "italic",
          textDecoration: "underline",
        }}
      >
        Go to my website
      </a>
    </Layout>
  )
}

export default ContactPage
