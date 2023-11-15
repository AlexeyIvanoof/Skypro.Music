import { Track } from './track/Track.js'
import * as S from './trackList/TrackList.styles.js'
import * as C from './sidebar/Sidebar.styles.js'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CurrentTrackSelector } from '../store/selectors/track.js'
import { TrackListTitle } from "./trackListTitle/TrackListTitle.jsx"

export function MyTrackList({
  isLoaded,
  tracks,
  loadingTracksError,
  handleCurrentTrack,
  setCurrentTrack,
}) {
  const currentTrack = useSelector(CurrentTrackSelector)
  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
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
      <S.CenterblockH2>Мои треки</S.CenterblockH2>

      <S.CenterblockContent>

      <TrackListTitle />

        <Track
          isLoaded={isLoaded}
          tracks={tracks}
          handleCurrentTrack={handleCurrentTrack}
          loadingTracksError={loadingTracksError}
          setCurrentTrack={setCurrentTrack}
          currentTrack={currentTrack}
        />
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}
