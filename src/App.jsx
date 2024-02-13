import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './components/routes/AppRoutes'

export default function App() {
  
  return (
    <>
      <BrowserRouter>
        <AppRoutes  />
      </BrowserRouter>
    </>
  )
}
