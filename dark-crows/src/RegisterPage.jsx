
import RegistrationForm from "./RegistrationForm";

const RegisterPage = () => {
    return ( 

        <div className="flex justify-center items-center min-h-screen">
        <div className="register-page-container">


        <div className="register-image">

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
        
        

    <div className="">
    <RegistrationForm/>
    </div>
    





        </div>
        </div>


     );
}
 
export default RegisterPage;