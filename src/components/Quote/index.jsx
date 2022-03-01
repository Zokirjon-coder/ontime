import React from "react";
import { Btn, Heading } from "../page/styled";
import { Container } from "./styled";
import img from "../../assets/images/quote.png";
import Button from "../Button";

const Quote = () => {
  return (
    <Container>
      <Heading>Get quotation</Heading>
      <div className="flex">
        <div className="form">
          <div className="inp">
            <div>
              <label htmlFor="name">Name</label>
            </div>
            <input type="text" id="name" placeholder="Your name" />
          </div>
          <div className="inp">
            <div>
              <label htmlFor="company">Company</label>
            </div>
            <input type="text" id="company" placeholder="Your company name" />
          </div>
          <div className="inp">
            <div>
              <label htmlFor="load">Loading place</label>
            </div>
            <input type="text" id="load" placeholder="example: New york" />
          </div>
          <div className="inp">
            <div>
              <label htmlFor="upload">Uploading place</label>
            </div>
            <input type="text" id="upload" placeholder="example: Chicago" />
          </div>
          <div className="inp">
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <input type="text" id="email" placeholder="example@gmail.com" />
          </div>
          <div className="inp">
            <div>
              <label htmlFor="phone">Phone number</label>
            </div>
            <input type="text" id="phone" placeholder="+555 5555 5555" />
          </div>
          <div className="inp">
            <div>
              <label htmlFor="payload">Payload in kg.</label>
            </div>
            <input type="text" id="payload" placeholder="exapmle: 2500 kg." />
          </div>
          <div className="inp">
            <div>
              <label htmlFor="dimensions">Dimensions</label>
            </div>
            <input type="text" id="dimensions" placeholder="example: 2500" />
          </div>
          <div className="inp area">
            <div>
              <label htmlFor="area">Note</label>
            </div>
            <textarea
              id="area"
              cols="30"
              rows="10"
              placeholder="Write something"
            ></textarea>
          </div>
        </div>
        <div className="img">
          <img src={img} alt="auto" />
        </div>
      </div>
        <Button px='14.5'>Get a quotation</Button>
    </Container>
  );
};

export default Quote;
