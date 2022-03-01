import React, { useRef, useState } from "react";
import { Btn } from "./styled";

const Button = ({children, px}) => {
  const [position, setPosition] = useState([0, 0]);
  const btn = useRef(null);
  const btnCover = useRef(null);

  const onMouseEnter = (e) => {
    setPosition([
      e.pageX - btn.current.offsetLeft,
      e.pageY - btn.current.offsetTop,
    ]);
  };
  const onMouseLeave = (e) => {
    setPosition([
      e.pageX - btn.current.offsetLeft,
      e.pageY - btn.current.offsetTop,
    ]);
  };

  return (
      <Btn px={px} position={position} ref={btn} onMouseEnter={(e) => onMouseEnter(e)} onMouseLeave={(e)=>onMouseLeave(e)} >
        <span className="btnCover" ref={btnCover}></span>
        <span className="title">{children}</span>
      </Btn>
  );
};

export default Button;