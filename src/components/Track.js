import * as S from './Track.styles.js'
import { trackArr } from './utilits/trackArr.js'


export function Track({ isLoaded, handleCurrentTrack}) {
  const fullPlayList = trackArr.map((track) => (
    <S.PlaylistItem key={track.id} >
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
              <S.TrackTitleLink  onClick={() => handleCurrentTrack(track) }>
              <S.TrackTitleSpan >{track.trackTitleLink.title} </S.TrackTitleSpan >
              </S.TrackTitleLink>
            </S.TrackTitleText>
          ) : (
            <S.SkeletonTitle> </S.SkeletonTitle>
          )}
        </S.TrackTitle>

        {isLoaded ? (
          <S.TrackAuthor>
            <S.TrackAuthorLink>
              {track.trackAuthorLink}
            </S.TrackAuthorLink>
          </S.TrackAuthor>
        ) : (
          <S.SkeletonAuthor> </S.SkeletonAuthor>
        )}

        {isLoaded ? (
          <>
            <S.TrackAlbum>
              <S.TrackAlbumLink>
                {track.trackAlbumLink}
              </S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>{track.trackTimeText}</S.TrackTimeText>
            </S.TrackTime>
          </>
        ) : (
          <S.SkeletonAlbum> </S.SkeletonAlbum>
        )}
      </S.PlaylistTrack>
    </S.PlaylistItem>
  ))
  return <S.ContentPlaylist>{fullPlayList}</S.ContentPlaylist>
}
