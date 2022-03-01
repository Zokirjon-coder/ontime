import React from "react";
import { Container, Foot } from "./styled";
import logo from "../../assets/icons/logo.png";
import { contactData } from "../../utils/contact_data";

const Footer = () => {
  return (
    <Foot>
      <Container>
        <div className="header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="links">
            <a href="#">Company policy</a>
            <a href="#">Referral Program</a>
            <a href="#">Motivational Package for Drivers</a>
            <a href="#">Frequently Asked Questions</a>
          </div>
        </div>
        <div className="line"></div>
        <div className="footer">
          <div className="contacts">
            <div className="socials">
              {contactData.map((contact) =>
                contact.id < 7 ? <div className="icon" key={contact.id}>
                  <img src={contact.img} alt="img" />
                </div> : null
              )}
            </div>
            <div className="address">
              <div className="contact location">
                <img src={contactData[7].img} alt="" />
                <span>{contactData[7].content}</span>
              </div>
              <div className="contact phone">
                <img src={contactData[6].img} alt="" />
                <a href={"tel: " + contactData[6].content}>{contactData[6].content}</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Foot>
  );
};

export default Footer;
