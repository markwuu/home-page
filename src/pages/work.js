import React from "react"
import Layout from "../components/layout"
import { ApplicationIcon } from "../../assets/icons"
import styled from "styled-components"

const Paragraph = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  font-family: "Source Sans Pro", sans-serif;
`

export default () => (
  <Layout>
    <h2>Projects</h2>
    <Paragraph>
      <a href="http://www.ainafinda.com">Aina Finda</a>
    </Paragraph>
    <Paragraph>
      <a href="https://boiling-stream-52972.herokuapp.com">Book Finder</a>
    </Paragraph>
  </Layout>
)
