import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BodyWrap } from "../styles/BodyStyle";
import NotesCard from "./NotesCard";
import ViewNoteModal from "./ViewNoteModal";

export default function Body(props) {
  const [isViewNote, handleViewNote] = useState(false);
  const [displayNote, handleDisplayNote] = useState({});
  const isDark = useSelector((state) => state.dark.mode);

  const toggleModal = (data) => {
    if (isViewNote) {
      handleViewNote(false);
    } else {
      handleViewNote(true);
      handleDisplayNote(data);
    }
  };

  return (
    <BodyWrap isDark={isDark}>
      {props.searchQuery === "" ? (
        <div className="notesContainer">
          {props.noteData.map((data, index) => {
            return (
              <NotesCard key={index} data={data} toggleModal={toggleModal} />
            );
          })}
        </div>
      ) : (
        <div className="notesContainer">
          {props.noteData
            .filter((search) =>
              search.title.toLowerCase().includes(props.searchQuery)
            )
            .map((data, index) => {
              return (
                <NotesCard key={index} data={data} toggleModal={toggleModal} />
              );
            })}
        </div>
      )}
      {isViewNote ? (
        <ViewNoteModal
          closeModal={toggleModal}
          data={displayNote}
          removeNote={props.removeNote}
        />
      ) : (
        ""
      )}
    </BodyWrap>
  );
}
