/* eslint-disable react/jsx-key */
import * as S from './TrackLibrary.styles.js'

const Genres = [
    "Pop",
    "Rock",
    "Classic",
    "Pop",
    "Rock",
    "Classic",
    "Pop",
    "Rock",
    "Classic",
  ];
  const list = Genres.map((Genre) => (
    <li>
      <S.FilterListItem href="#">
        {Genre}
      </S.FilterListItem>
    </li>
  ));
  
  export  function ShowGenres() {
    return (
        <S.FilterMenu>
        < S.FilterList>{list}</S.FilterList>
      </S.FilterMenu>
    );
  }