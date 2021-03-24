import React from "react";
import { FooterWrap } from "../styles/FooterStyle";
import { IoAddCircle } from "react-icons/io5";

export default function Footer(props) {
  return (
    <FooterWrap>
      <div className="addNoteFooter">
        <IoAddCircle
          onClick={props.toggleAddNote}
          className="addNoteFooter__icon"
        />
      </div>
    </FooterWrap>
  );
}
