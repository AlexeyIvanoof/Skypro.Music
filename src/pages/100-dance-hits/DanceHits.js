import { AudioPlayer } from '../../components/AudioPlayer'
import { TrackDanceHits } from '../../components/TrackDanceHits'
import { MainNav } from '../../components/navMenu/NavMenu'
import { useState, useEffect } from 'react'
import * as S from './DanceHits.styles'

export function DanceHits() {
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        setisLoading(true)
      }, 2000)

      return () => clearTimeout(timeout)
    }
  }, [isLoading])
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <MainNav />

          <TrackDanceHits isLoading={isLoading} />
        </S.Main>

        <AudioPlayer isLoading={isLoading} />

        <S.Footer></S.Footer>
      </S.Container>
    </S.Wrapper>
  )
}
