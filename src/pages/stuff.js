import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class StuffPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    const stuff = [
      {
        name: "these peculiar websites",
        href: "https://www.newrafael.com/websites/",
      },
      {
        name: "monday morning mixtapes",
        href:
          "http://www.stampthewax.com/category/m-i-x-e-s/monday-morning-mixtapes/",
      },
      {
        name: "things Dan Abramov doesn't know",
        href: "https://overreacted.io/things-i-dont-know-as-of-2018/",
      },
      {
        name: "Julia Evans helping everyone be less of a dick",
        href: "https://jvns.ca/blog/2017/04/27/no-feigning-surprise/",
      },
      {
        name: "this guy's kooky chess videos",
        href:
          "https://www.youtube.com/watch?v=_dnk-1T_nKs&list=PLsgivuu-AHKt-7BsFpyTN0vufeQ20y7bq&index=4",
      },
    ]

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Stuff" />
        <h1>Stuff</h1>
        <p>Here's some stuff that I'm fond of...</p>
        <div style={{ margin: "20px 0 40px" }}>
          {stuff.map(thing => {
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
        <Link to="/">Go Home</Link>
      </Layout>
    )
  }
}

export default StuffPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
