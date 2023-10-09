import { useState } from "react";
import "./TrackFilter.css";
import { ShowGenres } from "./TrackLibrary/Genres.jsx";
import { ShowYears } from "./TrackLibrary/Years";
import { ShowAuthors } from "./TrackLibrary/Authors";


export  function Filter() {
  const [revealAuthor, setRevealAuthor] = useState(false);
  const [revealYear, setRevealYear] = useState(false);
  const [revealGenre, setRevealGenre] = useState(false);
  const toggleRevealAuthor = () => {
    setRevealAuthor(!revealAuthor);
    setRevealYear(false);
    setRevealGenre(false);
  };
  const toggleRevealYear = () => {
    setRevealYear(!revealYear);
    setRevealAuthor(false);
    setRevealGenre(false);
  };
  const toggleRevealGenre = () => {
    setRevealGenre(!revealGenre);
    setRevealYear(false);
    setRevealAuthor(false);
  };
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      {revealAuthor ? (
        <div className="filter__box">
          <div
            className="filter__button button-author _btn-text_focus"
            onClick={toggleRevealAuthor}
          >
            исполнителю
          </div>
          <ShowAuthors />
        </div>
         ) : (
            <div className="filter__box">
              <div
                className="filter__button button-author _btn-text"
                onClick={toggleRevealAuthor}
              >
                исполнителю
              </div>
            </div>
          )}
    
          {revealYear ? (
            <div className="filter__box">
              <div
                className="filter__button button-year _btn-text_focus"
                onClick={toggleRevealYear}
              >
                году выпуска
              </div>
              <ShowYears />
            </div>
          ) : (
            <div className="filter__box">
              <div
                className="filter__button button-year _btn-text"
                onClick={toggleRevealYear}
              >
                году выпуска
              </div>
            </div>
          )}
           {revealGenre ? (
        <div className="filter__box">
          <div
            className="filter__button button-genre _btn-text_focus"
            onClick={toggleRevealGenre}
          >
            жанру
          </div>
          <ShowGenres />
        </div>
           ) : (
            <div className="filter__box">
              <div
                className="filter__button button-genre _btn-text"
                onClick={toggleRevealGenre}
              >
                жанру
              </div>
            </div>
             )}
             </div>
           );
         }