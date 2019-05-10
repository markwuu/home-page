import React from "react"
import aboutStyles from "./About.module.css"

export default ({children}) => (
  <div className={aboutStyles.about}>
  {children}
  </div>
)