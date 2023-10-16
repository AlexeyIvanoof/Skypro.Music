import * as S from './NavMenu.styles.js'

export default function ShowMenu() {
    return (
      <S.NavMenu>
        <S.MenuList>
          <S.MenuItem>
            <S.MenuLink href="#">Главное</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="#">Мой плейлист</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="./Signin.js">Войти</S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenu>
    );
  }