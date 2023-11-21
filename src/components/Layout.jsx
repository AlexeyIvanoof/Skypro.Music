import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import * as S from "../components/topIndex/TopIndex.styles";
import { CurrentTrackSelector } from "../store/selectors/track";
import  {MainNav}  from "./navMenu/NavMenu";
import { Sidebar } from "./sidebar/Sidebar";
import AudioPlayer from "./audioPlayer/AudioPlayer"


const Layout = ({ loading, loadingTracksError }) => {
  const currentTrack = useSelector(CurrentTrackSelector);
  
  return (
    <>
      <S.Wrapper>
      <S.Container>
        <S.Main>
          <MainNav />
             <S.MainCenterblock>

                 <Outlet />
              
              </S.MainCenterblock>
                 <Sidebar
            loading = {loading}
            loadingTracksError={loadingTracksError}
                />
        </S.Main>

        {currentTrack && (
          <AudioPlayer loading = {loading} currentTrack={currentTrack} />
        )}

        <S.Footer></S.Footer>
      </S.Container>
    </S.Wrapper>
</>
  );
};
export { Layout };