import { useState, useEffect } from "react";
import styled, {createGlobalStyle} from 'styled-components'
import { AppRoutes } from './routes'
import { AudioPlayer } from "./components/AudioPlayer";
import { GetAllTracks } from "./Api";
import { UserContext } from "./Context/UserContext";

const GlobalStyle = createGlobalStyle
`.App {
  text-align: center;
}

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}
@font-face {
  font-family: "StratosSkyeng";
  src: local("StratosSkyeng"), local("StratosSkyeng"),
    url("/public/fonts/StratosSkyeng.woff2") format("woff2"),
    url("/public/fonts/StratosSkyeng.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
  color: #ffffff;
}`


export default function App() {

  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState (null);
  const [tracksError, setTracksError] = useState(null)
  const [loading, setloading] = useState (false);

  useEffect(() => {
    async function getAllTracks (){
   try {
     setloading (true);//состояние загрузки началось
     setTracksError(null);
     await GetAllTracks().then((tracks) => {
     console.log(tracks);//проверка что получаем из апи
     setTracks(tracks);
   })//получение из апи треков
   } catch(error) {
     setTracksError(error.message)//если ошибка
   } finally{
     setloading(false)//состояние загрузки закончилось после получения данных из апи
   }
   
     }
     getAllTracks ()
   }, [])

   const [user, setUser] = useState(
    localStorage.getItem("user") || null
  );


  return (
    <div>

         {currentTrack && (
        <AudioPlayer isLoaded={isLoaded}  currentTrack={currentTrack} />
        )}
      <UserContext.Provider value={{user}}>
      <AppRoutes user={user} setUser={setUser} currentTrack={currentTrack}  tracks = {tracks} setTracks = {setTracks}  tracksError={tracksError} setCurrentTrack = {setCurrentTrack}/>
      </UserContext.Provider>
      <GlobalStyle />
    </div>
    
  )
}

