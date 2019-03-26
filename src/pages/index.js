import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  font-size: 18px;
  max-width: 390px;
  margin: 0 auto;
`

const StyledLink = styled.a`
  color: #709043;
  transition: 0.4s;
  text-decoration: none;

  &:hover {
    color: white;
  }
`

const StyledSpan = styled.span`
  color: #709043;
  transition: 0.4s;
  text-decoration: none;

  &:hover {
    color: white;
  }
`

const Paragraph = styled.div`
  padding-top: 8px;
  padding-left: 10px;
  font-family: "Source Sans Pro", sans-serif;
  text-align: left;
`

export default () => (
  <Layout>
    <h2>Software Engineer</h2>
    <Container>
      <Paragraph>
        <span style={{ fontSize: `40px`, fontFamily: `Domine` }}>H</span>ello,
        my name is Mark and I'm a software engineer. In 2018, I graduated from
        DevLeague's{" "}
        <StyledLink href="https://www.devleague.com/javascript-web-engineer">
          JavaScript Web Engineer track.
        </StyledLink>{" "}
        Today, I can be found building applications with the latest
        technologies.
      </Paragraph>
      <Paragraph>
        I am currently open to all opportunities. Feel free to take a look at
        some{" "}
        <Link to="/work">
          <StyledSpan>projects</StyledSpan>
        </Link>{" "}
        I've built. You can check out the code on{" "}
        <StyledLink href="https://github.com/markwuu">Github.</StyledLink>
      </Paragraph>
    </Container>
  </Layout>
)
