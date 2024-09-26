import React, { useEffect, useRef, useState } from "react";
import style from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";
import isTouchDevice from "../../helper/isTouchDevice";

interface SearchBarProps {
  isMobile?: boolean;
}
function SearchBar({ isMobile = false }: SearchBarProps) {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchBar, setSearchBar] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (isMobile || isTouchDevice()) {
      setShowSearchBar(true);
    }
  }, [isMobile]);

  useEffect(() => {
    if (showSearchBar && inputRef.current) {
      inputRef.current.focus(); // Focus automatico sull'input
    }
  }, [showSearchBar]);

  // Funzione per avviare la ricerca
  const handleSearch = () => {
    if (searchBar.trim() !== "") {
      console.log("Avvio della ricerca per:", searchBar); // Qui puoi sostituire con la logica effettiva della ricerca
      navigate(`/search/${searchBar}`);
      setShowSearchBar(false);
      setSearchBar("");
    }
  };

  // Funzione per gestire il tasto "Enter"
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={style.searchBarContainer}>
      {!isMobile && (
        <svg
          onClick={() => !isMobile && setShowSearchBar((prev) => !prev)}
          className={style.searchIcon}
          viewBox="0 0 16 16"
        >
          <path
            fill="#333"
            d="M11.3,9.2C11.7,8.4,12,7.5,12,6.5C12,3.5,9.5,1,6.5,1S1,3.5,1,6.5S3.5,12,6.5,12c1,0,1.9-0.3,2.7-0.7l3.3,3.3c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L11.3,9.2zM6.5,10.3c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C10.3,8.6,8.6,10.3,6.5,10.3z"
          ></path>
        </svg>
      )}
      {showSearchBar && (
        <React.Fragment>
          <input
            type="text"
            ref={inputRef} // Collegare il ref all'input
            placeholder="SEARCH"
            value={searchBar}
            onChange={(e) => setSearchBar(e.target.value)}
            onKeyDown={handleKeyDown} // Aggiungere onKeyDown per gestire "Enter"
          />
          <button className={style.buttonSearch} onClick={handleSearch}>
            GO
          </button>
        </React.Fragment>
      )}
    </div>
  );
}

export default SearchBar;
