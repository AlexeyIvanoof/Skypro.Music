import { useState } from 'react'
import './TrackFilter.css'
import { ShowGenres } from '../TrackLibrary/Genres.jsx'
import { ShowYears } from '../TrackLibrary/Years.jsx'
import { ShowAuthors } from '../TrackLibrary/Authors.jsx'
import * as S from './TrackFilters.styles.js'

export function Filter() {
  const [revealAuthor, setRevealAuthor] = useState(false)
  const [revealYear, setRevealYear] = useState(false)
  const [revealGenre, setRevealGenre] = useState(false)
  const toggleRevealAuthor = () => {
    setRevealAuthor(!revealAuthor)
    setRevealYear(false)
    setRevealGenre(false)
  }
  const toggleRevealYear = () => {
    setRevealYear(!revealYear)
    setRevealAuthor(false)
    setRevealGenre(false)
  }
  const toggleRevealGenre = () => {
    setRevealGenre(!revealGenre)
    setRevealYear(false)
    setRevealAuthor(false)
  }
  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      {revealAuthor ? (
        <S.FilterBox>
          <div
            className="filter__button button-author _btn-text_focus"
            onClick={toggleRevealAuthor}
          >
            исполнителю
          </div>
          <ShowAuthors />
        </S.FilterBox>
      ) : (
        <S.FilterBox>
          <div
            className="filter__button button-author _btn-text"
            onClick={toggleRevealAuthor}
          >
            исполнителю
          </div>
        </S.FilterBox>
      )}

      {revealYear ? (
        <S.FilterBox>
          <div
            className="filter__button button-year _btn-text_focus"
            onClick={toggleRevealYear}
          >
            году выпуска
          </div>
          <ShowYears />
        </S.FilterBox>
      ) : (
        <S.FilterBox>
          <div
            className="filter__button button-year _btn-text"
            onClick={toggleRevealYear}
          >
            году выпуска
          </div>
        </S.FilterBox>
      )}
      {revealGenre ? (
        <S.FilterBox>
          <div
            className="filter__button button-genre _btn-text_focus"
            onClick={toggleRevealGenre}
          >
            жанру
          </div>
          <ShowGenres />
        </S.FilterBox>
      ) : (
        <S.FilterBox>
          <div
            className="filter__button button-genre _btn-text"
            onClick={toggleRevealGenre}
          >
            жанру
          </div>
        </S.FilterBox>
      )}
    </S.CenterblockFilter>
  )
}
