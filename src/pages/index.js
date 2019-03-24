import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  font-size: 18px;
  padding-inline-end: 13rem;
`

export default () => (
  <Layout>
    <h2>Software Engineer</h2>
    <Container>
      <p>
        Hi, my name is Mark Wuu and I'm a software engineer. In 2018, I
        graduated from DevLeague's{" "}
        <a href="https://www.devleague.com/javascript-web-engineer">
          JavaScript Web Engineer track.
        </a>{" "}
        Today, I can be found building applications with the latest
        technologies.
      </p>
        <p>I am currently open to all opportunities. Feel free to
        take a look at some <Link to="/work">projects</Link> I've built. You can
        check out the code on{" "}
        <a href="https://github.com/markwuu">Github.</a>
        </p>
    </Container>
  </Layout>
)
