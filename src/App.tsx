import { StrictMode } from 'react'
import '@styles/_global.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

const App = () => {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}

export default App
