import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 100%;
  position: fixed;
  top:0;
  z-index: 1;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 0rem;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  box-sizing: border-box;

  .heading {
    margin-left: 14rem;
  }

  .searchBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 14rem;
  }
`;
