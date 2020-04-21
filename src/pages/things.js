import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"

class ThingsPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    const things = [
      {
        name: "furlough pay calculator",
        href: "https://www.furloughpaycalculator.co.uk/",
      },
    ]

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Things" />
        <h1>Things</h1>
        <p>Here are some things that I've made...</p>
        <div style={{ margin: "20px 0 40px" }}>
          {things.map(thing => {
            const title = thing.name
            return (
              <div key={thing.name}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <a
                    style={{ boxShadow: `none` }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={thing.href}
                  >
                    {title}
                  </a>
                </h3>
              </div>
            )
          })}
        </div>
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default ThingsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
