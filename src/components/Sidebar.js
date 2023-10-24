import * as S from './Sidebar.styles.js'
import {NavLink } from "react-router-dom";
import { categoryArr } from './utilits/categoryes.js';

export function Sidebar({isLoaded, loadingTracksError }) {

  const fullCategory = categoryArr.map((category) => (
    <S.SidebarItem key={category.id}>
      {isLoaded  && !loadingTracksError ? (
        <NavLink to={`/category/${category.id}`}>
          <S.SidebarImg src={category.img} alt={category.alt} />
        </NavLink>
      ) : (
        <S.SkeletonSidebar> </S.SkeletonSidebar>
      )}
    </S.SidebarItem>
  ))

    return (
        <S.MainSidebar>
        <S.SidebarPesonal>
          <S.SidebarPesonalName>Aleksey.Ivanov</S.SidebarPesonalName>
          <NavLink to="/">
          <S.SidebarIcon>
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout"></use>
            </svg>
          </S.SidebarIcon>
          </NavLink>
        </S.SidebarPesonal>
        <S.SidebarBlock>
          <S.SidebarList>

          <S.SidebarList>{fullCategory}</S.SidebarList>

          </S.SidebarList>
        </S.SidebarBlock>
      </S.MainSidebar>
    )
};


