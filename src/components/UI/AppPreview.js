import styled from "styled-components"

export const AppPreview = styled.img`
  z-index: 1;
  max-width: 25%;
  height: auto;
  opacity: 0.5;
  transition: 0.5s;

  &:hover {
    opacity: 1;
  }
`
