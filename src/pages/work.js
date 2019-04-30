import React from "react"
import { AppPreviewContainer } from "../components/UI/AppPreviewContainer"
import { AppPreview } from "../components/UI/AppPreview"
import ainafinda from "../../assets/ainafinda.png"
import bookfinder from "../../assets/bookfinder.png"
import { Title } from "../components/UI/Title"

export default props => (
  <React.Fragment>
    <Title>Projects</Title>
    <AppPreviewContainer>
      <a href="http://www.ainafinda.com">
        <AppPreview src={ainafinda} />
      </a>
    </AppPreviewContainer>
    <AppPreviewContainer>
      <a href="https://boiling-stream-52972.herokuapp.com">
        <AppPreview src={bookfinder} />
      </a>
    </AppPreviewContainer>
  </React.Fragment>
)
