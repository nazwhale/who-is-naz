import React from "react"
import { graphql } from "gatsby"

import StyledLink from "../components/styledLink"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class ThingsPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const things = data.allMdx.nodes

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="things" />
        <h1>Things</h1>
        <div style={{ margin: "20px 0 40px" }}>
          {things.map(thing => {
            const { title, description, link } = thing.frontmatter
            return (
              <div key={link}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <StyledLink
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link}
                  >
                    {title}
                  </StyledLink>
                </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                />
              </div>
            )
          })}
        </div>
        <StyledLink to="/" small={true}>
          Go home
        </StyledLink>
      </Layout>
    )
  }
}

export default ThingsPage

export const thingsQuery = graphql`
  query ThingsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: { fileAbsolutePath: { regex: "/content/things/" } }) {
      nodes {
        frontmatter {
          title
          description
          link
        }
      }
    }
  }
`
