import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  font-size: 18px;
  padding-inline-end: 10rem;
`

const StyledLink = styled.a`
  color: #117dac;
  transition: 0.4s;
  text-decoration: none;

  &:hover {
    color: #005073;
  }
`

const StyledSpan = styled.span`
  color: #117dac;
  transition: 0.4s;
  text-decoration: none;

  &:hover {
    color: #005073;
  }
`

const Paragraph = styled.div`
  padding-top: 10px;
  margin-top: 50px;
  margin-bottom: 30px;
  font-family: "Source Sans Pro", sans-serif;
`

export default () => (
  <Layout>
    <h2>Software Engineer</h2>
    <Container>
      <Paragraph>
        Hello, my name is Mark and I'm a software engineer. In 2018, I graduated
        from DevLeague's{" "}
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
