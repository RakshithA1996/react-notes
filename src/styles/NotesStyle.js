import styled from "styled-components";

export const NotesWrap = styled.div`
  border: 1px solid #e5e5e5;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;

  &:hover {
    cursor: pointer;
  }

  .notesTitle {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .smallDescription {
    font-size: 1rem;
    font-weight: 400;
  }

  .smallDescription::after {
    content: " . . .";
  }
`;
