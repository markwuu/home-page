import React from "react"
import { Link } from "gatsby"
import { LinkedinIcon, GithubIcon, EmailIcon } from "../../assets/icons"
import { Image } from "../components/UI/Picture"
import profile from "../../assets/profile.jpg"
import { Footer } from "./UI/Footer"
import { Body } from "./UI/Body"
import { Name } from "./UI/Name"
import { Container } from "./UI/Container"
import { Helmet } from "react-helmet"

export default ({ children }) => (
  <React.Fragment>
    <Helmet>
      <style>
        {`      body {
        position: relative;
      }`}
      </style>
    </Helmet>
    <Body>
      <Container>
        <Link to="/">
          <Image src={profile} />
        </Link>
        <Link style={{ textDecoration: `none` }} to="/">
          <Name>Mark Wuu</Name>
        </Link>
      </Container>

      {children}
    </Body>

    <Footer>
      <LinkedinIcon />
      <GithubIcon />
      <EmailIcon />
    </Footer>
  </React.Fragment>
)
