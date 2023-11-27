import{ styled } from 'styled-components'

export const ContentBlock = styled.ul
`padding: 18px 0 10px 0;
`

export const MainCenterblock = styled.div
`width: auto;
-webkit-box-flex: 3;
-ms-flex-positive: 3;
flex-grow: 3;
padding: 20px 40px 20px 111px;`


export const ContentTitlePlaylist = styled.div
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
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
margin-bottom: 24px;`


export const CenterblockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const ContentPlaylist = styled.ul`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
overflow-y: auto;
height: 1500px;
&::-webkit-scrollbar-track {
  background-color: white;
  border-radius: 2px;
}
&::-webkit-scrollbar-thumb {
  box-shadow: inset 1px 1px 10px #f3faf7;
  background-color: #909090;
  height: 10px;
}
&::-webkit-scrollbar-thumb:active {
  background-color: #4b4949;
}
&::-webkit-scrollbar-button:vertical:start:decrement {
  background-color: #909090;
}
`;


export const PlaylistItem = styled.li`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;