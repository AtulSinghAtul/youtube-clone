import React, { useState } from "react";
import { KEYWORDS } from "../../utility/constant";
import "./_categoriesBar.scss";

const CategoreyBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  function handleClick(value) {
    setActiveElement(value);
  }

  return (
    <div className="categoriesBar">
      {KEYWORDS.map((value, index) => (
        <span
          key={index}
          onClick={() => handleClick(value)}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoreyBar;
