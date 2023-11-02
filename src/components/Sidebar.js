import * as S from './Sidebar.styles.js'
import {NavLink } from "react-router-dom";
import { categoryArr } from './utilits/categoryes.js';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from '../Context/UserContext.js';

export function Sidebar({isLoaded, loadingTracksError}) {
  const {user} = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();  
    navigate("/Auth", { replace: true });
  };

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
          <S.SidebarPesonalName>{user}</S.SidebarPesonalName>
          
          <S.SidebarIcon>
            <svg onClick={handleLogOut} alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout"></use>
            </svg>
          </S.SidebarIcon>
          
        </S.SidebarPesonal>
        <S.SidebarBlock>
          <S.SidebarList>

          <S.SidebarList>{fullCategory}</S.SidebarList>

          </S.SidebarList>
        </S.SidebarBlock>
      </S.MainSidebar>
    )
};


