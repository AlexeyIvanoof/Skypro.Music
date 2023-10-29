import * as S from './TrackPlay.styles.js'

export default function TrackPlayNow({currentTrack}) {
    return (
        <S.TrackPlayContain>
          <S.TrackPlayImage>
            <S.TrackPlaySvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackPlaySvg>
          </S.TrackPlayImage>
          <S.TrackPlayAuthor>
        <S.TrackPlayAuthorLink href="http://">
        {currentTrack ? (currentTrack.name) : (null)}
        </S.TrackPlayAuthorLink>
      </S.TrackPlayAuthor>
      <S.TrackPlayAlbum>
        <S.TrackPlayAlbumLink href="http://">
        {currentTrack ? (currentTrack.author) : (null)}
        </S.TrackPlayAlbumLink>
      </S.TrackPlayAlbum>
    </S.TrackPlayContain>
  );
}