import { Track} from "./Track"
import { SkeletonTrackItems } from "./skeleton/SkeletonPlayList"

export function Content({ isLoaded }) {
    return (
        <div className="content__playlist playlist">
       
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

      </div>
    )
};