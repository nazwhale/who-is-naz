import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import StyledLink from "../components/styledLink"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404" />
        <h1>Page not found</h1>
        <p>
          You're lost, <StyledLink to="/">go home</StyledLink>
        </p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
