import { useState } from 'react'

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
import AdminRegisteredDonors from './Admin/AdminRegisteredDonors.jsx';
import DonorOrganization from './DonorOrganization.jsx';
import App2 from './App2';
import CardPage from './CardPage';
import CardProfile from './CardProfile';
import OrgDonationPost from "./OrgDonationPost";
import OrgDonationPost1 from './OrgDonationPost1'
import OrgDonationPost2 from './OrgDonationPost2'
import ViewPost from './viewPost'
import OrgDonationPost3 from './OrgDonationPost3';
import ViewDonorProfileAsOrg from './ViewDonorProfileAsOrg.jsx';
import OrgProfile from './OrgProfile.jsx';
import AdminRequests from './Admin/AdminRequests.jsx';

function App() {
  return (
    // <NextUIProvider>
    <div className='App w-full h-full'>
      <Router>
          <Routes>
            <Route path='/' element={<LandingPage />} /> 
            <Route path='/Login' element={<LoginPage />} /> 
            <Route path='/Register' element={<RegisterPage />} /> 
            <Route path="/DonorMainPage" element={<Home />} />
            <Route path='/Donor' element={<Donor />} />
            <Route path='/OrgProfile' element={<Donor />} />
            <Route path='/DonationPage' element={<DonationPage />} />
            <Route path='/MAP' element={<TheMAP/>}/>
            <Route path='/AdminSubmission' element={<AdminSubmission />} />
            <Route path='/AdminRegisteredDonors' element={<AdminRegisteredDonors />} />
            <Route path='/ResetPassword' element={<ResetPwPage />} /> 
            <Route path='/DropDown' element={<DropDown/>}/>
            <Route path='/AdminRegisteredOrgs' element={<Regorg/>}/>
            <Route path='/DonorOrganization' element={<DonorOrganization/>}/>
            <Route path='/viewPost' element={<ViewPost />}/>
            <Route path='/CardPage' element={<CardPage/>}/>
           <Route path='/CardProfile' element={<CardProfile/>}/>
           <Route path='/OrgDonationPost' element={<OrgDonationPost/>}/>
           <Route path='/OrgDonationPost1' element={<OrgDonationPost1/>}/>
           <Route path='/OrgDonationPost2' element={<OrgDonationPost2/>}/>
           <Route path='/OrgDonationPost3' element={<OrgDonationPost3 />}/>
           <Route path='/OrgHomePage' element={<App2/>} />
           <Route path='/ViewDonorProfile' element={<ViewDonorProfileAsOrg/>} />
           <Route path='/AdminRequests' element={<AdminRequests/>} />
          </Routes>
      </Router>
    </div>
    
      
    
    
  );
}

export default App;