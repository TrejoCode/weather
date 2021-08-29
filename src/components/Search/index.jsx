/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Aside current component
 */

import { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { getCurrentAction } from "../../redux/actions";

const Search = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState(false);

  /**
   * @description Dispatch getCurrentAction with specific query
   */
  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(getCurrentAction(query));
  };

  return (
    <div className="__search">
      <form className="__input__container align-center" onSubmit={handleSearch}>
        <button className="__button" type="submit">
          <SearchIcon width="1rem" aria-hidden={true} focusable={false} />
          <span className="hidden">Search button</span>
        </button>
        <label htmlFor="search" className="hidden">
          Search a city
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search a city"
          name="search"
          className="__input"
          onChange={(event) => setQuery(event.currentTarget.value)}
        />
      </form>
    </div>
  );
};

export default Search;
