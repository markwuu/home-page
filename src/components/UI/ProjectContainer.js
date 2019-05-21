import React from "react"
import ProjectContainerStyles from "./ProjectContainer.module.css"

export default ({ children }) => (
  <div className={ProjectContainerStyles.projectContainer}>{children}</div>
)
