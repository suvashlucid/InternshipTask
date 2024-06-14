import SearchIcon from "@mui/icons-material/Search";
import React from "react";
interface SearchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ onChange }) => {
  return (
    <div className="search-bar ">
      <SearchIcon />
      <input
        type="text"
        className="search-input"
        placeholder="Search "
        onChange={onChange}
        style={{ backgroundColor: "white", width: "200px", height: "30px" }}
      />
    </div>
  );
};

export default Search;
