import * as S from './Track.styles.js'
import { formatTime } from '../helpers.js'
import {useSelector } from "react-redux";
import { isPlayingSelector} from "../store/selectors/track.js";
import {CurrentTrackSelector} from "../store/selectors/track.js";

export function Track({ isLoaded, handleCurrentTrack, tracks, duration }) {
  const currentTrack = useSelector (CurrentTrackSelector);
  const isPlaying = useSelector (isPlayingSelector);
 
return(
  <>
    {tracks.map((track) => (
      <S.ContentPlaylist key={track.id}>
      <S.PlaylistItem  onClick={() => handleCurrentTrack(track)} >
        <S.PlaylistTrack >
          <S.TrackTitle >
            {isLoaded ? (
              <S.TrackTitleImage>
                  {currentTrack && currentTrack.id === track.id ? (
              <S.PointPlaying $playing={isPlaying} />
            ) : (
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
            )}
              </S.TrackTitleImage>
            ) : (
              <S.SkeletonTitleImage> </S.SkeletonTitleImage>
            )}
  
            {isLoaded ? (
              <S.TrackTitleText>
                <S.TrackTitleLink >{track.name}
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