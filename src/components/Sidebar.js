import { PlayList } from "./PlayList"
import { SkeletonSidebarList } from "./skeleton/SkeletonSidebar"

export function Sidebar({isLoaded}) {
    return (
        <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
          <p className="sidebar__personal-name">Sergey.Ivanov</p>
          <div className="sidebar__icon">
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout"></use>
            </svg>
          </div>
        </div>
        <div className="sidebar__block">
          <div className="sidebar__list">
           
          {isLoaded ? <PlayList img = "img/playlist01.png"/>: <SkeletonSidebarList />}
          {isLoaded ? <PlayList img = "img/playlist02.png" />: <SkeletonSidebarList />}
          {isLoaded ? <PlayList img = "img/playlist03.png"/>: <SkeletonSidebarList />}

          </div>
        </div>
      </div>
    )
};