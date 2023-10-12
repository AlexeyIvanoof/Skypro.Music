import { PlayList } from "./PlayList"
import { SkeletonSidebarList } from "./skeleton/SkeletonSidebar"
import * as S from './Sidebar.styles.js'

export function Sidebar({isLoaded}) {
    return (
        <S.MainSidebar>
        <S.SidebarPesonal>
          <S.SidebarPesonalName>Sergey.Ivanov</S.SidebarPesonalName>
          <S.SidebarIcon>
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout"></use>
            </svg>
          </S.SidebarIcon>
        </S.SidebarPesonal>
        <S.SidebarBlock>
          <S.SidebarList>
           
          {isLoaded ? <PlayList img = "img/playlist01.png"/>: <SkeletonSidebarList />}
          {isLoaded ? <PlayList img = "img/playlist02.png" />: <SkeletonSidebarList />}
          {isLoaded ? <PlayList img = "img/playlist03.png"/>: <SkeletonSidebarList />}

          </S.SidebarList>
        </S.SidebarBlock>
      </S.MainSidebar>
    )
};