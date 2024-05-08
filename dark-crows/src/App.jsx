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
import TheMAP from './TheMAP.jsx';
import DropDown from './DropDownskillissue.jsx';
import Regorg from './regorg.jsx';
import AdminSubmission from './Admin/AdminSubmission.jsx';
import DonorOrganization from './DonorOrganization.jsx';

function App() {
  return (
    <NextUIProvider>
    <div className='App'>
      <Router>
          <Routes>
            <Route path='/' element={<LandingPage />} /> 
            <Route path='/Login' element={<LoginPage />} /> 
            <Route path='/Register' element={<RegisterPage />} /> 
            <Route path="/DonorMainPage" element={<Home />} />
            <Route path='/Donor' element={<Donor />} />
            <Route path='/DonationPage' element={<DonationPage />} />
            <Route path='/MAP' element={<TheMAP/>}/>
            <Route path='/AdminSubmission' element={<AdminSubmission />} />
            <Route path='/ResetPassword' element={<ResetPwPage />} /> 
            <Route path='/DropDown' element={<DropDown/>}/>
            <Route path='/Regorg' element={<Regorg/>}/>
            <Route path='/DonorOrganization' element={<DonorOrganization/>}/>
          </Routes>
      </Router>
    </div>
    </NextUIProvider>

  );
}

export default App;