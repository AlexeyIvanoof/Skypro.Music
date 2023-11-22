import React from "react";
import *as S  from "./PlayerTrackPlayStyle";
import { AudioPlayerIcons } from "../audioPlayer/AudioPlayerIcons/AudioPlayerIcons.jsx";
import {
  useSetLikeMutation,
  useSetDislikeMutation,
} from "../../serviseQuery/tracks.jsx";
import { useState, useEffect } from 'react'

export function PlayerTrackPlay ({currentTrack}) {

  const [setLike] = useSetLikeMutation();
  const [setDislike] = useSetDislikeMutation();
  const auth = JSON.parse(localStorage.getItem("user"));
  const isUserLike = Boolean(
    currentTrack?.stared_user?.find((user) => user.id === auth.id)
  );
  console.log(auth.id);
  const [isLiked, setIsLiked] = useState(isUserLike);
  useEffect(() => {
    if (currentTrack?.stared_user) {
      setIsLiked(isUserLike);
    } else {
      setIsLiked(true);
    }
  }, [isUserLike, currentTrack?.stared_user]);
  const handleLike = async (id) => {
    setIsLiked(true);
    await setLike({ id }).unwrap();
  };
  const handleDislike = async (id) => {
    setIsLiked(false);
    await setDislike({ id }).unwrap();
  };
  const toggleLikeDislike = (id) =>
    isLiked ? handleDislike(id) : handleLike(id);


    return (
        <S.PlayerTrackPlay>
        <S.TrackPlayContain>
        <S.TrackPlayImage>
           <S.TrackPlaySvg>
              <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
              </S.TrackPlaySvg>
            </S.TrackPlayImage>
          <S.TrackPlayAuthor>
            <S.TrackPlayAuthorLink href="http://">
            {currentTrack.name}
            </S.TrackPlayAuthorLink>
            </S.TrackPlayAuthor>
          <S.TrackPlayAlbum>
            <S.TrackPlayLink href="http://">
            {currentTrack.author}
            </S.TrackPlayLink>
            </S.TrackPlayAlbum>   
       </S.TrackPlayContain>
        <S.TrackPlayLikeDis>
         <S.TrackPlayLike>
         <AudioPlayerIcons
                    alt="like"
                    click={() => {
                      toggleLikeDislike(currentTrack?.id);
                    }}
                    isActive={isLiked}
                  />
            </S.TrackPlayLike>
          <S.TrackPlayDislike>
            <S.TrackPlayDislikeSvg>
             
              </S.TrackPlayDislikeSvg>
            </S.TrackPlayDislike>
          </S.TrackPlayLikeDis>
        </S.PlayerTrackPlay>  
    )
}