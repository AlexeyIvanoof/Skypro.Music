import { TrackList } from './trackList/TrackList.js'
import * as S from './trackList/TrackList.styles.js'
import * as C from './sidebar/Sidebar.styles.js'
import { CenterblockSearch } from './centerblockSearch/CenterblockSearch.js'
import { useDispatch, useSelector } from 'react-redux'
import {
  CurrentTrackSelector,
  favoritTrackSelector,
  favouritesTracksSelector,
} from '../store/selectors/track.js'
import { TrackListTitle } from './trackListTitle/TrackListTitle.jsx'
import { useGetFavouriteTracksAllQuery } from '../serviseQuery/tracks'
import { setFavouriteTracksAll, setCurrentPage } from '../store/slices/track'
import { useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext.js'
import { useNavigate } from 'react-router-dom'

export function MyTrackList({
  loadingTracksError,
  handleCurrentTrack,
  setCurrentTrack,
}) {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const dispatch = useDispatch()
  const { data, error, isLoading } = useGetFavouriteTracksAllQuery()
  const favouritesTracks = useSelector(favouritesTracksSelector)
  //const currentTrack = useSelector(CurrentTrackSelector)
  const favoritTrack = useSelector(favoritTrackSelector)

  useEffect(() => {
    if (data) {
      dispatch(setFavouriteTracksAll(data))
      dispatch(setCurrentPage('Favorites'))
    }
  }, [data])
   console.log(data)
  const handleLogOut = () => {
    localStorage.clear()
    navigate('/', { replace: true })
  }

  return (
   <>
      
      <CenterblockSearch props="Мои треки" />
      <S.CenterblockContent>
        <TrackListTitle />
        <TrackList
          isLoading={isLoading}
          handleCurrentTrack={handleCurrentTrack}
          loadingTracksError={loadingTracksError}
          setCurrentTrack={setCurrentTrack}
          currentTrack = {favoritTrack}
          tracks={favouritesTracks}
          error={error}
        />
      </S.CenterblockContent>
      </>
  )
}
