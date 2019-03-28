import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import 'semantic-ui-css/semantic.min.css'
import About from "../components/About";
import Skills from "../components/Skills";
import Story from "../components/Story";
import Work from "../components/Work";
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <About />
    <Skills />
    <Story />
    <Work />
  </Layout>
)

export default IndexPage
