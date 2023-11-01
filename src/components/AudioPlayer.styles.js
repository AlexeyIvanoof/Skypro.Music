import{ styled } from 'styled-components'


export const Bar = styled.div
` position: absolute;
bottom: 0;
left: 0;
width: 100%;
background: rgba(28, 28, 28, 0.5);`

export const BarContent = styled.div
`display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;`

export const BarPlayerProgress = styled.div
`width: 100%;
height: 5px;
background: #2e2e2e;`

export const BarPlayerBlock = styled.div
` height: 73px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;`

export const BarPlayer = styled.div
`display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;`

export const PlayerControls = styled.div
`display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
padding: 0 27px 0 31px;`

export const PlayerBtnPrev = styled.div
`padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
margin-right: 23px;
cursor: pointer;`

export const PlayerBtnPrevSvg = styled.svg
`width: 15px;
height: 14px;
&:active{
  fill: transparent;
  stroke: #ffffff;
  cursor: pointer;
}`

export const PlayerBtnPlay = styled.div
`padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
margin-right: 23px;
cursor: pointer;`

export const PlayerBtnPlaySvg = styled.svg
`width: 22px;
height: 20px;
fill: #d9d9d9;
&:active{
  fill: transparent;
  stroke: #ffffff;
  cursor: pointer;
}`

export const PlayerBtnPause = styled.svg`
fill: #D9D9D9;
width: 15px;
stroke: #696969;
height: 19px;
`

export const PlayerBtnNext = styled.div
` margin-right: 28px;
fill: #a53939;
padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;`

  export const PlayerBtnNextSvg = styled.svg
  `width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
  &:active{
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }`

  export const PlayerBtnRepeat = styled.div
  `padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 24px;
  cursor: pointer;`

  export const PlayerBtnRepeatSvg = styled.svg
  `width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
 `

  export const PlayerBtnRepeatSvgActive = styled(PlayerBtnRepeatSvg)`
  fill: #696969;
  stroke: #ffffff;
  cursor: pointer;
`

  export const PlayerBtnShuffle = styled.div
  `display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;`

  export const PlayerBtnShuffleSvg = styled.svg
  `width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
  cursor: pointer;
  &:active{
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }`

  export const PlayerTrackPlay = styled.div
  `display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;`

  export const TrackPlayLikeDis = styled.div
  `display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 26%;`

  export const TrackPlayLike = styled.div
  ` padding: 5px;
  cursor: pointer;`

  export const TrackPlayLikeSvg = styled.svg
  ` width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
  &:active{
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }`

  export const TrackPlayDislike = styled.div
  ` margin-left: 28.5px;
  padding: 5px;
  cursor: pointer;`

  export const TrackPlayDislikeSvg = styled.svg
  ` width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
  &:active{
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }`

  export const BarVolumeBlock = styled.div
  ` width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;`

  export const VolumeContent = styled.div
  ` display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;`

  export const VolumeImage = styled.div
  ` width: 13px;
  height: 18px;
  margin-right: 17px;`

  export const VolumeSvg = styled.svg
  `width: 13px;
  height: 18px;
  fill: transparent;
  cursor: pointer;
  `
  
  export const VolumeProgressBtn = styled.div
  `width: 109px;`

  export const VolumeProgressLine = styled.input
  `width: 109px;
  cursor: pointer;`
