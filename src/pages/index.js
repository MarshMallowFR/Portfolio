import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import 'semantic-ui-css/semantic.min.css'
import Description from "../components/Description";
import Skills from "../components/Skills";
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Description />
    <Skills />
  </Layout>
)

export default IndexPage
