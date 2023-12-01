import { Routes, Route } from 'react-router-dom'
import { Index } from './components/topIndex/TopIndex'
import { AuthPage } from './pages/AuthPage/AuthPage'
import { NotFound } from './pages/not-found/Not-found'
import { Favorites } from './pages/My-playlist/Favorites'
import { ProtectedRoute } from './components/protected-route'
import { useState } from 'react'
import { Category } from './pages/category/Category'
import { Layout } from './components/Layout'

export const AppRoutes = ({
  tracks,
  tracksError,
  currentTrack,
  setCurrentTrack,
}) => {
  const [user, setUser] = useState(null)

  const handleLogin = () => {
    localStorage.setItem('user', 'true')

    setUser({ login: 'taradam' })
  }
  const handleLogout = () => {
    setUser(null)
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthPage
            user={user}
            setUser={setUser}
            onAuthButtonClick={user ? handleLogout : handleLogin}
          />
        }
      />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        
      <Route 
        element={
         <Layout
         setUser={setUser}
              tracks={tracks}
              tracksError={tracksError}
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
         ></Layout>
         }
      >
        <Route
          path="index"
          element={
            <Index
              setUser={setUser}
              tracks={tracks}
              tracksError={tracksError}
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
            ></Index>
          }
        />

        <Route
          path="myplaylist"
          element={
            <Favorites
              tracks={tracks}
              tracksError={tracksError}
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
            ></Favorites>
          }
        />
        <Route
          path="index/category/:id"
          element={
            <Category
              tracks={tracks}
              tracksError={tracksError}
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
            ></Category>
          }
        />
         </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
