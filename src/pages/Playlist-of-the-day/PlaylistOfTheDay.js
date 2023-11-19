import { AudioPlayer } from '../../components/AudioPlayer'
import { TrackDayList } from '../../components/TrackOfDay'
import { MainNav } from '../../components/navMenu/NavMenu'
import { useState, useEffect } from 'react'
import * as S from './PlaylistOfTheDay.styles'

export function PlayListOfDay() {
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

          <TrackDayList isLoading={isLoading} />
        </S.Main>

        <AudioPlayer isLoading={isLoading} />

        <S.Footer></S.Footer>
      </S.Container>
    </S.Wrapper>
  )
}
