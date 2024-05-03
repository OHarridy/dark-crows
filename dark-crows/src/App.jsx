import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage.jsx';
import Donor from './donorAccount.jsx';
import Home from './mainPage.jsx';
import DonationPage from './DonationPage.jsx';
import './index.css';
import {NextUIProvider} from "@nextui-org/react";
import RegisterPage from './RegisterPage';
import ResetPwPage from './ResetPwPage.jsx';
import LandingPage from './LandingPage.jsx';
import DropDownTest from './DropDownTest.jsx';




function App() {
  return (
    // <NextUIProvider>
    <div className='App'>
      <Router>
          <Routes>
            <Route path='/' element={<DropDownTest />} /> 
            <Route path='/Login' element={<LoginPage />} /> 
            <Route path='/Register' element={<RegisterPage />} /> 
            <Route path='/ResetPassword' element={<ResetPwPage />} /> 
            <Route path='/DonorMainPage' element={<Home />} /> 
          </Routes>
      </Router>
    </div>
    // </NextUIProvider>

  );
}

export default App;