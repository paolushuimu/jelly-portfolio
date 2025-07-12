import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import greenProjects from "../data/greenProject";
import modernProjects from "../data/modernProject";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const allProjects = [...greenProjects, ...modernProjects];

  const keydownEnter = (e) => {
    if (e.key === "Enter") {
      allProjects.forEach((item) => {
        if (inputValue === item.title) {
          navigate("/projects", {
            state: {
              scrollId: item.id,
              page: item.page,
            },
          });
        }
      });
      setInputValue("");
    }
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={keydownEnter}
      className="w-40 border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-400"
    />
  );
}

export default Search;
