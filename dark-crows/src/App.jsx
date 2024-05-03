
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage'; 
import './index.css';
import {NextUIProvider} from "@nextui-org/react";
import AdminRegisteredDonors from './Admin/AdminRegisteredDonors.jsx';
import AdminSubmission from './Admin/AdminSubmission.jsx';

function App() {
  return (
    <NextUIProvider>
    <AdminRegisteredDonors />
    </NextUIProvider>

  );
}

export default App;