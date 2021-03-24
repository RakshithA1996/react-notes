import React from "react";
import { AddNoteWrap } from "../styles/AddModalStyle";
import { IoMdCloseCircle } from "react-icons/io";

export default function AddNoteModal(props) {
  return (
    <AddNoteWrap>
      <div className="container">
        <div className="container__header">
          <div className="container__header--title">Add Note</div>
          <IoMdCloseCircle
            onClick={props.closeModal}
            className="container__header--icon"
          />
        </div>
        <div className="container__body">
          <input
            className="container__body--input"
            type="text"
            placeholder="Title"
          />
          <textarea
            className="container__body--textarea"
            rows="15"
            placeholder="eg. Goto gym at 6:00am"
          />
        </div>
        <div className="container__footer">
          <button className="container__footer--button">Save</button>
        </div>
      </div>
    </AddNoteWrap>
  );
}
