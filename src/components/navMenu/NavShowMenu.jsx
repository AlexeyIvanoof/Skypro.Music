import * as S from './NavMenu.styles.js'
import { NavLink } from "react-router-dom";

export default function ShowMenu() {
    return (
      <S.NavMenu>
        <S.MenuList>
          <S.MenuItem>
          <NavLink to="/index">
          <S.MenuLink >Главное</S.MenuLink>
              </NavLink>
          </S.MenuItem>
          <S.MenuItem>
          <NavLink to="/myplaylist">
          <S.MenuLink >Мой плейлист</S.MenuLink>
          </NavLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="./Signin.js">Войти</S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenu>
    );
  }