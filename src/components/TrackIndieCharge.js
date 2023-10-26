import { Content } from "./content/Content"
import * as S from './TrackList.styles.js'
import * as C from './Sidebar.styles.js'
import {NavLink } from "react-router-dom";

export function IndieCharge({isLoaded}) {
    return (
        <S.MainCenterblock>
        <S.CenterblockSearch>
          <S.SearchSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
          </S.SearchSvg>
          <S.SearchText
            type="search"
            placeholder="Поиск"
            name="search"
          />
         <C.SidebarPesonal>
          <C.SidebarPesonalName>Aleksey.Ivanov</C.SidebarPesonalName>
          <NavLink to="/">
          <C.SidebarIcon>
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout"></use>
            </svg>
          </C.SidebarIcon>
          </NavLink>
        </C.SidebarPesonal>

        </S.CenterblockSearch>
        <S.CenterblockH2>Инди заряд</S.CenterblockH2>

        <S.CenterblockContent>
          <S.ContentTitlePlaylist>
            <S.PlaylistTitleCol01>Трек</S.PlaylistTitleCol01>
            <S.PlaylistTitleCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol02>
            <S.PlaylistTitleCol03>АЛЬБОМ</S.PlaylistTitleCol03>
            <S.PlaylistTitleCol04>
              <S.PlaylistTitleSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
              </S.PlaylistTitleSvg>
            </S.PlaylistTitleCol04>
          </S.ContentTitlePlaylist>
        
         <Content  isLoaded={isLoaded}/>

        </S.CenterblockContent>
      </S.MainCenterblock>
    )
};