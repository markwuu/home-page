import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import styled from "styled-components"
import profile from "../../assets/profile.jpg"
import { KeyboardIcon } from "../../assets/icons"

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

const FirstText = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  font-family: "Open Sans", sans-serif;
`
const Image = styled.img`
  z-index: 1;
  max-width: 33%;
  height: auto;
  border: 5px solid #117dac;
  float: left;
  margin-right: 20px;
`

const SecondText = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  font-family: "Open Sans", sans-serif;
`

export default () => (
  <Layout>
    <h2>
      Software Engineer
      <KeyboardIcon />
    </h2>
    <Container>
      <Image src={profile} />
      <FirstText>
        Hello, my name is Mark and I'm a software engineer. In 2018, I graduated
        from DevLeague's{" "}
        <StyledLink href="https://www.devleague.com/javascript-web-engineer">
          JavaScript Web Engineer track.
        </StyledLink>{" "}
        Today, I can be found building applications with the latest
        technologies.
      </FirstText>
      <SecondText>
        I am currently open to all opportunities. Feel free to take a look at
        some{" "}
        <Link to="/work">
          <StyledSpan>projects</StyledSpan>
        </Link>{" "}
        I've built. You can check out the code on{" "}
        <StyledLink href="https://github.com/markwuu">Github.</StyledLink>
      </SecondText>
    </Container>
  </Layout>
)
