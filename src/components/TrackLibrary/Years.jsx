/* eslint-disable react/jsx-key */
import * as S from './TrackLibrary.styles.js'

const Years = [
    "1997",
    "1986",
    "2001",
    "1999",
    "2003",
    "2015",
    "1991",
    "2007",
    "1986",
    "2001",
    "1999",
    "2003",
  ];
  const list = Years.map((Year) => (
    <li>
      <S.FilterListItem href="#">
        {Year}
      </S.FilterListItem>
    </li>
  ));
  
  export  function ShowYears() {
    return (
        <S.FilterMenu>
        <S.FilterList>{list}</S.FilterList>
      </S.FilterMenu>
    );
  }