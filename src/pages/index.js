import React from "react"
import { LinkedinIcon, GithubIcon, EmailIcon } from "../../assets/icons"
import { Footer } from "../components/UI/Footer"
import { Body } from "../components/UI/Body"
import { Helmet } from "react-helmet"
import { Name } from "../components/UI/Name"
import { Title } from "../components/UI/Title"
import { About } from "../components/UI/About"
import { Button } from "../components/UI/Button"
import { Panel } from "../components/UI/Panel"
import { Container } from "../components/UI/Container"
import { slide as Menu } from "react-burger-menu"

export default () => (
  <React.Fragment>
    <Helmet>
      <style>
        {`body {
            position: relative;
            margin: 0;
            background-color: #01012a;
        }`}
      </style>
    </Helmet>
    <Body>
      <Panel>
        <Container>
          <Name>Mark Wuu</Name>
          <Title>Software Engineer</Title>
          <About>
            Hi, my name is Mark Wuu and I create web applications for the
            internet. I'm currently open to all possibilities. Feel free to
            browse through my work.
          </About>
        </Container>
        <Button>View Work</Button>
      </Panel>

      <Panel />
    </Body>

    <Footer>
      <LinkedinIcon />
      <GithubIcon />
      <EmailIcon />
    </Footer>
  </React.Fragment>
)
