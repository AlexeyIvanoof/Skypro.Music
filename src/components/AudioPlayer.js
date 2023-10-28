import TrackPlayNow from "./TrackPlay.jsx";
import SkeletonTrackPlayNow from "./skeleton/SkeletonAudioPlayer.jsx";
import * as S from './AudioPlayer.styles.js'
import { useRef, useState, useEffect } from "react";
import ProgressBar from "../ProgressBar.jsx";


export function AudioPlayer({isLoaded, currentTrack}) {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [isLoop, setIsLoop] = useState(false);
  const [duration, setDuration] = useState(false);//duration`представляет собой общую продолжительность аудиофайла.
  const [currentTime, setCurrentTime] = useState(0);//currentTime состояния хранит текущее время воспроизведения звука

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleLoop = () => {
    audioRef.current.loop = true;
    setIsLoop(true);

  }

  const handleLoopStop = () => {
    audioRef.current.loop = false;
    setIsLoop(false);
  }

  const notСonfigured = () => {
    alert ('Функция не доступна')
  }

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const onTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const togglePlay = isPlaying ? handleStop : handleStart;
  const toggleLoop = isLoop ? handleLoopStop : handleLoop ;

  const [volume, setVolume] = useState(25);
  
// Взято из стороннего дз 
  useEffect(() => {
     if (currentTrack) {
       audioRef.current.addEventListener('loadeddata', () => {
       handleStart();
       })
       audioRef.current.src = currentTrack.track_file;    
     }
   }, [currentTrack]);//проигрывание сразу после клика на выбранный трек
 
   useEffect(() => {
     if (audioRef) {
       audioRef.current.volume = volume / 100;
     }
   }, [volume, audioRef]);//настройка ползунка громкости  
   
  
  useEffect(() => {
    if (currentTrack.duration_in_seconds){
      setDuration(audioRef.current.duration)
  }})



    return (
       <S.Bar>
        {currentTrack ? (<audio   style={{ display: 'none' }} ref={audioRef}   controls src={currentTrack.track_file}  onLoadedMetadata ={onLoadedMetadata} onTimeUpdate  ={onTimeUpdate } ></audio>) : (null)}   
        <S.BarContent>
        <ProgressBar   duration = {duration} currentTime = {currentTime}   ></ProgressBar>
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.PlayerControls>

                <S.PlayerBtnPrev>
                  <S.PlayerBtnPrevSvg alt="prev" onClick={notСonfigured }>
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>

                <S.PlayerBtnPlay  onClick={togglePlay}>
                  <S.PlayerBtnPlaySvg alt="play"> 
                  {isPlaying ? (<use xlinkHref="img/icon/sprite.svg#icon-stop"></use>) : (<use xlinkHref="img/icon/sprite.svg#icon-play"></use>)}  
                  </S.PlayerBtnPlaySvg>
                </S.PlayerBtnPlay>

                <S.PlayerBtnNext>
                  <S.PlayerBtnNextSvg alt="next" onClick={notСonfigured }>
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>

                {isLoop ? ( <S.PlayerBtnRepeat className="_btn-icon" onClick={toggleLoop}>
                    <S.PlayerBtnRepeatSvgActive alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerBtnRepeatSvgActive>
                  </S.PlayerBtnRepeat>) : (  <S.PlayerBtnRepeat className="_btn-icon" onClick={toggleLoop}>
                    <S.PlayerBtnRepeatSvg alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerBtnRepeatSvg>
                  </S.PlayerBtnRepeat>)}

                <S.PlayerBtnShuffle>
                  <S.PlayerBtnShuffleSvg alt="shuffle" onClick={notСonfigured }>
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                  </S.PlayerBtnShuffleSvg>
                </S.PlayerBtnShuffle>
              </S.PlayerControls>
    
              <S.PlayerTrackPlay>
              {isLoaded?(<TrackPlayNow  currentTrack={ currentTrack}/>):( <SkeletonTrackPlayNow/>)}
    
                <S.TrackPlayLikeDis>
                  <S.TrackPlayLike>
                    <S.TrackPlayLikeSvg alt="like" onClick={notСonfigured }>
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayLike>
                  <S.TrackPlayDislike>
                    <S.TrackPlayDislikeSvg alt="dislike" onClick={notСonfigured }>
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                    </S.TrackPlayDislikeSvg>
                  </S.TrackPlayDislike>
                </S.TrackPlayLikeDis>
              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <S.BarVolumeBlock>
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                  </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgressBtn>

                  <S.VolumeProgressLine
                    className=" _btn"
                    type="range"
                    name="range"
                    min={0}
                    max={100}
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}/>
                  
                </S.VolumeProgressBtn>
              </S.VolumeContent>
            </S.BarVolumeBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
      
       )
};