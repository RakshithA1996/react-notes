import styled from "styled-components";

const lightTheme = {
  border: "1px solid #e5e5e5",
  color: "#000000",
};

const darkTheme = {
  border: "1px solid #4a4a4a",
  color: "#b5b5b5",
};

export const NotesWrap = styled.div`
  border: ${(props) => (props.isDark ? darkTheme.border : lightTheme.border)};
  color: ${(props) => (props.isDark ? darkTheme.color : lightTheme.color)};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  min-height: 130px;

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
