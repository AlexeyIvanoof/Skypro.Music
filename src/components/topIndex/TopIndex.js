import { TrackList } from '../trackList/TrackList.js'
import { Filter } from '../trackFilter/TrackFilters.jsx'
import { Sidebar, SidebarCategory} from '../sidebar/Sidebar.js'
import { CenterblockSearch } from '../centerblockSearch/CenterblockSearch.js'
import { useState, useEffect } from 'react'
import { TrackListTitle } from '../trackListTitle/TrackListTitle.jsx'
import * as S from "./TopIndex.styles";
import {
  allTracksSelector,
  filtersPlaylistSelector,
  currentPageSelector
} from '../../store/selectors/track.js'
import { useDispatch, useSelector } from 'react-redux'
import {
  setAllTracks,
  setCurrentPage,
} from '../../store/slices/track.js'
import { useGetTracksAllQuery } from '../../serviseQuery/tracks.jsx'

export function Index() {
  const dispatch = useDispatch()
  const [isLoading, setisLoading] = useState(true)
  const currentPage = useSelector(currentPageSelector)
  const allTracks = useSelector(allTracksSelector)
  const tracksAll = useSelector(allTracksSelector);
  const { data, isError } = useGetTracksAllQuery()
  const filtre = useSelector(filtersPlaylistSelector);
 
 
  useEffect(() => {
      const timer = setTimeout(() => {
        setisLoading(false)
      }, 2000)
      return () => clearTimeout(timer)
    },[])

    const tracks =
    filtre?.isActiveSort ||
    filtre?.isActiveAuthors ||
    filtre?.isActiveGenres ||
    filtre?.isActiveSearch
      ? filtre?.filterTracksArr
      : tracksAll;
  
  useEffect(() => {
    //console.log(data);
    dispatch(setAllTracks(data));
  }, [filtre.isActiveSort, tracks]);

  

  useEffect(() => {
    if (data) {
      //console.log(data)
      dispatch(setAllTracks(data))
      dispatch(setCurrentPage('Index'))
    }
  }, [data])

  return (
   <>  
     <S.MainCenterblock>
            <CenterblockSearch props="Треки" />
            <Filter 
        selectedArrListFilter={
          currentPage === "Index"
            ? allTracks
            : tracks    
        }
        currentPage={currentPage}/>
         <TrackListTitle />
            <TrackList
              isLoading={isLoading}
              tracks={tracks}
              Error={isError}
            />
      </S.MainCenterblock>
             <Sidebar isLoading = {isLoading}  Error={isError}  props = {<SidebarCategory  isLoading = {isLoading}/>} />
                   
</> 
  )
}
