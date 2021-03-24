import React, { useState } from "react";
import { BodyWrap } from "../styles/BodyStyle";
import NotesCard from "./NotesCard";
import ViewNoteModal from "./ViewNoteModal";

export default function Body(props) {
  const [isViewNote, handleViewNote] = useState(false);
  const [displayNote, handleDisplayNote] = useState({});

  const toggleModal = (data) => {
    console.log("clicked");
    if (isViewNote) {
      handleViewNote(false);
    } else {
      handleViewNote(true);
      handleDisplayNote(data);
    }
  };

  return (
    <BodyWrap>
      <div className="notesContainer">
        {props.noteData.map((data, index) => {
          return (
            <NotesCard key={index} data={data} toggleModal={toggleModal} />
          );
        })}
      </div>
      {isViewNote ? (
        <ViewNoteModal closeModal={toggleModal} data={displayNote} />
      ) : (
        ""
      )}
    </BodyWrap>
  );
}
