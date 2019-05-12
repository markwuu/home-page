import React from "react"
import pictureStyles from "./Picture.module.css"

export default ({ children }) => (
  <img src={children} className={pictureStyles.picture}>
    {/* {children} */}
  </img>
)
