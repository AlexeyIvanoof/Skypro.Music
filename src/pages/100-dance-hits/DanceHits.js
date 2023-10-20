import { AudioPlayer } from "../../components/AudioPlayer"
import { TrackDanceHits } from "../../components/TrackDanceHits"
import { MainNav } from "../../components/navMenu/NavMenu"
import { useState, useEffect } from 'react'
import * as S from './DanceHits.styles'



export function DanceHits() {
  
  const [isLoaded, setIsLoaded] = useState(false);

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

  <TrackDanceHits isLoaded={isLoaded} />
   
  </S.Main>

 < AudioPlayer isLoaded={isLoaded}/> 

  <S.Footer></S.Footer>
</S.Container>
</S.Wrapper>
    )
};