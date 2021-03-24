import React from "react";
import { HeaderWrap } from "../styles/HeaderStyle";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  return (
    <HeaderWrap>
      <div className="heading">Notes</div>
      <div className="searchBar">
        <input className="searchBar__input" />
        <AiOutlineSearch className="searchBar__icon" />
      </div>
    </HeaderWrap>
  );
}
