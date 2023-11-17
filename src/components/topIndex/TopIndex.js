import AudioPlayer from '../audioPlayer/AudioPlayer.js'
import { TrackList } from '../trackList/TrackList.js'
import { Filter } from '../trackFilter/TrackFilters.jsx'
import { CenterblockSearch } from '../centerblockSearch/CenterblockSearch.js'
import { Sidebar } from '../sidebar/Sidebar.js'
import { MainNav } from '../navMenu/NavMenu.jsx'
import { useState, useEffect } from 'react'
import * as S from './TopIndex.styles.js'
import { TrackListTitle } from '../trackListTitle/TrackListTitle.jsx'

import {
  allTracksSelector,
  CurrentTrackSelector,
  shuffleAllTracksSelector,
  shuffleSelector,
} from '../../store/selectors/track.js'
import { useDispatch, useSelector } from 'react-redux'
import { setAllTracks, setCurrentTrack,setCurrentPage } from '../../store/slices/track.js'
import  { useGetTracksAllQuery} from "../../serviseQuery/tracks.jsx";

export function Index() {
  const dispatch = useDispatch()

  const [isLoaded, setIsLoaded] = useState(false)
  const tracks = useSelector(allTracksSelector)
  const [loadingTracksError, setLoadingTracksError] = useState(null)
  const currentTrack = useSelector(CurrentTrackSelector)
  const shuffle = useSelector(shuffleSelector)
  const shuffleAllTracks = useSelector(shuffleAllTracksSelector)
  const arrayTracksAll = shuffle ? shuffleAllTracks : tracks

  const handleCurrentTrack = (track) => {
    const indexCurrentTrack = arrayTracksAll.indexOf(track)
    dispatch(setCurrentTrack({ track, indexCurrentTrack }))
  }
  /*/useEffect(() => {
    GetAllTracks()
      .then((track) => {
        dispatch(setAllTracks(track))
      })
      .catch((error) => {
        setLoadingTracksError(error.message)
      })
  }, [])/*/

  useEffect(() => {
    if (!isLoaded) {
      const timer = setTimeout(() => {
        setIsLoaded(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isLoaded])

  const { data} = useGetTracksAllQuery();

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch(setAllTracks(data));
      dispatch(setCurrentPage("Index"));
    }
  }, [data]);


  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <MainNav />
          <S.MainCenterblock>
          < CenterblockSearch props = "Треки"/>
           <Filter />
           <TrackListTitle />
          <TrackList
            isLoaded={isLoaded}
            tracks={tracks}
            handleCurrentTrack={handleCurrentTrack}
            loadingTracksError={loadingTracksError}
          />
          </S.MainCenterblock>
          <Sidebar
            isLoaded={isLoaded}
            loadingTracksError={loadingTracksError}
          />
        </S.Main>

        {currentTrack && (
          <AudioPlayer isLoaded={isLoaded} currentTrack={currentTrack} />
        )}

        <S.Footer></S.Footer>
      </S.Container>
    </S.Wrapper>
  )
}
