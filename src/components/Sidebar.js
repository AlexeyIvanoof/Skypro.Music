import { PlayList } from "./PlayList"


export function Sidebar() {
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
           
           <PlayList img = "img/playlist01.png"/>
           <PlayList img = "img/playlist02.png" />
           <PlayList img = "img/playlist03.png"/>

          </div>
        </div>
      </div>
    )
};