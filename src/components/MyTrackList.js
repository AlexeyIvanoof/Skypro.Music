import { TrackList } from "./trackList/TrackList.js"
import * as S from './trackList/TrackList.styles.js'
import * as C from './sidebar/Sidebar.styles.js'
import { CenterblockSearch } from "./centerblockSearch/CenterblockSearch.js"
import { useDispatch, useSelector } from "react-redux";
import { CurrentTrackSelector, favouritesTracksSelector } from '../store/selectors/track.js'
import { TrackListTitle } from "./trackListTitle/TrackListTitle.jsx"
import { useGetFavouriteTracksAllQuery} from "../serviseQuery/tracks";
import { setFavouriteTracksAll, setCurrentPage,} from "../store/slices/track";
import { useEffect } from "react";
import { useContext } from 'react'
import { UserContext } from "../Context/UserContext.js"
import { useNavigate } from 'react-router-dom'


export function MyTrackList({
  loadingTracksError,
  handleCurrentTrack,
  setCurrentTrack,
}) {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const dispatch = useDispatch();
  const { data, error, isLoaded } = useGetFavouriteTracksAllQuery();
  const favouritesTracks = useSelector(favouritesTracksSelector);

  useEffect(() => {
    if (data) {
      dispatch(setFavouriteTracksAll(data));
      dispatch(setCurrentPage("Favorites"));
    }
  }, [data]);

  const handleLogOut = () => {
    localStorage.clear()
    navigate('/Auth', { replace: true })
  }

  const currentTrack = useSelector(CurrentTrackSelector)
  return (
    <S.MainCenterblock>
<C.SidebarPesonal>
        <C.SidebarPesonalName>{user}</C.SidebarPesonalName>

        <C.SidebarIcon>
          <svg onClick={handleLogOut} alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </C.SidebarIcon>
      </C.SidebarPesonal>
     <CenterblockSearch props = "Мои треки"/>
     
      <S.CenterblockContent>

      <TrackListTitle />

        <TrackList
          isLoaded={isLoaded}
          handleCurrentTrack={handleCurrentTrack}
          loadingTracksError={loadingTracksError}
          setCurrentTrack={setCurrentTrack}
          currentTrack={currentTrack}
          tracks={favouritesTracks}
          error={error}
          isFavorites
        />
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}
