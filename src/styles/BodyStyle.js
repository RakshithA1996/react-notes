import styled from "styled-components";

const lightTheme = {
  bgColor: "#ffffff",
};

const darkTheme = {
  bgColor: "#000000",
};

const media = {
  mobile: "@media(max-width:600px)",
};

export const BodyWrap = styled.div`
  padding: 2rem 14rem;
  padding-top: 7rem;
  background: ${(props) =>
    props.isDark ? darkTheme.bgColor : lightTheme.bgColor};
  min-height: 100vh;

  ${media.mobile} {
    padding: 1rem;
    padding-top: 6rem;
  }

  .notesContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;

    ${media.mobile} {
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }
  }
`;
