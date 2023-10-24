import { Track } from "../Track"
import * as S from './Content.styles.js'

export function Content({ isLoaded,  handleCurrentTrack, loadingTracksError,  tracks}) {
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
               />

               )}

      </S.ContentPlaylist>
    )
};