import { AudioPlayer } from "./AudioPlayer"
import { TrackList } from "./TrackList"
import { Sidebar } from "./Sidebar"
import { MainNav } from "./navMenu/NavMenu"
import { useState, useEffect } from 'react'
import * as S from './TopIndex.styles.js'
import { GetAllTracks } from "../Api"


export function Index() {
 
const [isLoaded, setIsLoaded] = useState(false);
const [tracks, setArrTracks] = useState([]);
const [currentTrack, setCurrentTrack] = useState(null);
const [loadingTracksError, setLoadingTracksError] = useState(null);
const handleCurrentTrack = (track) => setCurrentTrack(track);

useEffect(() => {

  GetAllTracks().then((track) => {
    setArrTracks(track);
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


<TrackList   isLoaded={isLoaded}
            tracks={tracks}
            handleCurrentTrack={handleCurrentTrack}
            loadingTracksError={loadingTracksError}
             />

<Sidebar isLoaded={isLoaded}  loadingTracksError={loadingTracksError}/>
 
</S.Main>

{currentTrack && (
        <AudioPlayer isLoaded={isLoaded}  currentTrack={currentTrack} />
        )}

<S.Footer></S.Footer>
</S.Container>
</S.Wrapper>
  )
};