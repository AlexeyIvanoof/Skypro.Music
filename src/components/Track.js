import * as S from './Track.styles.js'
import { formatTime } from '../helpers.js'


export function Track({ isLoaded, handleCurrentTrack, tracks, duration }) {
 
return(
  <>
    {tracks.map((track) => (
      <S.ContentPlaylist key={track.id}>
      <S.PlaylistItem  >
        <S.PlaylistTrack >
          <S.TrackTitle >
            {isLoaded ? (
              <S.TrackTitleImage>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackTitleSvg>
              </S.TrackTitleImage>
            ) : (
              <S.SkeletonTitleImage> </S.SkeletonTitleImage>
            )}
  
            {isLoaded ? (
              <S.TrackTitleText>
                <S.TrackTitleLink  onClick={() => handleCurrentTrack(track) }>{track.name}
                <S.TrackTitleSpan >{track.trackTitle} </S.TrackTitleSpan >
                </S.TrackTitleLink>
              </S.TrackTitleText>
            ) : (
              <S.SkeletonTitle> </S.SkeletonTitle>
            )}
          </S.TrackTitle>
  
          {isLoaded ? (
            <S.TrackAuthor>
              <S.TrackAuthorLink>
              {track.author}
              </S.TrackAuthorLink>
            </S.TrackAuthor>
          ) : (
            <S.SkeletonAuthor></S.SkeletonAuthor>
          )}
  
          {isLoaded ? (
            <>
              <S.TrackAlbum>
                <S.TrackAlbumLink>
                {track.album}
                </S.TrackAlbumLink>
              </S.TrackAlbum>
              <S.TrackTime>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeText>{formatTime(track.duration_in_seconds)}</S.TrackTimeText>
              </S.TrackTime>
            </>
          ) : (
            <S.SkeletonAlbum></S.SkeletonAlbum>
          )}
  
  
         </S.PlaylistTrack>
         </S.PlaylistItem>
         </S.ContentPlaylist>
    )
    )}
    </>
    
  )

  }