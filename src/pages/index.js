import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Biography, BioContainer } from "../components/UI/Biography"
import { StyledLink, StyledSpan } from "../components/UI/StyledLink"
import { HomeTitle } from "../components/UI/HomeTitle"

export default () => (
  <Layout>
    <h2>Software Engineer</h2>
    <BioContainer>
      <Biography>
        <span style={{ fontSize: `40px`, fontFamily: `Domine` }}>H</span>ello,
        my name is Mark and I'm a software engineer. In 2018, I graduated from
        DevLeague's{" "}
        <StyledLink href="https://www.devleague.com/javascript-web-engineer">
          JavaScript Web Engineer track.
        </StyledLink>{" "}
        Today, I can be found building applications with the latest
        technologies.
      </Biography>
      <Biography>
        I am currently open to all opportunities. Feel free to take a look at
        some{" "}
        <Link to="/work">
          <StyledSpan>projects</StyledSpan>
        </Link>{" "}
        I've built. You can check out the code on{" "}
        <StyledLink href="https://github.com/markwuu">Github.</StyledLink>
      </Biography>
    </BioContainer>
  </Layout>
)
