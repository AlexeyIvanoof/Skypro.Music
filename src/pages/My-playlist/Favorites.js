import AudioPlayer from '../../components/audioPlayer/AudioPlayer.js'
import { MyTrackList } from '../../components/MyTrackList.js'
import { MainNav } from '../../components/navMenu/NavMenu.jsx'
import { useState, useEffect } from 'react'
import * as S from './MyPlayList.styles.js'
import { CurrentTrackSelector, favouritesTracksSelector } from "../../store/selectors/track.js"
import { useSelector } from "react-redux";


export function Favorites( handleCurrentTrack, error) {
  const favouritesTracks = useSelector(favouritesTracksSelector);
  const [isLoading, setIsLoading] = useState(false)
  const currentTrack = useSelector(CurrentTrackSelector)
  

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        setIsLoading(true)
      }, 2000)

      return () => clearTimeout(timeout)
    }
  }, [isLoading])
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <MainNav />

          <MyTrackList
            isLoading={isLoading}
            tracks={favouritesTracks}
            handleCurrentTrack={handleCurrentTrack}
            error={error}
          />
        </S.Main>

        {currentTrack && (
          <AudioPlayer isLoading={isLoading} currentTrack={currentTrack} />
        )}

        <S.Footer></S.Footer>
      </S.Container>
    </S.Wrapper>
  )
}
