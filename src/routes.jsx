import { Routes, Route } from "react-router-dom";
import { Index } from "./components/topIndex/TopIndex"
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { NotFound } from "./pages/not-found/Not-found";
import { MyPlayList } from "./pages/My-playlist/MyPlayList";
import { ProtectedRoute } from "./components/protected-route";
import { useState } from "react";
import { Category } from "./pages/category/Category";

export const AppRoutes = ({ tracks, tracksError, currentTrack, setCurrentTrack }) => {

  const [user, setUser] = useState(null);

  const handleLogin = () => {
    
    localStorage.setItem('user', 'true')

    setUser({ login: "taradam" });
  }
  const handleLogout = () => {
    
    setUser(null);
  }
    return (
      <Routes>
        <Route path="/Auth" element={<AuthPage user={user} setUser={setUser}
          onAuthButtonClick={user ? handleLogout : handleLogin}/>} />

       <Route element={<ProtectedRoute isAllowed={Boolean(user)}/>}>
        <Route path="/index" element={<Index setUser = {setUser}  tracks = {tracks} tracksError={tracksError} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}></Index>} />
        
        <Route path="/myplaylist" element={<MyPlayList tracks = {tracks} tracksError={tracksError} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}></MyPlayList>} />
        <Route path="/category/:id" element={<Category tracks = {tracks} tracksError={tracksError} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}></Category>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };