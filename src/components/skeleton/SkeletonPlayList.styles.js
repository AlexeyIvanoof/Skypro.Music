import{ styled } from 'styled-components'

export const PlaylistItem = styled.div`
width: 100%;
display: block;
margin-bottom: 12px;`

export const PlaylistTrack  = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;`

export const TrackTitle  = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
width: 447px;`

export const SkeletTrackTitleImage  = styled.div`
width: 51px;
height: 51px;
margin-right: 17px;
background-color: #313131;
animation: blink 1s infinite alternate;`

export const SkeletTrackText  = styled.div`
width: 356px;
height: 19px;
background-color: #313131;
animation: blink 1s infinite alternate;`
    
export const SkeletTrackAuthor  = styled.div`
width: 271px;
height: 19px;
background-color: #313131;
animation: blink 1s infinite alternate;` 

export const SkeletTrackAlbum  = styled.div`
width: 305px;
height: 19px;
background-color: #313131;
animation: blink 1s infinite alternate;`   
