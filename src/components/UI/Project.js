import React from "react"
import projectStyles from "./Project.module.css"

export default ({ children }) => (
  <div className={projectStyles.project}>{children}</div>
)
