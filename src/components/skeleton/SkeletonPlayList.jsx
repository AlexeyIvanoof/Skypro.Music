import * as S from './SkeletonPlayList.styles.js'

export  function SkeletonTrackItems() {
  return (
    < S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.SkeletTrackTitleImage></S.SkeletTrackTitleImage>
          <S.SkeletTrackText ></S.SkeletTrackText>
        </S.TrackTitle>
        <S.SkeletTrackAuthor></S.SkeletTrackAuthor>
        <S.SkeletTrackAlbum></S.SkeletTrackAlbum>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}