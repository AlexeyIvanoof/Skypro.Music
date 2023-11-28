import { TrackList } from './trackList/TrackList.js'
import * as S from './trackList/TrackList.styles.js'
import { Sidebar } from './sidebar/Sidebar.js'
import { CenterblockSearch } from './centerblockSearch/CenterblockSearch.js'
import { useDispatch, useSelector } from 'react-redux'
import {
  filtersPlaylistSelector,
  favouritesTracksSelector,
} from '../store/selectors/track.js'
import { TrackListTitle } from './trackListTitle/TrackListTitle.jsx'
import { useGetFavouriteTracksAllQuery } from '../serviseQuery/tracks'
import { setFavouriteTracksAll, setCurrentPage } from '../store/slices/track'
import { useEffect } from 'react'
import { useState } from 'react'

export function MyTrackList(){
 /* loadingTracksError,
  handleCurrentTrack,
  setCurrentTrack,
}) {
  
  const dispatch = useDispatch()
  const { data, error} = useGetFavouriteTracksAllQuery()
  const favouritesTracks = useSelector(favouritesTracksSelector)

  const favoritTrack = useSelector(favoritTrackSelector)
  const [isLoading, setisLoading] = useState(true)
  console.log(favouritesTracks )
  useEffect(() => {
    if (data) {
      dispatch(setFavouriteTracksAll(data))
      dispatch(setCurrentPage('Favorites'))
    }
  }, [data])
   console.log(data)*/
   const [isLoading, setisLoading] = useState(true)
   const dispatch = useDispatch();
   const filter = useSelector(filtersPlaylistSelector);
   const { data, error } = useGetFavouriteTracksAllQuery();
   const favouritesTracks = useSelector(favouritesTracksSelector);
 
   const tracks =
     filter?.isActiveSort ||
     filter?.isActiveAuthors ||
     filter?.isActiveGenres ||
     filter?.isActiveSearch
       ? filter?.filterTracksArr
       : favouritesTracks;
 
   useEffect(() => {
     dispatch(setFavouriteTracksAll(data));
   }, [filter.isActiveSort, tracks]);
 
   useEffect(() => {
     if (data) {
       dispatch(setFavouriteTracksAll(data));
       dispatch(setCurrentPage("Favorites"));
     }
   }, [data]);
 

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
         tracks={favouritesTracks}
         error={error}
         isLoading={isLoading}
        />
      </S.MainCenterblock>
      <Sidebar
            isLoading = {isLoading}
            error={error}
                />
      </>
  )
}
