import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/index.scss"
import classes from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
