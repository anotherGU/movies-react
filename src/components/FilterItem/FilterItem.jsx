import React, { useState, useEffect } from "react";
import "./FilterItem.css";

const FilterItem = ({ genre, onClickItem, onRemove, activeGenres }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(activeGenres.includes(genre.id));
  }, [activeGenres, genre.id]);

  const activeHandler = () => {
    if (active === true) {
      onRemove(genre.id);
      setActive(false);
    } else {
      onClickItem(genre.id);
      setActive(!active);
    }
  };

  return (
    <p onClick={activeHandler} className={active ? "active" : "filter__item "}>
      {genre.name}
    </p>
  );
};

export default FilterItem;
