import React from "react";
import { NotesWrap } from "../styles/NotesStyle";

export default function NotesCard(props) {
  return (
    <NotesWrap
      onClick={() => {
        props.toggleModal(props.data);
      }}
    >
      <div className="notesTitle">{props.data.title}</div>
      <div className="smallDescription">
        {props.data.description.substring(0, 55)}
      </div>
    </NotesWrap>
  );
}
