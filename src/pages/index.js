import React from "react"
import { Link } from "gatsby"
import scotland from "../../content/assets/scotland.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "who is naz"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src={scotland} alt="Potentially Naz" />
        <h1>Welcome</h1>
        <h1>|hi|</h1>
        <ul>
          <li>
            <Link to="/blog/">words</Link>
          </li>
          <li>
            <Link to="/things/">things</Link>
          </li>
          <li>
            <Link to="/stuff/">stuff</Link>
          </li>
        </ul>
      </Layout>
    )
  }
}

export default IndexPage
