import React from "react"
import { Link } from "gatsby"
import scotland from "../../content/assets/scotland.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

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
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
