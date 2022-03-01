import React from "react";
import About from "../About";
import Footer from "../Footer";
import Home from "../home";
import Location from "../Location";
import Quote from "../Quote";
import Workflow from "../Workflow";
import { Wrapper } from "./styled";

const Page = () => {
  return (
    <Wrapper>
      <Home />
      <About />
      <Workflow />
      <Quote />
      <Location />
      <Footer />
    </Wrapper>
  );
};

export default Page;
