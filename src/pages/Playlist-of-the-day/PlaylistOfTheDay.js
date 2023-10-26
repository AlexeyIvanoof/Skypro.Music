import { AudioPlayer } from "../../components/AudioPlayer"
import { TrackDayList } from "../../components/TrackOfDay"
import { MainNav } from "../../components/navMenu/NavMenu"
import { useState, useEffect } from 'react'
import * as S from './PlaylistOfTheDay.styles'



export function PlayListOfDay() {
  
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

  <TrackDayList isLoaded={isLoaded} />
   
  </S.Main>

 < AudioPlayer isLoaded={isLoaded}/> 

  <S.Footer></S.Footer>
</S.Container>
</S.Wrapper>
    )
};