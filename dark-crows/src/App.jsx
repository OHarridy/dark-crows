import { useState } from 'react'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App2 from './App2';
import CardPage from './CardPage';
import CardProfile from './CardProfile';
import OrgDonationPost from "./OrgDonationPost";
import RegisterPage from './RegisterPage';
// import MainPage from 'src/App.jsx'; // Import the component you want to navigate to

function App() {
  return (
   
    <div className='Main'>
    <Router>
      
      <Routes>
    
      <Route path='/CardPage' element={<CardPage/>}/>
      <Route path='/CardProfile' element={<CardProfile/>}/>
      <Route path='/OrgDonationPost' element={<OrgDonationPost/>}/>
      <Route path='/RegisterPage' element={<RegisterPage/>} /> 
        <Route path='/' element={<App2/>} />
      </Routes>
        
      
    </Router>
    </div>
    
      
    
    
  );
}

export default App;