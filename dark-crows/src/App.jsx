import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App2 from './App2';
// import MainPage from 'src/App.jsx'; // Import the component you want to navigate to

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div className='Main'>
    <Router>
      
      <Routes>


        <Route path='/' element={<App2/>} />
      </Routes>
        
      
    </Router>
    </div>
    
      
    
    
  );
}

export default App
