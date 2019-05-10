import React from "react"
import Menu from "react-burger-menu/lib/menus/slide"
import styled from "styled-components"
import ainafinda from "../../assets/ainafinda.png"
import bookfinder from "../../assets/bookfinder.png"

const StyledBurgerMenu = styled.div`
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 36px;
  }
  .bm-burger-bars {
    background: #373a47;
  }
  .bm-item {
    text-align: center;
    display: inline-block;
    text-decoration: none;
    margin-bottom: 5vh;
    color: #d1d1d1;
    transition: color 0.2s;
  }
  .bm-cross-button {
    height: 25px;
    width: 25px;
  }
  .bm-cross {
    background: #bdc3c7;
  }
  .bm-item:hover {
    display: inline-block;
  }

  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }
  .bm-menu {
    background: #000016;
    padding: 2.5em 1.5em 0;
    font-size: 1.85em;
  }
  .bm-item-list {
    color: #b8b7ad;
    padding: 2.5em;
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`

export default () => (
  <StyledBurgerMenu>
    <Menu right disableAutoFocus width="40%">
      <div>
        <img src={ainafinda} />
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        quod!
      </div>
      <div>
        <img src={bookfinder} />
      </div>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, magni?
      </div>
      <div>
        <img src={bookfinder} />
      </div>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, magni?
      </div>
    </Menu>
  </StyledBurgerMenu>
)
