
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage'; 
import './index.css';
import Home from './mainPage.jsx';


function App() {
  return (
<div>
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<LoginPage />} />
        </Routes>
    </Router>
</div>
  );
}

export default App;