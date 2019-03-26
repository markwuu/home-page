import React from "react"
import Layout from "../components/layout"
import { Paragraph } from "../components/UI/Paragraph"
import { AppPreview } from "../components/UI/AppPreview"
import ainafinda from "../../assets/ainafinda.png"
import bookfinder from "../../assets/bookfinder.png"

export default () => (
  <Layout>
    <h2>Projects</h2>
    <Paragraph>
      <a href="http://www.ainafinda.com">
        <AppPreview src={ainafinda} />
      </a>
    </Paragraph>
    <Paragraph>
      <a href="https://boiling-stream-52972.herokuapp.com">
        <AppPreview src={bookfinder} />
      </a>
    </Paragraph>
  </Layout>
)
