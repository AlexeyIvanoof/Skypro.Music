import { TrackList } from './trackList/TrackList.js'
import * as S from './trackList/TrackList.styles.js'
import { Sidebar } from './sidebar/Sidebar.js'
import { CenterblockSearch } from './centerblockSearch/CenterblockSearch.js'
import { useDispatch, useSelector } from 'react-redux'
import {
  favoritTrackSelector,
  favouritesTracksSelector,
} from '../store/selectors/track.js'
import { TrackListTitle } from './trackListTitle/TrackListTitle.jsx'
import { useGetFavouriteTracksAllQuery } from '../serviseQuery/tracks'
import { setFavouriteTracksAll, setCurrentPage } from '../store/slices/track'
import { useEffect } from 'react'
//import { useContext } from 'react'
//import { UserContext } from '../Context/UserContext.js'
import { useState } from 'react'

export function MyTrackList({
  loadingTracksError,
  handleCurrentTrack,
  setCurrentTrack,
}) {
  //const navigate = useNavigate()
  //const { user } = useContext(UserContext)
  const dispatch = useDispatch()
  const { data, error} = useGetFavouriteTracksAllQuery()
  const favouritesTracks = useSelector(favouritesTracksSelector)
  //const currentTrack = useSelector(CurrentTrackSelector)
  const favoritTrack = useSelector(favoritTrackSelector)
  const [isLoading, setisLoading] = useState(true)
  console.log(favouritesTracks )
  useEffect(() => {
    if (data) {
      dispatch(setFavouriteTracksAll(data))
      dispatch(setCurrentPage('Favorites'))
    }
  }, [data])
   console.log(data)
  /*const handleLogOut = () => {
    localStorage.clear()
    navigate('/', { replace: true })
  }*/

  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  },[])

  return (
   <>
       <S.MainCenterblock>
      <CenterblockSearch props="Мои треки" />
      
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
      </S.MainCenterblock>
      <Sidebar
            isLoading = {isLoading}
            loadingTracksError={loadingTracksError}
                />
      </>
  )
}
