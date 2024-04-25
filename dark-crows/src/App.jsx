
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage'; 
import './index.css';
import {NextUIProvider} from "@nextui-org/react";
import RegisterPage from './RegisterPage';
import DonorRegistrationForm from './DonorRegistrationForm';
import DummyFile from './DummyFile';



function App() {
  return (
    <NextUIProvider>
    <div className='App'>
      <Router>
        <div className='content'>
          <Routes>
            <Route path='/' element={<LoginPage />} /> 
            <Route path='/Register' element={<RegisterPage />} /> 
            <Route path='/dummy' element={<DummyFile />} /> 
          </Routes>
        </div>
      </Router>
    </div>
    </NextUIProvider>

  );
}

export default App;