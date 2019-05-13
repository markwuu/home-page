import React from "react"
import codeStyles from "./Code.module.css"

export default ({ link }) => (
  <a href={link} className={codeStyles.code}>
    Check out the code here.
  </a>
)
