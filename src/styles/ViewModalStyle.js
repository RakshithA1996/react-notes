import styled from "styled-components";

const lightTheme = {
  bgColor: "#ffffff",
  border: "1px solid #e5e5e5",
  color: "#000000",
  border: "1px solid #e5e5e5",
  headColor: "#000000",
  paraColor: "#000000",
};

const darkTheme = {
  bgColor: "#383838",
  border: "1px solid #4a4a4a",
  color: "#b5b5b5",
  border: "1px solid #4d4d4d",
  headColor: "#ffffff",
  paraColor: "#b5b5b5",
};

const media = {
  mobile: "@media(max-width:600px)",
};

export const ViewNoteWrap = styled.div`
  display: flex;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);

  .container {
    background-color: ${(props) =>
      props.isDark ? darkTheme.bgColor : lightTheme.bgColor};
    margin: auto;
    width: 30%;
    padding: 1rem;

    ${media.mobile} {
      width: 84%;
      border-radius: 6px;
    }

    &__header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;

      &--title {
        font-size: 1.2rem;
        font-weight: 600;
        color: ${(props) =>
          props.isDark ? darkTheme.headColor : lightTheme.headColor};
      }

      &--icon {
        font-size: 1.4rem;
        color: red;

        &:hover {
          cursor: pointer;
        }
      }
    }

    &__body {
      width: 100%;
      display: flex;
      flex-direction: column;

      &--input,
      &--textarea {
        border: ${(props) =>
          props.isDark ? darkTheme.border : lightTheme.border};
        padding: 1rem;
        min-height: 20vh;
        text-align: left;
        color: ${(props) =>
          props.isDark ? darkTheme.paraColor : lightTheme.paraColor};

        &:focus {
          outline: none;
        }
      }

      &--input {
        margin-bottom: 1rem;
      }
    }

    &__footer {
      width: 100%;
      margin-top: 1rem;

      &--button {
        width: 100%;
        padding: 0.6rem;
        border: none;
        background: red;
        color: #ffffff;
        font-size: 1rem;
        border-radius: 4px;

        &:hover {
          cursor: pointer;
        }

        &:focus {
          outline: none;
        }
      }
    }
  }
`;
