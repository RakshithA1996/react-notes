import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import setDark from "../redux/actions/setDark";
import { HeaderWrap } from "../styles/HeaderStyle";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

export default function Header(props) {
  const [isSearch, handleSearch] = useState(false);
  const isDark = useSelector((state) => state.dark.mode);
  const dispatch = useDispatch();

  const toggleDarkMode = (mode) => {
    if (mode) {
      dispatch(setDark("IS_LIGHT"));
    } else {
      dispatch(setDark("IS_DARK"));
    }
  };

  const toggleSearch = () => {
    if (isSearch) {
      handleSearch(false);
      props.clearSearch();
    } else {
      handleSearch(true);
    }
  };

  return (
    <HeaderWrap isDark={isDark}>
      <div className="heading">
        <div>NOTES</div>
        <div className="darkMode">
          <div className="darkMode__para">{isDark ? "Light" : "Dark"}</div>
          <label className="switch" htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              onChange={() => toggleDarkMode(isDark)}
              checked={isDark}
            />
            <div className="slider round"></div>
          </label>
        </div>
      </div>
      <div className="searchBar">
        {isSearch ? (
          <input
            className="searchBar__input"
            onChange={(e) => {
              props.setSearchQuery(e);
            }}
            placeholder="search . . ."
          />
        ) : (
          ""
        )}
        {isSearch ? (
          <IoMdClose className="searchBar__icon" onClick={toggleSearch} />
        ) : (
          <AiOutlineSearch className="searchBar__icon" onClick={toggleSearch} />
        )}
      </div>
    </HeaderWrap>
  );
}
