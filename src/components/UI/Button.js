import React from "react"
import buttonStyles from "./Button.module.css"

export default ({ children }) => (
  <button className={buttonStyles.button}>
  {children}
  </button>
)