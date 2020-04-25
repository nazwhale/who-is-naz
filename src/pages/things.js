import React from "react"
import { Link, graphql } from "gatsby"

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
        <SEO title="Things" />
        <h1>Things</h1>
        <p>Here's a few things that I've made or helped make...</p>
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
                  <a
                    style={{ boxShadow: `none` }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link}
                  >
                    {title}
                  </a>
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
        <Link to="/">Go Home</Link>
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
