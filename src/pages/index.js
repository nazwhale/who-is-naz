import React from "react"
import styled from "styled-components"
import cowboy from "../../content/assets/cowboy.jpeg"
import lines from "../../content/assets/lines.png"

import StyledLink from "../components/styledLink"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  border: 0.5rem #1F1D1F solid;
  color: #1F1D1F;


  @media (max-width: 801px) {
    grid-template-columns: auto;
  }
`

const GridLeftColumn = styled.div`
  grid-column: 1/2;
`

const GridRightColumn = styled.div`
  grid-column: 2/3;
  grid-row: 1/5;

  @media (max-width: 801px) {
    grid-column: 1/2;
  }

`

const Section = styled.div`
  padding: 1rem;
  ${props => !props.last && "border-bottom: 0.5rem #1F1D1F solid"};
  border-right: 0.5rem #1F1D1F solid;

  @media (max-width: 801px) {
    border-right: none;
  }
`

const LinksContainer = styled.div`
    padding-left: 2.5rem;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.2rem;
`

const SmallText = styled.p`
  font-weight: lighter;
  margin: 0;
  letter-spacing: 0.2rem;
  font-size: 12px;
`

const WelcomeText = styled.h1`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: normal;
`

const ImageBlackBlock = styled.div`
  background-color: #1F1D1F;
  width: 100%;
  height: ${props => props.height};
  @media (max-width: 801px) {
    height: 0;
  }

`

class IndexPage extends React.Component {
  render() {
    const siteTitle = "who is naz"

    return (
      <Layout location={this.props.location}>
        <SEO
          title="home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Container>
          <GridLeftColumn>
            <Section>
              <SmallText>8J+mgAo=</SmallText>
            </Section>
          </GridLeftColumn>
          <GridRightColumn>
            <ImageBlackBlock height="0.5rem" />
            <img
              style={{
                marginBottom: "-8px",
                borderBottom: "0.5rem #1F1D1F solid",
              }}
              src={cowboy}
              alt="Potentially naz"
            />
            <ImageBlackBlock height="1.85rem" />
          </GridRightColumn>

          <GridLeftColumn>
            <Section>
              <div style={{ display: "flex" }}>
                <img
                  style={{
                    margin: 0,
                    marginRight: "1rem",
                    width: "144px",
                  }}
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
              <LinksContainer>
                <SmallText>
                  <StyledLink to="/blog/">01. words</StyledLink>
                </SmallText>
                <SmallText>
                  <StyledLink to="/things/">02. things</StyledLink>
                </SmallText>
                <SmallText>
                  <StyledLink to="/stuff/">03. stuff</StyledLink>
                </SmallText>
              </LinksContainer>
            </Section>
          </GridLeftColumn>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
