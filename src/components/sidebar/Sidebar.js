import * as S from './Sidebar.styles.js'
import { NavLink } from 'react-router-dom'
import { categoryArr } from '../utilits/categoryes.js'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext.js'

export function SidebarCategory ({isLoading, loadingTracksError}){
  const fullCategory = categoryArr.map((category) => (
    <S.SidebarItem key={category.id}>
      {!isLoading && !loadingTracksError ? (
        <NavLink to={`/category/${category.id}`}>
          <S.SidebarImg src={category.img} alt={category.alt} />
        </NavLink>
      ) : (
        <S.SkeletonSidebar> </S.SkeletonSidebar>
      )}
    </S.SidebarItem>
  ))

  return (
    <S.SidebarBlock>
    <S.SidebarList>
      <S.SidebarList>{fullCategory}</S.SidebarList>
    </S.SidebarList>
  </S.SidebarBlock>
  )
}

export function Sidebar({props}) {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.clear()
    navigate('/', { replace: true })
  }

 

  return (
    <S.MainSidebar>
      <S.SidebarPesonal>
        <S.SidebarPesonalName>{user}</S.SidebarPesonalName>

        <S.SidebarIcon>
          <svg onClick={handleLogOut} alt="logout">
            <use xlinkHref="/img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPesonal>
        {props}
    </S.MainSidebar>
  )
}
