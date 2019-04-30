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
import Sidebar from "../components/UI/Sidebar"
import styled from "styled-components"

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
    <Sidebar />
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

// class ParentComponent extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       menuOpen: false,
//     }
//   }

//   handleStateChange(state) {
//     this.setState({ menuOpen: state.isOpen })
//   }

//   closeMenu() {
//     this.setState({ menuOpen: false })
//   }
//   toggleMenu() {
//     this.setState(state => ({ menuOpen: !state.menuOpen }))
//   }

//   render() {
//     return (
//       <div>
//         <Menu
//           isOpen={this.state.menuOpen}
//           onStateChange={state => this.handleStateChange(state)}
//         >
//           <a onClick={() => this.closeMenu()}>Home</a>
//           <a onClick={() => this.closeMenu()}>About</a>
//           <a onClick={() => this.closeMenu()}>Contact</a>
//           <a onClick={() => this.closeMenu()}>Settings</a>
//         </Menu>
//         <CustomIcon onClick={() => this.toggleMenu()} />
//       </div>
//     )
//   }
// }
