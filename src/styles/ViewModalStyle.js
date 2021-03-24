import styled from "styled-components";

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
    background-color: #ffffff;
    margin: auto;
    width: 30%;
    padding: 1rem;

    &__header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;

      &--title {
        font-size: 1.2rem;
        font-weight: 600;
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
        border: 1px solid #e5e5e5;
        padding: 1rem;
        text-align: left;

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
        padding: 1rem;
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
