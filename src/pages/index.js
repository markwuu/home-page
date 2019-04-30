import React from "react"
import { LinkedinIcon, GithubIcon, EmailIcon } from "../../assets/icons"
import { Footer } from "../components/UI/Footer"
import { Body } from "../components/UI/Body"
import { Helmet } from "react-helmet"

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
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          border: `1px solid white`,
          flex: `1`,
          padding: `1rem`,
        }}
      >
        <div
          style={{
            //border: `1px solid white`,
            width: `500px`,
            marginLeft: `100px`,
          }}
        >
          <div
            style={{
              //border: `1px solid white`,
              textAlign: `left`,
              fontSize: `50px`,
              paddingTop: `100px`,
            }}
          >
            Mark Wuu
          </div>
          <div
            style={{
              //border: `1px solid white`,
              textAlign: `left`,
              fontSize: `35px`,
              paddingBottom: `40px`,
            }}
          >
            Software Engineer
          </div>
          <div
            style={{
              //border: `1px solid white`,
              textAlign: `left`,
              fontSize: `25px`,
            }}
          >
            Hi, my name is Mark Wuu and I create applications for the internet.
            I'm currently open to all possibilities. Feel free to browse through
            my work.
          </div>
        </div>
        <button
          style={{
            marginTop: `75px`,
            marginLeft: `100px`,
            border: `1px solid white`,
            width: `250px`,
            backgroundColor: `transparent`,
            color: `white`,
            fontSize: `16px`,
            padding: `12px`,
            borderRadius: `2.5px`,
          }}
        >
          View Work
        </button>
      </div>

      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          border: `1px solid white`,
          flex: `1`,
          padding: `1rem`,
        }}
      />
    </Body>

    <Footer>
      <LinkedinIcon />
      <GithubIcon />
      <EmailIcon />
    </Footer>
  </React.Fragment>
)
