import { AudioPlayer } from "./AudioPlayer"
import { TrackList } from "./TrackList"
import { Sidebar } from "./Sidebar"
import { MainNav } from "./navMenu/NavMenu"
import { useState, useEffect } from 'react'
import * as S from './TopIndex.styles.js'



export function Index() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      const timeout = setTimeout(() => {
        setIsLoaded(true);
      }, 5000);

      return () => clearTimeout(timeout); 
    }
  }, [isLoaded]);
    return (

<S.Wrapper>
<S.Container>
  <S.Main>

  <MainNav />

  <TrackList isLoaded={isLoaded} />

  <Sidebar isLoaded={isLoaded}/>
   
  </S.Main>

 < AudioPlayer isLoaded={isLoaded}/> 

  <S.Footer></S.Footer>
</S.Container>
</S.Wrapper>
    )
};