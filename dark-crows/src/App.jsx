import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
function App() {
  const [count, setCount] = useState(0)
  const title= "shazly";
  var lk = Math.random()*10+1;
  var link = "App";
  if(lk> 5){
    link = "App dark";
  }   
  return (
    <>
      <div className={link}>

      <Navbar></Navbar>
        <div className="content">
          <h1>App Component</h1>
          <p>{title}</p>
          <p>{lk}</p>
        </div>  
      </div>
    </>
  )
}

export default App
