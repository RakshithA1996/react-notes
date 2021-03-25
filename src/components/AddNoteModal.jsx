import React, { useState } from "react";
import { AddNoteWrap } from "../styles/AddModalStyle";
import { IoMdCloseCircle } from "react-icons/io";

export default function AddNoteModal(props) {
  const [title, handleTitle] = useState("");
  const [description, handleDescription] = useState("");

  const setTitle = (e) => {
    handleTitle(e.target.value);
  }

  const setDescription = (e) => {
    handleDescription(e.target.value);
  }

  const saveNote = () => {
    props.addNote({title:title,description: description});
    props.closeModal();
  }


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
            onChange={setTitle}
          />
          <textarea
            className="container__body--textarea"
            rows="15"
            placeholder="eg. Goto gym at 6:00am"
            onChange={setDescription}
          />
        </div>
        <div className="container__footer">
          <button className="container__footer--button" onClick={saveNote}>Save</button>
        </div>
      </div>
    </AddNoteWrap>
  );
}
