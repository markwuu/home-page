import React from "react"
import { Link } from "gatsby"
import { LinkedinIcon, GithubIcon, EmailIcon } from "../../assets/icons"
import { Image } from "../components/UI/Picture"
import profile from "../../assets/profile.jpg"
import { Footer } from "./UI/Footer"
import { Header } from "./UI/Header"
import { Name } from "./UI/Name"

export default ({ children }) => (
  <React.Fragment>
    <Header>
      <div style={{ textAlign: `center` }}>
        <Link to="/">
          <Image src={profile} />
        </Link>
        <Link style={{ textDecoration: `none` }} to="/">
          <Name>Mark Wuu</Name>
        </Link>
      </div>
      {children}

      <Footer>
        <LinkedinIcon />
        <GithubIcon />
        <EmailIcon />
      </Footer>
    </Header>
  </React.Fragment>
)
