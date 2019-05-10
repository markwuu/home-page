// import styled from "styled-components"

// export const Footer = styled.div`
//   position: absolute;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   height: 38px;
//   text-align: center;
//   border: 1px solid white;
// `

import React from "react"
import footerStyles from "./Footer.module.css"

export default ({children}) => (
  <div className={footerStyles.footer}>
   {children}
  </div>
)