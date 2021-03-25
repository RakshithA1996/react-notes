import styled from "styled-components";

const lightTheme = {
  bgColor: "#ffffff",
  toggleLabelColor: "#383838",
  toggleColorBefore: "#383838",
  toggleColorAfter: "#757575",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 12px",
  borderBottom: "1px solid #545454",
  iconColor: "#000000",
  fontColor: "#000000",
};

const darkTheme = {
  bgColor: "#000000",
  toggleLabelColor: "#ffffff",
  toggleColorBefore: "#383838",
  toggleColorAfter: "#cccccc",
  boxShadow: "rgba(200, 200, 200, 0.2) 0px 1px 12px",
  borderBottom: "1px solid #c7c7c7",
  iconColor: "#c7c7c7",
  fontColor: "#ffffff",
};

const media = {
  mobile: "@media(max-width:600px)",
};

export const HeaderWrap = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  background: ${(props) =>
    props.isDark ? darkTheme.bgColor : lightTheme.bgColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 0rem;
  box-shadow: ${(props) =>
    props.isDark ? darkTheme.boxShadow : lightTheme.boxShadow};
  box-sizing: border-box;

  ${media.mobile} {
    box-shadow: none;
  }

  .heading {
    margin-left: 14rem;
    font-size: 2rem;
    font-weight: 800;
    background: -webkit-linear-gradient(#0390fc, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    ${media.mobile} {
      margin-left: 1rem;
      font-size: 1.5rem;
    }
  }

  .darkMode {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__para {
      font-size: 0.8rem;
      text-align: center;
      color: ${(props) =>
        props.isDark
          ? darkTheme.toggleLabelColor
          : lightTheme.toggleLabelColor};

      ${media.mobile} {
        font-size: 0.6rem;
      }
    }
  }

  /* ------------------- */

  .switch {
    display: inline-block;
    height: 14px;
    position: relative;
    width: 40px;
    margin-top: 0.2rem;
  }

  .switch input {
    display: none;
  }

  .slider {
    background-color: ${lightTheme.toggleColorBefore};
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 6px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 6px;
  }

  input:checked + .slider {
    background-color: ${lightTheme.toggleColorAfter};
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  /* ------------------- */

  .searchBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-right: 14rem;

    ${media.mobile} {
      margin-right: 1rem;
    }

    &__input {
      background: transparent;
      border: none;
      border-bottom: ${(props) =>
        props.isDark ? darkTheme.borderBottom : lightTheme.borderBottom};
      margin-right: 1rem;
      padding-bottom: 0.3rem;
      color: ${(props) =>
        props.isDark ? darkTheme.fontColor : lightTheme.fontColor};

      ${media.mobile} {
        width: 60%;
        margin-right: 0.5rem;
      }

      &:focus {
        outline: none;
      }
    }

    &__icon {
      font-size: 1.2rem;
      color: ${(props) =>
        props.isDark ? darkTheme.iconColor : lightTheme.iconColor};

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
