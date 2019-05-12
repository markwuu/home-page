import React from "react"
import Menu from "react-burger-menu/lib/menus/slide"
import ainafinda from "../../assets/ainafinda.png"
import bookfinder from "../../assets/bookfinder.png"

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmItem: {
    textAlign: "center",
    display: "inline-block",
    textDecoration: "none",
    marginBottom: "5vh",
    color: "#d1d1d1",
    transition: "color 0.2s",
  },
  bmCrossButton: {
    height: "25px",
    width: "25px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  // bm-item:hover: {
  //   display: 'inline-block'
  // },

  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#000016",
    padding: "2.5em 1.5em 0",
    fontSize: "1.85em",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "2.5em",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
}
export default () => (
  <React.Fragment>
    <Menu styles={styles} right disableAutoFocus width="40%">
      <div>
        <img src={ainafinda} alt="" />
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        quod!
      </div>
      <div>
        <img src={bookfinder} alt="" />
      </div>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, magni?
      </div>
      <div>
        <img src={bookfinder} alt="" />
      </div>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, magni?
      </div>
    </Menu>
  </React.Fragment>
)
