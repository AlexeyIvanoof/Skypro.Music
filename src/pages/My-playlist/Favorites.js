import { MyTrackList } from '../../components/MyTrackList.js'
import { favouritesTracksSelector, favoritTrackSelector } from "../../store/selectors/track.js"
import { useSelector } from "react-redux";


export function Favorites( handleCurrentTrack, error, isLoading) {
  const favouritesTracks = useSelector(favouritesTracksSelector);
  const favoritTrack = useSelector(favoritTrackSelector)
  console.log(favoritTrack)
  
  
  return (

          <MyTrackList
            isLoading={isLoading}
            tracks={favouritesTracks}
            handleCurrentTrack={handleCurrentTrack}
            error={error}
            currentTrack = {favoritTrack}
          />
      
  )
}
