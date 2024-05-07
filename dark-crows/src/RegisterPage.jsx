import Button from "./generalButton";
import { Link } from 'react-router-dom';
import RegistrationForm from "./RegistrationForm";

const RegisterPage = () => {
    return ( 

        <div className="reg-parent">

        <div className="flex justify-center items-center min-h-screen">
        <div className="register-page-container">


        <div className="register-image mt-6">

        <img
            className=""
            src="Logo.JPG"
            alt="ShareLelKheir"
        />
    </div>

        <div className="flex flex-col items-center justify-center" >
            <h1>Create an Account</h1>
            <h2>It Wont take a minute!</h2>
        </div>

{/* TODO adjust back button so it doesnt hover with me */}
        <div className=" fixed top-0 left-0 mt-4 text-white font-bold py-2 px-4 rounded">
  <Link to="/Login">
  <Button text="Back" className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline "/>
  </Link>
</div>
        
        

    <div className="">
    <RegistrationForm/>
    </div>
    
        </div>
        </div>

        </div>


     );
}
 
export default RegisterPage;