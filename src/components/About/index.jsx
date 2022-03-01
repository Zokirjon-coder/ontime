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
          <Heading>About us</Heading>
          <p>
            <b>
              Ontime Express LLC is one of the smartest trucking companies based
              in Virginia.
            </b>
          </p>
          <p>
            The management team of the company have mastered every aspect of the
            trucking industry due to their 6 years of experience in the field.
            Experienced management team and professional drivers of Ontime
            Express LLC work to meet the needs of every single customer with
            care and support. Ontime Express LLC team takes great pride in the
            quality of hassle-free experienced management, dedicated dispatch,
            qualified drivers, and 24/7 office support, whose consolidated
            approach is directed to guarantee safe, effective and efficient
            service.
          </p>
          <p>
            Our professional team operate daily checking calls, tracking loads,
            emailing updates and enabling all other communication options
            according to your unique needs. All in all, we assure your freight
            to arrive safe and on time.
          </p>
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
