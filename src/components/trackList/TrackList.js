import * as S from './TrackList.styles.js'
import { Track } from '../track/Track.js'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  shuffleSelector,
  currentPlaylistSelector,
  shuffleAllTracksSelector,
  currentPageSelector,
  allTracksSelector,
  favouritesTracksSelector,
  filtersPlaylistSelector,
  categoryArrSelector
} from '../../store/selectors/track'

import {
  setCurrentTrack,
  setCurrentPlaylist,
  toggleShuffleTrack,
} from '../../store/slices/track.js'

export function TrackList({
  isLoading,
  tracks,
  loadingTracksError,
})
 {
  const dispatch = useDispatch()
  const shuffle = useSelector(shuffleSelector)
  const allTracks = useSelector(allTracksSelector)
  const favouritesTracks = useSelector(favouritesTracksSelector)
  const currentPlaylist = useSelector(currentPlaylistSelector)
  const shuffleAllTracks = useSelector(shuffleAllTracksSelector)
  const currentPage = useSelector(currentPageSelector)
  const arrayTracksAll = shuffle ? shuffleAllTracks : currentPlaylist
  const filtersPlaylist = useSelector(filtersPlaylistSelector);
  const categoryArr = useSelector(categoryArrSelector);

  const handleCurrentTrack = (track) => {
    if (!filtersPlaylist.isActiveSort && !filtersPlaylist?.isActiveAuthors) {
 
    if (currentPage === "Index") {
      dispatch(setCurrentPlaylist(allTracks));
      console.log(allTracks)
    }
    if (currentPage === "Favorites") {
      dispatch(setCurrentPlaylist(favouritesTracks));
      console.log(favouritesTracks)
    }
    if (currentPage === "Category") {
      dispatch(setCurrentPlaylist(categoryArr));
      console.log(categoryArr)
    }
  } else {
    dispatch(setCurrentPlaylist(filtersPlaylist.filterTracksArr));
  }

    if (shuffle) {
      dispatch(toggleShuffleTrack({ shuffle }));
    }

    const indexCurrentTrack = arrayTracksAll.indexOf(track);
    dispatch(setCurrentTrack({ track, indexCurrentTrack }));
  };

  return (
    <>
      <S.CenterblockContent>
     
        {loadingTracksError ? (
          <div>Не удалось загрузить плейлист, попробуйте позже</div>
        ) : (
          <S.ContentPlaylist>
            {isLoading &&
              new Array(20)
                .fill()
                .map(() => <Track key={Math.random()} isLoading={isLoading} />)}
            {tracks &&
              tracks.map((track) => (
                <S.PlaylistItem
                  key={track.id}
                  onClick={() => handleCurrentTrack(track)}
                >
                  <Track
                    key={track.id}
                    onClick={() => handleCurrentTrack(track)}
                    isLoading={isLoading}
                    track={track}
                    tracks={tracks}
                    
                  />
                </S.PlaylistItem>
              ))}
          </S.ContentPlaylist>
        )}
      </S.CenterblockContent>
    </>
  )
}
