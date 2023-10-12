/* eslint-disable react/jsx-key */
import * as S from './TrackLibrary.styles.js'

const Authors = [
    "Nero",
    "Tom Boxer",
    "Calvin Harris, Disciples",
    " minthaze",
    "Nero",
    "Tom Boxer",
    "Calvin Harris, Disciples",
  ];
  const list = Authors.map((Author) => (
    <li>
      <S.FilterListItem href="#">
        {Author}
      </S.FilterListItem>
    </li>
  ));
  export  function ShowAuthors() {
    return (
        <S.FilterMenu>
      <S.FilterList>{list}</S.FilterList>
    </S.FilterMenu>
  );
}  