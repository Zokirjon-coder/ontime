import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  z-index: 2;
  .line {
    width: 1px;
    background-color: rgba(255, 255, 255, 0.3);
    height: 100px;
  }
  .icon {
    position: relative;
    width: 20px;
    height: 20px;
    display: grid;
    place-items: center;
    img{
        opacity: .5;
    }
    .content {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 20px;
      background-color: #323b3e;
      left: 50px;
      white-space: nowrap;
      overflow: hidden;
      width: 0;
      padding-top: 5px;
      padding-bottom: 5px;
      transition: padding-left 0.1s, padding-right 0.1s, width 0.9s;
      font-size: 12px;
      color: white;
    }
    :hover {
      .content {
        padding-left: 10px;
        padding-right: 10px;
        width: fit-content;
      }
      img{
          opacity: 1;
      }
    }
  }
`;
