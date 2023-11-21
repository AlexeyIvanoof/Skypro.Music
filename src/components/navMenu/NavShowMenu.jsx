import * as S from './NavMenu.styles.js'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function ShowMenu() {
  const navigate = useNavigate()
  const handleLogOut = () => {
    localStorage.clear()
    navigate('/', { replace: true })
  }

  return (
    <S.NavMenu>
      <S.MenuList>
        <S.MenuItem>
          <NavLink to="index">
            <S.MenuLink>Главное</S.MenuLink>
          </NavLink>
        </S.MenuItem>
        <S.MenuItem>
          <NavLink to="myplaylist">
            <S.MenuLink>Мой плейлист</S.MenuLink>
          </NavLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink onClick={handleLogOut}>Выход</S.MenuLink>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenu>
  )
}
