/* eslint-disable react/jsx-key */
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
      <a href="#" className="filter__list-item">
        {Author}
      </a>
    </li>
  ));
  export  function ShowAuthors() {
    return (
        <div className="filter__menu">
      <ul className="filter__list">{list}</ul>
    </div>
  );
}  