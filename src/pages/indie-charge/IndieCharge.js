import { AudioPlayer } from "../../components/AudioPlayer"
import { IndieCharge } from "../../components/TrackIndieCharge"
import { MainNav } from "../../components/navMenu/NavMenu"
import { useState, useEffect } from 'react'
import * as S from './IndieCharge.styles'



export function TrackIndieGarge() {
  
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        setisLoading(true);
      }, 2000);

      return () => clearTimeout(timeout); 
    }
  }, [isLoading]);
    return (

<S.Wrapper>
<S.Container>
  <S.Main>

  <MainNav />

  <IndieCharge isLoading={isLoading} />
   
  </S.Main>

 < AudioPlayer isLoading={isLoading}/> 

  <S.Footer></S.Footer>
</S.Container>
</S.Wrapper>
    )
};