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
import Sidebar from "../components/Sidebar"
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

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  toggleMenu() {
    this.setState(state => ({ menuOpen: true }))
  }

  testClick() {
    console.log("im working!")
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
        {/* <Sidebar
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        /> */}
        <Menu
          styles={styles}
          right
          width="40%"
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <div>
            <img src={ainafinda} alt="" />
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            quod!
          </div>
          <div>
            <img src={bookfinder} alt="" />
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
            magni?
          </div>
          <div>
            <img src={bookfinder} alt="" />
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
            magni?
          </div>
        </Menu>
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
