import styled from "styled-components";

export const Btn = styled.button`
  all: unset;
  padding: 14px ${({px})=>px?px:45}px;
  background-color: var(--main-color);
  position: relative;
  overflow: hidden;
  :hover {
    .btnCover {
      width: 500px;
      height: 500px;
      transition: width 1.5s, height 1.5s;
    }
    .title {
      color: black;
      transition: 1s;
    }
  }
  
  .btnCover {
    width: 0;
    height: 0;
    border-radius: 50%;
    background: white;
    position: absolute;
    top: ${({ position }) => position[1]}px;
    left: ${({ position }) => position[0]}px;
    transform: translate(-50%, -50%);
    transition: width 0.5s, height 0.5s;
    z-index: 0;
  }
  .title {
    font-size: 14px;
    z-index: 2;
    position: relative;
    transition: 0.8s;
    color: white;
  }
`;
