import React, { useState } from "react";

export const SearchBar = () => {
  const [searchBar, setSearchBar] = useState("");

  const data = ["first", "second", "third", "fourth", "fifth"];

  const filterData = data.filter((item) => {
    return item.includes(searchBar);
  });

  return (
    <div>
      <input
        type="text"
        value={searchBar}
        placeholder="Search..."
        onChange={(e) => setSearchBar(e.target.value)}
      />

      {filterData.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
      
    </div>
  );
};
