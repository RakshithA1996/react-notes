import styled from "styled-components";

const media = {
  mobile: "@media(max-width:600px)",
};

export const FooterWrap = styled.div`
  .addNoteFooter {
    width: 100%;
    position: fixed;
    bottom: 2rem;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;

    ${media.mobile} {
      bottom: 1rem;
    }

    &__icon {
      font-size: 5rem;
      color: #0390fc;
      margin-right: 14rem;
      z-index: 1;

      ${media.mobile} {
        margin-right: 1rem;
        font-size: 4rem;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
