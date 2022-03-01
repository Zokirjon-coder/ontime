import React from "react";
import { Container } from "./styled";
import { contactData } from "../../../utils/contact_data";

const Contacts = () => {
  return (
    <Container>
      <div className="line"></div>
      {contactData.map((link) => (
        <div className="icon" key={link.id}>
          <img src={link.img} alt="face" />
          <div className="content">{link.content}</div>
        </div>
      ))}

      <div className="line"></div>
    </Container>
  );
};

export default Contacts;
