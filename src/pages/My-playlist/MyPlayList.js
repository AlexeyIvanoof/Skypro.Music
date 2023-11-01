import { AudioPlayer } from "../../components/AudioPlayer"
import { MyTrackList } from "../../components/MyTrackList"
import { MainNav } from "../../components/navMenu/NavMenu"
import { useState, useEffect } from 'react'
import * as S from './MyPlayList.styles'
import { GetAllTracks } from "../../Api"


export function MyPlayList() {
  
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