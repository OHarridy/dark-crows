import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App2 from './App2';
import CardPage from './CardPage';
import CardProfile from './CardProfile';
import OrgDonationPost from "./OrgDonationPost";
import RegisterPage from './RegisterPage';
import OrgDonationPost1 from './OrgDonationPost1'
import OrgDonationPost2 from './OrgDonationPost2'
import ViewPost from './viewPost'
import Home from './mainPage';


// import MainPage from 'src/App.jsx'; // Import the component you want to navigate to

function App() {
  return (
   
    <div className='Main'>
    <Router>
      
      <Routes>

      <Route path='/viewPost' element={<ViewPost />}/>
      <Route path='/CardPage' element={<CardPage/>}/>
      <Route path='/CardProfile' element={<CardProfile/>}/>
      <Route path='/OrgDonationPost' element={<OrgDonationPost/>}/>
      <Route path='/OrgDonationPost1' element={<OrgDonationPost1/>}/>
      <Route path='/OrgDonationPost2' element={<OrgDonationPost2/>}/>
      <Route path='/RegisterPage' element={<RegisterPage/>} /> 
      <Route path='/Home' element={<Home/>} /> 
        <Route path='/' element={<App2/>} />
      </Routes>
        
      
    </Router>
    </div>
    
      
    
    
  );
}

export default App;