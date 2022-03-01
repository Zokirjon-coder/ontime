import styled from "styled-components";

export const Btn = styled.button`
  all: unset;
  background-color: var(--main-color);
  padding: 14px ${({ px }) => px}px;
  color: white;
  :hover {
    filter: brightness(0.8);
  }
`;

export const Heading = styled.h4`
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  color: var(--main-color);
  position: relative;
  width: fit-content;
  margin-bottom: 16px;
  ::after {
    content: "";
    position: absolute;
    top: 55%;
    transform: translateY(-55%);
    left: calc(100% + 24px);
    width: 150px;
    height: 1px;
    background-color: var(--main-color);
  }
`;
