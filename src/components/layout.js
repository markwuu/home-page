import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { LinkedinIcon, GithubIcon, EmailIcon } from "../../assets/icons"
import { Image } from "../components/UI/Picture"
import profile from "../../assets/profile.jpg"

const Header = styled.div`
  max-width: 850px;
  font-family: "Domine", serif;
  background-color: #222222;
  color: white;
  padding-top: 3.5%;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`

const Footer = styled.div`
  position: fixed;
  left: 47%;
  bottom: 0;
  height: 5%;
`

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link style={{ color: `#709043`, textDecoration: `none` }} to={props.to}>
      {props.children}
    </Link>
  </li>
)

export default ({ children }) => (
  <React.Fragment>
    <Header>
      <div style={{ textAlign: `center` }}>
        <Image src={profile} />
        <h1>Mark Wuu</h1>
      </div>
      <ListLink to="/">About</ListLink>
      <ListLink to="/work/">Work</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
      {children}
    </Header>

    <Footer>
      <LinkedinIcon />
      <GithubIcon />
      <EmailIcon />
    </Footer>
  </React.Fragment>
)
