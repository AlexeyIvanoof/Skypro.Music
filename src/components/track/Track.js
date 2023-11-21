import * as S from './Track.styles.js'
import { formatTime } from '../../helpers.js'
import { useSelector } from 'react-redux'
import { isPlayingSelector } from '../../store/selectors/track.js'
import { CurrentTrackSelector, favoritTrackSelector } from '../../store/selectors/track.js'
import { useEffect, useState } from 'react'
import { AudioPlayerIcons } from '../audioPlayer/AudioPlayerIcons/AudioPlayerIcons.jsx'
import {
  useSetLikeMutation,
  useSetDislikeMutation,
} from '../../serviseQuery/tracks.jsx'
import React from 'react'

export function Track({
  isLoading,
  track,
  isFavorites = false,
}) {
  const favoritTrack = useSelector(favoritTrackSelector)
  const currentTrack = useSelector(CurrentTrackSelector)
  const isPlaying = useSelector(isPlayingSelector)

  const [setLike] = useSetLikeMutation()
  const [setDislike] = useSetDislikeMutation()
  const auth = JSON.parse(localStorage.getItem('user'))
  const isUserLike = Boolean(
    track?.stared_user?.find((user) => user.id === auth.id),
  )
  const [isLiked, setIsLiked] = useState(isUserLike)

  useEffect(() => {
    if (isFavorites) {
      setIsLiked(isFavorites)
    } else {
      setIsLiked(isUserLike)
    }
  }, [isUserLike, isFavorites])

  const handleLike = async (id) => {
    setIsLiked(true)
    await setLike({ id }).unwrap()
  }

  const handleDislike = async (id) => {
    setIsLiked(false)
    await setDislike({ id }).unwrap()
  }

  const toggleLikeDislike = (id) =>
    isLiked ? handleDislike(id) : handleLike(id)

  return (
    <>
            <S.PlaylistItem>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  {!isLoading ? (
                    <S.TrackTitleImage>
                      {(currentTrack && currentTrack.id === track.id) || (favoritTrack && favoritTrack.id === track.id) ? (
                        <S.PointPlaying $playing={isPlaying} />
                      ) : (
                        <S.TrackTitleSvg alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </S.TrackTitleSvg>
                      )}
                    </S.TrackTitleImage>
                  ) : (
                    <S.SkeletonTitleImage> </S.SkeletonTitleImage>
                  )}

                  {!isLoading ? (
                    <S.TrackTitleText>
                      <S.TrackTitleLink > 
                        {track.name}
                        <S.TrackTitleSpan>{track.trackTitle} </S.TrackTitleSpan>
                      </S.TrackTitleLink>
                    </S.TrackTitleText>
                  ) : (
                    <S.SkeletonTitle> </S.SkeletonTitle>
                  )}
                </S.TrackTitle>

                {!isLoading ? (
                  <S.TrackAuthor>
                    <S.TrackAuthorLink>{track.author}</S.TrackAuthorLink>
                  </S.TrackAuthor>
                ) : (
                  <S.SkeletonAuthor></S.SkeletonAuthor>
                )}

                {!isLoading ? (
                  <>
                    <S.TrackAlbum>
                      <S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
                    </S.TrackAlbum>
                    <S.TrackTime>
                      <AudioPlayerIcons
                        alt="like"
                        click={() => {
                          toggleLikeDislike(track?.id)
                        }}
                        isActive={isLiked}
                      />

                      <S.TrackTimeText>
                        {formatTime(track.duration_in_seconds)}
                      </S.TrackTimeText>
                    </S.TrackTime>
                  </>
                ) : (
                  <S.SkeletonAlbum></S.SkeletonAlbum>
                )}
              </S.PlaylistTrack>
            </S.PlaylistItem>
      
    </>
  )
}
