import React from "react"
import titleStyles from "./Title.module.css"

export default ({children}) => (
  <div className={titleStyles.title}>
  {children}
  </div>
)