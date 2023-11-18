import * as S from './TrackList.styles.js'
import { Track } from '../track/Track.js'
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {   shuffleSelector,
  currentPlaylistSelector,
  shuffleAllTracksSelector,
  currentPageSelector,
  allTracksSelector,
  favouritesTracksSelector,
  } from "../../store/selectors/track";

  import {   setCurrentTrack,
    setCurrentPlaylist,
    toggleShuffleTrack,} from "../../store/slices/track.js";


export function TrackList({
  isLoaded,
  tracks,
  isFavorites,
  loadingTracksError
}) {

  const dispatch = useDispatch();
    const shuffle = useSelector(shuffleSelector);
    const allTracks = useSelector(allTracksSelector);
    const favouritesTracks = useSelector(favouritesTracksSelector);
    const currentPlaylist = useSelector(currentPlaylistSelector);
    const shuffleAllTracks = useSelector(shuffleAllTracksSelector);
    const currentPage = useSelector(currentPageSelector);
    const arrayTracksAll = shuffle ? shuffleAllTracks : currentPlaylist;
  
    const handleCurrentTrack = (track) => {
   
      if (currentPage === "Index") {
        dispatch(setCurrentPlaylist(allTracks));
      }
      if (currentPage === "Favorites") {
        dispatch(setCurrentPlaylist(favouritesTracks));
      }
    
  
      if (shuffle) {
        dispatch(toggleShuffleTrack({ shuffle }));
      }
  
      const indexCurrentTrack = arrayTracksAll.indexOf(track);
      dispatch(setCurrentTrack({ track, indexCurrentTrack }));
      console.log(track);
    };
  

  return (
   <>
     
      <S.CenterblockContent>
          {loadingTracksError ? (
            <div>Не удалось загрузить плейлист, попробуйте позже</div>
          ) : (
            <S.ContentPlaylist>
              {isLoaded &&
                new Array(20)
                  .fill()
                  .map(() => (
                    <Track key={Math.random()} isLoaded={isLoaded} />
                  ))}
              {tracks &&
                tracks.map((track) => (
                  <S.PlaylistItem
                    key={track.id}
                    onClick={() => handleCurrentTrack(track)}
                  >
                    <Track
                      key={track.id}
                      onClick={() => handleCurrentTrack(track)}
                      isLoaded={isLoaded}
                      track={track}
                      tracks={tracks}
                      isFavorites={isFavorites}
                    />
                  </S.PlaylistItem>
                ))}
            </S.ContentPlaylist>
          )}
      </S.CenterblockContent>
    </>
  )
}
