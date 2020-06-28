import React from "react"
import { graphql } from "gatsby"

import StyledLink from "../components/styledLink"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { rhythm } from "../utils/typography"

class StuffPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const stuff = data.allMdx.nodes

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="stuff" />
        <h1>Stuff</h1>
        <div style={{ margin: "20px 0 40px" }}>
          {stuff.map(thing => {
            const title = thing.frontmatter.title
            const href = thing.frontmatter.link
            return (
              <div key={href}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <a
                    style={{ boxShadow: `none` }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={href}
                  >
                    {title}
                  </a>
                </h3>
              </div>
            )
          })}
        </div>
        <StyledLink to="/">Go home</StyledLink>
      </Layout>
    )
  }
}

export default StuffPage

export const stuffQuery = graphql`
  query StuffQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: { fileAbsolutePath: { regex: "/content/stuff/" } }) {
      nodes {
        frontmatter {
          title
          link
        }
      }
    }
  }
`
