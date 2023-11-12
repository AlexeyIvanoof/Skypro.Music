import  AudioPlayer  from "./AudioPlayer"
import { TrackList } from "./TrackList"
import { Sidebar } from "./Sidebar"
import { MainNav } from "./navMenu/NavMenu"
import { useState, useEffect } from 'react'
import * as S from './TopIndex.styles.js'
import { GetAllTracks } from "../Api"
import {allTracksSelector, CurrentTrackSelector,shuffleAllTracksSelector,
  shuffleSelector} from "../store/selectors/track.js"
import { useDispatch, useSelector} from "react-redux";
import { setAllTracks, setCurrentTrack } from "../store/slices/track.js";

export function Index() {
 
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
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }
}, [isLoaded]);

  return (

<S.Wrapper>
<S.Container>
<S.Main>

<MainNav />


<TrackList  isLoaded={isLoaded}
            tracks={tracks}
            handleCurrentTrack={handleCurrentTrack}
            loadingTracksError={loadingTracksError}
             />

<Sidebar isLoaded={isLoaded}  loadingTracksError={loadingTracksError}/>
 
</S.Main>

{ currentTrack && (
        <AudioPlayer isLoaded={isLoaded}  currentTrack={currentTrack} />
        )}

<S.Footer></S.Footer>
</S.Container>
</S.Wrapper>
  )
};