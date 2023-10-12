import { Track } from "../Track"
import { SkeletonTrackItems } from "../skeleton/SkeletonPlayList"
import * as S from './Content.styles.js'

export function Content({ isLoaded }) {
    return (
        <S.ContentPlaylist>
       
       {isLoaded ? < Track />: <SkeletonTrackItems />}
       {isLoaded ? < Track />: <SkeletonTrackItems />}
       {isLoaded ? < Track />: <SkeletonTrackItems />}
       {isLoaded ? < Track />: <SkeletonTrackItems />}
       {isLoaded ? < Track />: <SkeletonTrackItems />}
       {isLoaded ? < Track />: <SkeletonTrackItems />}
       {isLoaded ? < Track />: <SkeletonTrackItems />}
       {isLoaded ? < Track />: <SkeletonTrackItems />}
       {isLoaded ? < Track />: <SkeletonTrackItems />}
       {isLoaded ? < Track />: <SkeletonTrackItems />}
       {isLoaded ? < Track />: <SkeletonTrackItems />}
       {isLoaded ? < Track />: <SkeletonTrackItems />}
       {isLoaded ? < Track />: <SkeletonTrackItems />}
       {isLoaded ? < Track />: <SkeletonTrackItems />}
       {isLoaded ? < Track />: <SkeletonTrackItems />}
       {isLoaded ? < Track />: <SkeletonTrackItems />}
       {isLoaded ? < Track />: <SkeletonTrackItems />}

      </S.ContentPlaylist>
    )
};