import React from "react";
import { ViewNoteWrap } from "../styles/ViewModalStyle";
import { IoMdCloseCircle } from "react-icons/io";

export default function ViewNoteModal(props) {
  return (
    <ViewNoteWrap>
      <div className="container">
        <div className="container__header">
          <div className="container__header--title">{props.data.title}</div>
          <IoMdCloseCircle
            onClick={props.closeModal}
            className="container__header--icon"
          />
        </div>
        <div className="container__body">
          <div className="container__body--textarea">
            {props.data.description}
          </div>
        </div>
        <div className="container__footer">
          <button className="container__footer--button">Delete</button>
        </div>
      </div>
    </ViewNoteWrap>
  );
}
