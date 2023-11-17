import AudioPlayer from '../../components/audioPlayer/AudioPlayer.js'
import { MyTrackList } from '../../components/MyTrackList.js'
import { MainNav } from '../../components/navMenu/NavMenu.jsx'
import { useState, useEffect } from 'react'
import * as S from './MyPlayList.styles.js'
import { CurrentTrackSelector, favouritesTracksSelector } from "../../store/selectors/track.js"
import { useSelector } from "react-redux";
//import { GetAllTracks } from '../../Api'
/*import {
  allTracksSelector,
  CurrentTrackSelector,
  shuffleAllTracksSelector,
  shuffleSelector,
  favouritesTracksSelector
} from './../../store/selectors/track.js'
import { useDispatch, useSelector } from 'react-redux'
import { setAllTracks, setFavouriteTracksAll, setCurrentPage} from '../../store/slices/track.js'
import { useGetFavouriteTracksAllQuery} from "../../serviseQuery/tracks.jsx";*/

export function Favorites( handleCurrentTrack, error) {
  const favouritesTracks = useSelector(favouritesTracksSelector);
  const [isLoaded, setIsLoaded] = useState(false)
  const currentTrack = useSelector(CurrentTrackSelector)
  /*const tracks = useSelector(allTracksSelector)
  const [loadingTracksError, setLoadingTracksError] = useState(null)
  const currentTrack = useSelector(CurrentTrackSelector)
  const shuffle = useSelector(shuffleSelector)
  const shuffleAllTracks = useSelector(shuffleAllTracksSelector)
  const arrayTracksAll = shuffle ? shuffleAllTracks : tracks

  
  const { data, error} = useGetFavouriteTracksAllQuery();
  const favouritesTracks = useSelector(favouritesTracksSelector);

  useEffect(() => {
    if (data) {
      dispatch(setFavouriteTracksAll(data));
      dispatch(setCurrentPage("myplaylist"));
    }
  }, [data]);

  /*useEffect(() => {
    if (data) {
      console.log(data);
      dispatch(setAllTracks(data));
      dispatch(setCurrentPage("myplaylist"));
    }
  }, [data]);*/

  useEffect(() => {
    if (!isLoaded) {
      const timeout = setTimeout(() => {
        setIsLoaded(true)
      }, 2000)

      return () => clearTimeout(timeout)
    }
  }, [isLoaded])
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <MainNav />

          <MyTrackList
            isLoaded={isLoaded}
            tracks={favouritesTracks}
            handleCurrentTrack={handleCurrentTrack}
            error={error}
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
