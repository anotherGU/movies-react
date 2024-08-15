import React from "react";
import "./SearchBar.css";

import Filters from "../Filters/Filters";

const SearchBar = ({search, searchByWord}) => {
  return (
    <div className="search__wrapper">
      <div className="search__bar">
        <img src="images/camera.png" alt="" />
        <div className="form">
          <div className="form__top">
            <div className="input__block">
              <p>Year</p>
              <input placeholder="2023" type="text" />
            </div>
            <div className="input__block">
              <p>Country</p>
              <input placeholder="USA" type="text" />
            </div>
            <div className="input__block">
              <p>Actor</p>
              <input placeholder="Tom Hardy" type="text" />
            </div>
          </div>
          <div className="form__bottom">
            <input
              className="search__input"
              placeholder="Search.."
              type="text"
              value={search}
              onChange={searchByWord}
            />
            <div className="input__block">
              <p>Director</p>
              <input placeholder="Chrtistopher Nolan" type="text" />
            </div>
          </div>
        </div>
      </div>
      <Filters />
    </div>
  );
};

export default SearchBar;
