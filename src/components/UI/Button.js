import React from "react"
import buttonStyles from "./Button.module.css"

export default ({ children, ...props }) => (
  <button className={buttonStyles.button} {...props}>
    {children}
  </button>
)
