import { useState } from "react";
import styled, {createGlobalStyle} from 'styled-components'
import { AppRoutes } from './routes'
import { AudioPlayer } from "./components/AudioPlayer";

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

  const [user] = useState(null);

  const [currentTrack] = useState(null);

  return (
    <div>

{currentTrack && (
        <AudioPlayer isLoaded={isLoaded}  currentTrack={currentTrack} />
        )}

      <AppRoutes user={user} currentTrack={currentTrack}/>
      <GlobalStyle />
    </div>
    
  )
}

