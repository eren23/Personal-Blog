import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// import "./header.module.scss"
import classes from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata
  return (
    <header className={classes.header}>
      <h1>
        <Link className={classes.title} to="/">
          {title}
        </Link>
      </h1>
      <nav>
        <ul className={classes.navList}>
          <li>
            <Link
              className={classes.navItem}
              activeClassName={classes.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={classes.navItem}
              activeClassName={classes.activeNavItem}
              to="/blog/1"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={classes.navItem}
              activeClassName={classes.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={classes.navItem}
              activeClassName={classes.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
