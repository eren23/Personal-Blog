import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import classes from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  const { author } = data.site.siteMetadata
  return (
    <footer className={classes.footer}>
      <p>This site has created by {author} Copyright 2020</p>
    </footer>
  )
}

export default Footer
