import React from "react";
import { NotesWrap } from "../styles/NotesStyle";
import { useSelector } from "react-redux";

export default function NotesCard(props) {
  const isDark = useSelector((state) => state.dark.mode);
  return (
    <NotesWrap
      isDark={isDark}
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
