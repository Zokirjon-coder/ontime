import styled from "styled-components";
import home from '../../assets/images/home.png'

export const Container = styled.div`
width: 100%;
height: 100vh;
background-image: url(${home});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;
`

export const Center = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;