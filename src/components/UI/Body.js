import React from "react"
import BodyStyles from "./Body.module.css"

export default ({children}) => (
  <div className={BodyStyles.bodyContainer}>
   {children}
  </div>
)