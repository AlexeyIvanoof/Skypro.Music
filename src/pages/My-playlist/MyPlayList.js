import AudioPlayer from "../../components/AudioPlayer"
import { MyTrackList } from "../../components/MyTrackList"
import { MainNav } from "../../components/navMenu/NavMenu"
import { useState, useEffect } from 'react'
import * as S from './MyPlayList.styles'
import { GetAllTracks } from "../../Api"
import {allTracksSelector, CurrentTrackSelector,shuffleAllTracksSelector,
  shuffleSelector} from "./../../components/store/selectors/track.js"
import { useDispatch, useSelector} from "react-redux";
import { setAllTracks, setCurrentTrack } from "./../../components/store/slices/track.js";

export function MyPlayList() {
  
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const tracks = useSelector(allTracksSelector);
  const [loadingTracksError, setLoadingTracksError] = useState(null);
  const currentTrack = useSelector (CurrentTrackSelector)
  const shuffle = useSelector ( shuffleSelector);
  const shuffleAllTracks = useSelector (shuffleAllTracksSelector);
  const arrayTracksAll = shuffle ? shuffleAllTracks :tracks;


  const handleCurrentTrack = (track) =>{
    const indexCurrentTrack = arrayTracksAll.indexOf(track);
    dispatch(setCurrentTrack({track, indexCurrentTrack}));
  }
  useEffect(() => {
  
    GetAllTracks().then((track) => {
      dispatch(setAllTracks(track));
    })
    .catch((error) => {
    setLoadingTracksError(error.message);
    });
  }, []);


   
  useEffect(() => {
    if (!isLoaded) {
      const timeout = setTimeout(() => {
        setIsLoaded(true);
      }, 2000);

      return () => clearTimeout(timeout); 
    }
  }, [isLoaded]);
    return (

<S.Wrapper>
<S.Container>
  <S.Main>

  <MainNav />

  <MyTrackList isLoaded={isLoaded} tracks={tracks}
              handleCurrentTrack={handleCurrentTrack}/>
   
  </S.Main>

  {currentTrack && (
        <AudioPlayer isLoaded={isLoaded}  currentTrack={currentTrack} />
        )}

  <S.Footer></S.Footer>
</S.Container>
</S.Wrapper>
    )
};