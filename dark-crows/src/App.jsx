import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage.jsx';
import Donor from './donorAccount.jsx';
import Home from './mainPage.jsx';
import DonationPage from './DonationPage.jsx';
import './index.css';



function App() {
  return (
<div>
    <Router>
        <Routes>
            <Route path='/Donor' element={<Donor />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/DonationPage' element={<DonationPage />} />
            <Route path='/' element={<LoginPage />} />
        </Routes>
    </Router>
</div>
  );
}

export default App;