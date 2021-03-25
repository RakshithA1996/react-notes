import styled from "styled-components";

const lightTheme = {
  border: "1px solid #e5e5e5",
  color: "#000000",
  boxShadow: "0em 0.3em 0.6em #e8e8e8, 0em 0.3em 0.6em #e8e8e8",
};

const darkTheme = {
  border: "1px solid #1f1f1f",
  color: "#b5b5b5",
  boxShadow:
    "0em 0.3em 0.6em rgba(90, 90, 90, 0.2), 0em 0.3em 0.6em rgba(90, 90, 90, 0.2)",
};

const media = {
  mobile: "@media(max-width:600px)",
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
    box-shadow: ${(props) =>
      props.isDark ? darkTheme.boxShadow : lightTheme.boxShadow};
    transition: box-shadow 0.5s ease-in-out;

    ${media.mobile} {
      box-shadow: none;
    }
  }

  ${media.mobile} {
    border-radius: 6px;
  }

  &:hover {
    cursor: pointer;
  }

  .notesTitle {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${(props) => (props.isDark ? "#f0f0f0" : "#000000")};
  }

  .smallDescription {
    font-size: 1rem;
    font-weight: 400;
  }

  .smallDescription::after {
    content: " . . .";
  }
`;
