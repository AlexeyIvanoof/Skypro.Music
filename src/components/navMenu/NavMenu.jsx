import ShowMenu from "./NavShowMenu.jsx";
import { useState } from "react";
import * as S from './NavMenu.styles.js'

export function MainNav() {
const [visible, setVisible] = useState(false);

const toggleVisibility = () => setVisible(!visible);

return (
  <S.MainNav>
    <S.NavLogo>
      <S.LogoImg src="img/logo.png" alt="logo" />
    </S.NavLogo>
    <S.NavBurger onClick={toggleVisibility}>
      <S.BurgerLine></S.BurgerLine>
      <S.BurgerLine></S.BurgerLine>
      <S.BurgerLine></S.BurgerLine>
    </S.NavBurger>
    {visible && <ShowMenu />}
  </S.MainNav>
);
}