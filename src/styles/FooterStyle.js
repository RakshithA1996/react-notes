import styled from "styled-components";

export const FooterWrap = styled.div`
  .addNoteFooter {
    width: 100%;
    position: fixed;
    bottom: 2rem;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;

    &__icon {
      font-size: 5rem;
      color: #0390fc;
      margin-right: 14rem;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
