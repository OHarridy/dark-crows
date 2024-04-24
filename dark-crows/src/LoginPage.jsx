import Button from "./generalButton";
import { useState } from 'react';




function LoginPage(){

    const[clickCounter, setClockCounter] = useState(0);

    function handleClick() {
        setClockCounter(clickCounter + 1);
    }
    return (  
       <div>


        <h1>LOGIN PAGE</h1>
        <h2>click counter: {clickCounter}</h2>
        <Button text="TEST" onClick={handleClick}/>



       </div>

        );
      
      


}
 
export default LoginPage

