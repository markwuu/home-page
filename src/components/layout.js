import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { LinkedinIcon, GithubIcon, EmailIcon } from "../../assets/icons"
// import { NameHeader } from "./UI/Name"
import { Image } from "../components/UI/Picture"
import profile from "../../assets/profile.jpg"

const Layout = styled.div`
  max-width: 850px;
  font-family: "Domine", serif;
  border: 2px solid black;
  text-align: center;
  background-color: #212b46;
  color: #fdfdfb;
  padding-top: 3.5%;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  margin: auto;
`

const Header = styled.div`
  text-align: center;
`

const Footer = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  height: 7%;
`

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <Layout>
    <Image src={profile} />
    <ul style={{ textAlign: `center` }}>
      <ListLink to="/">About</ListLink>
      <ListLink to="/work/">Work</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
    {children}
    <Footer>
      <LinkedinIcon />
      <GithubIcon />
      <EmailIcon />
    </Footer>
  </Layout>
)
