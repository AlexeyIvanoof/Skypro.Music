import { TrackList } from '../trackList/TrackList.js'
import { Filter } from '../trackFilter/TrackFilters.jsx'
import { Sidebar, SidebarCategory} from '../sidebar/Sidebar.js'
import { CenterblockSearch } from '../centerblockSearch/CenterblockSearch.js'
import { useState, useEffect } from 'react'
import { TrackListTitle } from '../trackListTitle/TrackListTitle.jsx'
import * as S from "./TopIndex.styles";
import {
  allTracksSelector,
  shuffleAllTracksSelector,
  shuffleSelector,
} from '../../store/selectors/track.js'
import { useDispatch, useSelector } from 'react-redux'
import {
  setAllTracks,
  setCurrentTrack,
  setCurrentPage,
} from '../../store/slices/track.js'
import { useGetTracksAllQuery } from '../../serviseQuery/tracks.jsx'

export function Index() {
  const dispatch = useDispatch()

  const [isLoading, setisLoading] = useState(true)
  const tracks = useSelector(allTracksSelector)
  const [loadingTracksError, setLoadingTracksError] = useState(null)
  const shuffle = useSelector(shuffleSelector)
  const shuffleAllTracks = useSelector(shuffleAllTracksSelector)
  const arrayTracksAll = shuffle ? shuffleAllTracks : tracks
  const handleCurrentTrack = (track) => {
    const indexCurrentTrack = arrayTracksAll.indexOf(track)
    dispatch(setCurrentTrack({ track, indexCurrentTrack }))
  }
 
  useEffect(() => {
      const timer = setTimeout(() => {
        setisLoading(false)
      }, 2000)
      return () => clearTimeout(timer)
    },[])
 

  const { data } = useGetTracksAllQuery()

  useEffect(() => {
    if (data) {
      console.log(data)
      dispatch(setAllTracks(data))
      dispatch(setCurrentPage('Index'))
    }
  }, [data])

  return (
   <>  
     <S.MainCenterblock>
            <CenterblockSearch props="Треки" />
            <Filter />
            <TrackListTitle />
            <TrackList
              isLoading={isLoading}
              tracks={tracks}
              handleCurrentTrack={handleCurrentTrack}
              loadingTracksError={loadingTracksError}
            />
      </S.MainCenterblock>
             <Sidebar isLoading = {isLoading}  loadingTracksError={loadingTracksError}  props = {<SidebarCategory  isLoading = {isLoading}/>} />
                   
</> 
  )
}
