import{ styled } from 'styled-components'

export const TrackPlayContain  = styled.div` width: auto;
display: -ms-grid;
display: grid;
-ms-grid-columns: auto 1fr;
grid-template-columns: auto 1fr;
grid-template-areas: "image author" "image album";
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;`

export const SkeletonPlayImage = styled.div`
 background-color: #313131;
animation: blink 1s infinite alternate;
width: 51px;
height: 51px;
margin-right: 12px;
grid-area: image;`

export const SkeletonPlayAuthor  = styled.div`
background-color: #313131;
  animation: blink 1s infinite alternate;
  width: 59px;
  height: 15px;`

  export const SkeletonPlayAlbum  = styled.div`
  background-color: #313131;
  animation: blink 1s infinite alternate;
  width: 59px;
  height: 15px;`
