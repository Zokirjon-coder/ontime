import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--max-width);
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  white-space: nowrap;
  .logo img {
    height: 35px;
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      color: white;
      font-size: 14px;
      text-decoration: none;
      margin: 0 20px;
      :hover {
        color: var(--main-color);
      }
    }
  }
  .hirebtn button {
    all: unset;
    border: 1px solid white;
    padding: 14px 32px;
    color: white;
    background: transparent;
    transition: background .3s;
    :hover {
      background: var(--main-color);
    }
    :active{
        transform: scale(.98);
    }
  }
`;
