import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import cowboy from "../../content/assets/cowboy.jpeg"
import lines from "../../content/assets/lines.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  border: 0.5rem black solid
`

const GridLeftColumn = styled.div`
  grid-column: 1/2;
`

const GridRightColumn = styled.div`
  grid-column: 2/3;
`

const Section = styled.div`
  ${props => !props.last && "border-bottom: 0.5rem black solid"};
  border-right: 0.5rem black solid;
  padding: 1rem;
`

const SmallText = styled.p`
  font-weight: lighter;
  margin: 0;
`

const WelcomeText = styled.h1`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: normal;
`

class IndexPage extends React.Component {
  render() {
    const siteTitle = "who is naz"

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Container>
          <GridLeftColumn>
            <Section>
              <SmallText>
                -<br />
                JUN2020
              </SmallText>
            </Section>

            <Section>
              <div style={{ display: "flex" }}>
                <img
                  style={{ margin: 0, marginRight: "1rem", width: "144px" }}
                  src={lines}
                  alt="lines"
                />
                <h3
                  style={{
                    margin: 0,
                    marginTop: "3px",
                    textAlign: "right",
                    fontWeight: "normal",
                  }}
                >
                  {siteTitle}
                </h3>
              </div>
            </Section>

            <Section>
              <WelcomeText>Welcome</WelcomeText>
              <h1
                style={{
                  margin: 0,
                  fontWeight: "normal",
                  letterSpacing: "0.2rem",
                }}
              >
                |hi|
              </h1>
            </Section>

            <Section last={true}>
              <SmallText>
                <Link to="/blog/">01. words</Link>
              </SmallText>
              <SmallText>
                <Link to="/things/">02. things</Link>
              </SmallText>
              <SmallText>
                <Link to="/stuff/">03. stuff</Link>
              </SmallText>
            </Section>
          </GridLeftColumn>
          <GridRightColumn>
            <img
              style={{ marginBottom: "-8px" }}
              src={cowboy}
              alt="Potentially Naz"
            />
            <div
              style={{
                backgroundColor: "black",
                width: "100%",
                height: "25%",
              }}
            />
          </GridRightColumn>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
