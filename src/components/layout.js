import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { LinkedinIcon, GithubIcon, EmailIcon } from "../../assets/icons"

const Layout = styled.div`
  margin: 4rem auto;
  max-width: 850px;
  /* padding: 0 1rem; */
  font-family: "Domine", serif;
`

const Header = styled.header`
  margin-bottom: 1.5rem;
`

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 60%;
  height: 20%;
`

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <Layout>
    <Header>
      <h1 style={{ display: `inline` }}>Mark Wuu</h1>
      <ul style={{ display: `inline`, listStyle: `none`, float: `right` }}>
        <ListLink to="/">About</ListLink>
        <ListLink to="/work/">Work</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </Header>
    {children}
    <Footer>
      <LinkedinIcon />
      <GithubIcon />
      <EmailIcon />
    </Footer>
  </Layout>
)
