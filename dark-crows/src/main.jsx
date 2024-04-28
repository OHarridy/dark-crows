import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
import AdminRegisteredOrgs from './Admin/AdminRegisteredOrgs.jsx';
import AdminSubmission from './Admin/AdminSubmission.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>  
        
      <AdminSubmission />
      
    </NextUIProvider>

  </React.StrictMode>,
)
