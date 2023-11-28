import { MyTrackList } from '../../components/MyTrackList.js'
import { favouritesTracksSelector } from "../../store/selectors/track.js"
import { useSelector } from "react-redux";


export function Favorites( error, isLoading) {
  
  const favouritesTracks = useSelector(favouritesTracksSelector);
  
  return (

          <MyTrackList
            isLoading={isLoading}
            tracks={favouritesTracks}
            error={error}
           
          />
      
  )
}
