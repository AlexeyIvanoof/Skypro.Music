import { Track } from "../Track"
import * as S from './Content.styles.js'

export function Content({ isLoaded,  handleCurrentTrack, loadingTracksError,  tracks,  currentTrack, setCurrentTrack}) {
    return (
        <S.ContentPlaylist>
    
    {loadingTracksError ? (
          <div>Не удалось загрузить плейлист, попробуйте позже</div>
        ) : (

              <Track 
              isLoaded={isLoaded}
              tracks={tracks}
              handleCurrentTrack={handleCurrentTrack}
              loadingTracksError={loadingTracksError}
              setCurrentTrack = {setCurrentTrack} 
              currentTrack={currentTrack}
               />

               )}

      </S.ContentPlaylist>
    )
};