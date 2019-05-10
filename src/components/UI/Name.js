import React from "react"
import nameStyles from "./Name.module.css"

export default ({children}) => (
  <div className={nameStyles.name}>
  {children}
  </div>
)