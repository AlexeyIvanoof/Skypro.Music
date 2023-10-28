import { Routes, Route } from "react-router-dom";
import { Signin } from "./pages/Signin/Signin"
import { Index } from './components/TopIndex'
import { Signup } from "./pages/Signup/Signup";
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
        <Route path="/" element={<Signin user={user}
          onAuthButtonClick={user ? handleLogout : handleLogin}/>} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/index" element={<Index tracks = {tracks} tracksError={tracksError} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}></Index>} />
        <Route path="/myplaylist" element={<MyPlayList tracks = {tracks} tracksError={tracksError} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}></MyPlayList>} />
        <Route path="/category/:id" element={<Category tracks = {tracks} tracksError={tracksError} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}></Category>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };