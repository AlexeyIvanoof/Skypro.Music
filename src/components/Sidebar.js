import { PlayList } from "./PlayList"
import { SkeletonSidebarList } from "./skeleton/SkeletonSidebar"
import * as S from './Sidebar.styles.js'
import {NavLink } from "react-router-dom";

export function Sidebar({isLoaded}) {
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

          <NavLink to="/PlaylistOfDay">
          {isLoaded ? <PlayList img = "img/playlist01.png"/>: <SkeletonSidebarList />}
          </NavLink>

          <NavLink to="/100DanceHits">
          {isLoaded ? <PlayList img = "img/playlist02.png" />: <SkeletonSidebarList />}
          </NavLink>

          <NavLink to="/IndieCharge">
          {isLoaded ? <PlayList img = "img/playlist03.png"/>: <SkeletonSidebarList />}
          </NavLink>

          </S.SidebarList>
        </S.SidebarBlock>
      </S.MainSidebar>
    )
};