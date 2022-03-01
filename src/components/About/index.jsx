import React from "react";
import { Container } from "./styled";
import img1 from "../../assets/images/about1.png";
import img2 from "../../assets/images/about2.png";
import img3 from "../../assets/images/about3.png";
import { Heading } from "../page/styled";

const About = () => {
  return (
    <Container>
      <Container.Flex>
        <div className="content">
          <div>
            <Heading>About us</Heading>
            <p>
              <b>
                Ontime Express LLC is one of the smartest trucking companies
                based in Virginia.
              </b>
            </p>
            <p>
              Our professional team operate daily checking calls, tracking
              loads, emailing updates and enabling all other communication
              options according to your unique needs. All in all, we assure your
              freight to arrive safe and on time.
            </p>
          </div>
        </div>
        <div className="imgbox">
          <div className="images img1">
            <img src={img1} alt="image1" />
          </div>
          <div className="images img2">
            <img src={img2} alt="image2" />
          </div>
          <div className="images img3">
            <img src={img3} alt="image3" />
          </div>
        </div>
      </Container.Flex>
    </Container>
  );
};

export default About;
