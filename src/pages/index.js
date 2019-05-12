import React from "react"
import { LinkedinIcon, GithubIcon, EmailIcon } from "../../assets/icons"
import Footer from "../components/UI/Footer"
import Body from "../components/UI/Body"
import { Helmet } from "react-helmet"
import Name from "../components/UI/Name"
import Title from "../components/UI/Title"
import About from "../components/UI/About"
import Button from "../components/UI/Button"
import Panel from "../components/UI/Panel"
import Container from "../components/UI/Container"
import Project from "../components/UI/Project"
import Menu from "react-burger-menu/lib/menus/slide"
import ainafinda from "../../assets/ainafinda.png"
import bookfinder from "../../assets/bookfinder.png"
import Picture from "../components/UI/Picture"

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
    var styles = {
      bmBurgerButton: {
        position: "fixed",
        width: "36px",
        height: "30px",
        right: "36px",
        top: "36px",
      },
      bmBurgerBars: {
        background: "#373a47",
      },
      bmItem: {
        textAlign: "center",
        display: "inline-block",
        textDecoration: "none",
        marginBottom: "5vh",
        color: "#d1d1d1",
        transition: "color 0.2s",
      },
      bmCrossButton: {
        height: "25px",
        width: "25px",
      },
      bmCross: {
        background: "#bdc3c7",
      },
      bmMenuWrap: {
        position: "fixed",
        height: "100%",
      },
      bmMenu: {
        background: "#000016",
        padding: "2.5em 1.5em 0",
        fontSize: "1.85em",
      },
      bmItemList: {
        color: "#b8b7ad",
        padding: "2.5em",
      },
      bmOverlay: {
        background: "rgba(0, 0, 0, 0.3)",
      },
    }
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
          styles={styles}
          right
          width="40%"
          disableAutoFocus
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <Project>
            <a href="https://www.ainafinda.com">
              <img src={ainafinda} />
            </a>
            A tourism application that educates the public on traditional
            Hawaiian culture and language. Use the camera to learn some Hawaiian
            words. Check out the code{" "}
            <a href="https://github.com/jocelynsaysrawr/wailua">here</a>.
          </Project>

          <Project>
            <a href="https://boiling-stream-52972.herokuapp.com/">
              <img src={bookfinder} alt="" />
            </a>
            A book search application that utilizes the Google Books API to
            redirect users to the google books store to preview and/or purchase
            novels. Check out the code{" "}
            <a href="https://github.com/markwuu/book-finder">here</a>.
          </Project>
        </Menu>
        <Body>
          <Panel>
            <Container>
              <Name>Mark Wuu</Name>
              <Title>Software Engineer</Title>
              <About>
                Hello, my name is Mark and I create web applications for the
                internet. I'm currently open to all possibilities. Feel free to
                browse through my work.
              </About>
            </Container>
            <Button onClick={() => this.toggleMenu()}>View Work</Button>
          </Panel>
          <Panel />
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
