import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AdminPage from './adminhome.jsx'
import './index.css'
import Regorg from './regorg.jsx'
import MiniOrgProfile from './miniOrgProfile.jsx'
import { NextUIProvider } from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
    <Regorg />
    </NextUIProvider>
  </React.StrictMode>,
)
