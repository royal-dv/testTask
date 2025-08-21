import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const rootContainer = document.getElementById('root')

if (rootContainer) createRoot(rootContainer).render(<App />)
else throw new Error('Root container not found')