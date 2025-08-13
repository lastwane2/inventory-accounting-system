import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './model/store.ts'
import { Provider } from 'react-redux'
import './ui/styles/index.css'
import '@fontsource/rubik'
import App from './App.tsx'
import { initAuthListener } from './api/initAuthListener.ts'


initAuthListener(store)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={ store }>
      <App/>
    </Provider>
  </StrictMode>,
)
