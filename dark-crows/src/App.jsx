import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage.jsx';
import Donor from './donorAccount.jsx';
import Home from './mainPage.jsx';
import DonationPage from './DonationPage.jsx';
import './index.css';
import {NextUIProvider} from "@nextui-org/react";
import RegisterPage from './RegisterPage';
import TheMAP from '../TheMAP.jsx';
import DropDown from './DropDownskillissue.jsx';
import AdminHome from './adminhome.jsx';
import Regorg from './regorg.jsx';
function App() {
  return (
    <NextUIProvider>
    <div className='App'>
      <Router>
          <Routes>
            <Route path='/' element={<LoginPage />} /> 
            <Route path='/Register' element={<RegisterPage />} /> 
            <Route path='/Home' element={<Home />} />
            <Route path='/Donor' element={<Donor />} />
            <Route path='/DonationPage' element={<DonationPage />} />
            <Route path='/MAP' element={<TheMAP/>}/>
            <Route path='/DropDown' element={<DropDown/>}/>
            <Route path='/AdminHome' element={<AdminHome/>}/>
            <Route path='/Regorg' element={<Regorg/>}/>
          </Routes>
      </Router>
    </div>
    </NextUIProvider>

  );
}

export default App;