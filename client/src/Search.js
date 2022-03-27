import React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import "./css/Search.css";
function Search() {
  let [suggestions, setSuggestions] = useState([]);
  let [searchSuggOpen, setSearchSuggOpen] = useState(false);
  let searchValue = useRef();
  const debounce = function (fn, d) {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        getSuggestions.apply(context, arguments);
      }, d);
    };
  };
  const handleSuggestions = debounce(getSuggestions, 300);
  async function getSuggestions() {
    if (searchValue.current.value) {
      setSearchSuggOpen(true);
    } else {
      setSearchSuggOpen(false);
    }
    try {
      let config = {
        "Content-type": "application/json",
      };
      let res = await axios({
        url: `/api/v1/${searchValue.current.value}`,
        method: "GET",
        config,
      });
      setSuggestions(res?.data.result);
    } catch (err) {
      alert("something went wrong");
    }
  }

  return (
    <div className="header-search-box">
      <input
        className="header-search-input"
        type="text"
        placeholder="Search a product"
        ref={searchValue}
        onKeyUp={handleSuggestions}
      />

      <i class="fas fa-search" id="search-icon"></i>
      {searchSuggOpen ? (
        <div className="search-suggestions">
          {suggestions?.map((suggestion) => {
            return (
              <>
                <div className="search-suggestion">
                  <img src={suggestion.listOfImages[0]} />
                  <p>{suggestion.name}</p>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Search;
