import React from "react"
import { Helmet } from "react-helmet"
import { LinkedinIcon, GithubIcon, EmailIcon } from "../../assets/icons"
import Footer from "../components/UI/Footer"
import Body from "../components/UI/Body"
import Name from "../components/UI/Name"
import Title from "../components/UI/Title"
import About from "../components/UI/About"
import Button from "../components/UI/Button"
import Panel from "../components/UI/Panel"
import Container from "../components/UI/Container"
import Project from "../components/UI/Project"
import Code from "../components/UI/Code"
import ProjectContainer from "../components/UI/ProjectContainer"
import menuStyles from "../components/menuStyles.css"
import Menu from "react-burger-menu/lib/menus/slide"
import ainafinda from "../../assets/ainafinda.png"
import bookfinder from "../../assets/bookfinder.png"

export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  toggleMenu() {
    this.setState(state => ({ menuOpen: true }))
  }

  render() {
    return (
      <>
        <Helmet>
          <style>
            {`body {
              position: relative;
              margin: 0;
              background-color: #01012a;
          }`}
          </style>
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200"
            rel="stylesheet"
          />
        </Helmet>
        <Menu
          styles={menuStyles}
          right
          width="650px"
          disableAutoFocus
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <Project>
            <a href="https://www.ainafinda.com">
              <img src={ainafinda} />
            </a>
            <p>
              A tourism application that educates visitors on Hawaiian history
              and language. Use the camera to learn some Hawaiian words.{" "}
              <Code link="https://github.com/jocelynsaysrawr/wailua" />
            </p>
          </Project>

          <Project>
            <a href="https://boiling-stream-52972.herokuapp.com/">
              <img src={bookfinder} alt="" />
            </a>
            <p>
              A book search application that utilizes the Google Books API to
              redirect users to the Google Books store to preview and/or
              purchase novels.{" "}
              <Code link="https://github.com/markwuu/book-finder" />
            </p>
          </Project>
        </Menu>
        <Body>
          <Panel>
            <Container>
              <Name>Mark Wuu</Name>
              <Title>Software Engineer</Title>
              <About>
                Hi! I'm Mark and I create web based applications.
                I'm currently open to all possibilities. Feel free to
                browse through my work.
              </About>
              <ProjectContainer>
                <h1>Projects</h1>
                <Project>
                  <a href="https://www.ainafinda.com">
                    <img src={ainafinda} />
                  </a>
                  <p>
                    A tourism application that educates visitors on Hawaiian
                    history and language. Use the camera to learn some Hawaiian
                    words.{" "}
                    <Code link="https://github.com/jocelynsaysrawr/wailua" />
                  </p>
                </Project>

                <Project>
                  <a href="https://boiling-stream-52972.herokuapp.com/">
                    <img src={bookfinder} alt="" />
                  </a>
                  <p>
                    A book search application that utilizes the Google Books API
                    to redirect users to the Google Books store to preview
                    and/or purchase novels.{" "}
                    <Code link="https://github.com/markwuu/book-finder" />
                  </p>
                </Project>
              </ProjectContainer>
            </Container>
            <Button onClick={() => this.toggleMenu()}>View Work</Button>
          </Panel>
        </Body>

        <Footer>
          <LinkedinIcon />
          <GithubIcon />
          <EmailIcon />
        </Footer>
      </>
    )
  }
}
