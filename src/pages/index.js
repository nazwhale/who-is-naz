import React from "react"
import { Link } from "gatsby"
import scotland from "../../content/assets/scotland.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Who is Naz?"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src={scotland} alt="Potentially Naz" />
        <h1>Hey people</h1>
        <p>I'm Naz, welcome to my site.</p>
        <p>
          Inside you'll find some things that fell out of my brain at one time
          or another. I hope you like them.
        </p>
        <p>If you don't, that's cool too.</p>
        <p>
          How about some <Link to="/blog/">words</Link>. Or you could check out
          a few <Link to="/things/">things</Link>. If you're really bored,
          there's this place full of <Link to="/stuff/">stuff</Link>.
        </p>
      </Layout>
    )
  }
}

export default IndexPage
