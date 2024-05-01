import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage.jsx';
import Donor from './donorAccount.jsx';
import Home from './mainPage.jsx';
import './index.css';



function App() {
  return (
<div>
    <Router>
        <Routes>
            <Route path='/Donor' element={<Donor />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/' element={<LoginPage />} />
        </Routes>
    </Router>
</div>
  );
}

export default App;