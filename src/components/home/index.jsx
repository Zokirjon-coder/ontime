import React from "react";
import Contacts from "./contacts";
import Header from "./header";
import Heading from "./heading";
import { Container, Center } from "./styled";

const Home = () => {
  return (
    <Container>
      <Header />
      <Contacts />
      <Center>
        <Heading />
      </Center>
    </Container>
  );
};

export default Home;
