import React from "react"
import panelStyles from "./Panel.module.css"

export default ({children}) => (
  <div className={panelStyles.panel}>
  {children}
  </div>
)