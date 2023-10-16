/*/скелет для аудио плеера/*/
import * as S from './SkeletonAudioPlayer.styles.js'


export default function SkeletonTrackPlayNow() {
    return (
      <S.TrackPlayContain>
        <S.SkeletonPlayImage></S.SkeletonPlayImage>
        <S.SkeletonPlayAuthor ></S.SkeletonPlayAuthor>
        <S.SkeletonPlayAlbum></S.SkeletonPlayAlbum>
      </S.TrackPlayContain>
    );
  }