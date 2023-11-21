import AudioPlayer from '../../components/audioPlayer/AudioPlayer.js'
import { MyTrackList } from '../../components/MyTrackList.js'
import { MainNav } from '../../components/navMenu/NavMenu.jsx'
import { useState, useEffect } from 'react'
import * as S from './MyPlayList.styles.js'
import { favouritesTracksSelector, favoritTrackSelector } from "../../store/selectors/track.js"
import { useSelector } from "react-redux";


export function Favorites( handleCurrentTrack, error) {
  const favouritesTracks = useSelector(favouritesTracksSelector);
  const [isLoading, setisLoading] = useState(true)
  const favoritTrack = useSelector(favoritTrackSelector)
  console.log(favoritTrack)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  },[])
  return (

          <MyTrackList
            isLoading={isLoading}
            tracks={favouritesTracks}
            handleCurrentTrack={handleCurrentTrack}
            error={error}
          />
      
  )
}
