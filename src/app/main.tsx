import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './sotres/store.ts'
import { Provider } from 'react-redux'
import './styles/index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={ store }>
      <App/>
    </Provider>
  </StrictMode>,
)
