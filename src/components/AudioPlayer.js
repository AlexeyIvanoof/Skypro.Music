import React from "react";
import *as S  from "./AudioPlayer.styles.js";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PlayerTrackPlay } from "./PlayerTrackPlay/PlayerTrackPlay.jsx";
import { BarPlayerProgress } from "./BarPlayerProgress/BarPlayerProgress.jsx";
import { AudioPlayerIcons } from "./AudioPlayerIcons/AudioPlayerIcons.jsx";
import { VolumeBlock } from "./VolumeBlock/VolumeBlock.jsx";
import{setIsPlaying, setNextTrack,  setPrevTrack, toggleShuffleTrack} from "../store/slices/track.js"
import {
  isPlayingSelector, 
  allTracksSelector, 
  indexCurrentTrackSelector,
  shuffleAllTracksSelector,
  shuffleSelector} from "../store/selectors/track.js"
 

   function AudioPlayer ({currentTrack}) {
   
    const tracks = useSelector(allTracksSelector);
    const dispatch = useDispatch();
    const isPlaying = useSelector (isPlayingSelector);
    const shuffle = useSelector(shuffleSelector);
    const shuffleAllTracks = useSelector (shuffleAllTracksSelector);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);
    const indexCurrentTrack = useSelector(indexCurrentTrackSelector);
   
    const handleStart = () => {
      audioRef.current.play();
      dispatch(setIsPlaying(true));
    };
    const handleStop = () => {
      audioRef.current.pause();
      dispatch(setIsPlaying(false));
    };
    const togglePlay = isPlaying ? handleStop : handleStart;
    const arrayTracksAll = shuffle ? shuffleAllTracks : tracks;
    
    useEffect(() => {
      handleStart();
      audioRef.current.onended = () => {
  if (indexCurrentTrack < arrayTracksAll.length-1) {
        dispatch (setNextTrack({
          nextTrack:arrayTracksAll[arrayTracksAll.indexOf(currentTrack)+1],
          indexNextTrack: arrayTracksAll.indexOf(currentTrack)+1,
    })
        )
  }
  dispatch (setIsPlaying(false));
   };
  },
   [currentTrack]);
  
    const onLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
    };
    const onTimeUpdate = () => {
      setTimeProgress(audioRef.current.currentTime);
    };
  
    const [repeatTrack, setRepeatTrack] = useState(false);
  
    const toggleTrackRepeat = () => {
      audioRef.current.loop = !repeatTrack;
      setRepeatTrack(!repeatTrack);
    };
  
    const toggleCurrentTrack =(alt) => {
      if (alt === "next" && indexCurrentTrack < arrayTracksAll.length -1) {
        const indexNextTrack = arrayTracksAll.indexOf(currentTrack) +1;
        return dispatch (setNextTrack({
          nextTrack:arrayTracksAll[ indexNextTrack ], indexNextTrack,
        })
        )
      }
      if(alt === "prev" && indexCurrentTrack > 0 ) {
        const indexPrevTrack =arrayTracksAll.indexOf(currentTrack)-1;
        return dispatch (setPrevTrack({
          prevTrack:
          arrayTracksAll[ indexPrevTrack ], indexPrevTrack,
        })
        );
      }
    };
    
      return (
          <S.Bar>
              <audio
          src={currentTrack.track_file}
          ref={audioRef}
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={onLoadedMetadata}
        />
            
         <S.BarContent> 
          <BarPlayerProgress
            duration={duration}
            timeProgress={timeProgress}
            audioRef={audioRef}
          />
           <S.BarPlayerBlock>
            <S.BarPlayerPlayer>
            <S.PlayerControls>
            <AudioPlayerIcons
                  alt="prev"
                  click={() => {
                    toggleCurrentTrack ("prev")
                  }}
                />
                <AudioPlayerIcons
                  alt={isPlaying ? "stop" : "play"}
                  click={togglePlay}
                />
                <AudioPlayerIcons
                  alt="next"
                  click={() => {
                    toggleCurrentTrack ("next")
                  }}
                />
                <AudioPlayerIcons alt="repeat" click={toggleTrackRepeat}  />
                <AudioPlayerIcons
                  alt="shuffle"
                  click={() => {
                    dispatch(toggleShuffleTrack(!shuffle))
                  }}
                />
           </S.PlayerControls>
              <PlayerTrackPlay   currentTrack={currentTrack} />
                </S.BarPlayerPlayer>
              <VolumeBlock  audioRef={audioRef}  />
              </S.BarPlayerBlock>
            </S.BarContent>
        </S.Bar>
      )
  }
  
  export default AudioPlayer;