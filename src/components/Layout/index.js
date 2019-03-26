
import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"

import Header from "../Header"
import Footer from "../Footer"
import './style.scss'


const Layout = ({ children }) => {
  console.log(children)
  return (
    <div id="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
