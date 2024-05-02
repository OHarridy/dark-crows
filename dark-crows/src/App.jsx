import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage.jsx';
import Donor from './donorAccount.jsx';
import Home from './mainPage.jsx';
import DonationPage from './DonationPage.jsx';
import './index.css';
import {NextUIProvider} from "@nextui-org/react";
import RegisterPage from './RegisterPage';




function App() {
  return (
    // <NextUIProvider>
    <div className='App'>
      <Router>
          <Routes>
            <Route path='/' element={<LoginPage />} /> 
            <Route path='/Register' element={<RegisterPage />} /> 
          </Routes>
      </Router>
    </div>
    // </NextUIProvider>

  );
}

export default App;