
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage'; 
import './index.css';
import {NextUIProvider} from "@nextui-org/react";


function App() {
  return (
    <NextUIProvider>
    <div className='App'>
      <Router>
        <div className='content'>
          <Routes>
            <Route path='/' element={<mainPage />} /> 
          </Routes>
        </div>
      </Router>
    </div>
    </NextUIProvider>

  );
}

export default App;