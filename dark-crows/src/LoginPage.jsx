import Button from "./generalButton";
import { useState, useEffect, useRef} from 'react';
import { Link, useNavigate} from "react-router-dom";
import {Input} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import { ToastContainer, toast } from 'react-toastify';


const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
const allusers= JSON.parse(localStorage.getItem("users"));
function showAllData(){
  console.log( "LOGGED IN USERNAME" , loggedInUser.username);
  console.log( "LOGGED IN USER DATA" , loggedInUser);
  console.log("ALL USERS:" ,allusers);
}console.log("ALL USERS:" ,allusers);
function LoginPage(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const [isVisible1, setVisible1] = useState(false);
const domRef1 = useRef();



    const navigate = useNavigate();

    
  const [isVisible, setIsVisible] =useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);


    function handleUsernameChange(e){
      setUsername(e.target.value);
    }

    function handlePasswordChange(e){
      setPassword(e.target.value);
    }

    function login(username, password) {
 
      const users = JSON.parse(localStorage.getItem('users')) || [];
    
  
      const user = users.find(user => user.username === username);
    

      if (user && user.password === password) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        localStorage.setItem("org_name", JSON.stringify(user.org_name));
        console.log("NAMEEE" , user.org_name);
        console.log(localStorage.getItem("loggedInUser"));
        return true;
      }

      return false;
    }

    function handleSubmit(e){
      e.preventDefault();
    // let org_name = localStorage.getItem("org_name");
    // let history = useHistory();

    if(username === "admin" && password === "admin"){
     navigate('/AdminRegisteredOrgs');
    }
    if(login(username,password)){
      const users = JSON.parse(localStorage.getItem('users')) || [];

      const user = users.find(user => user.username === username);

      if(user.org_name===''){
        navigate('/DonorMainPage');
      }
      else{
        navigate('/OrgHomePage');
      }
    }
   else{
    toast.error('Incorrect Username or Password');
   }

  }



    return (  
       <div className="loginContainer">
        <ToastContainer/>
        <div className="fixed top-0 left-0 mt-4 text-white font-bold py-2 px-4 rounded">
  <Link to="/">
  <Button text="Back" className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline "/>
  </Link>
</div>

    <div className={`login-non-form-container fade-in ${isVisible1 ? 'fade-in' : ''}`} ref={domRef1}>
        <div className="login-image">

          


        <img
            className=""
            src="Logo.JPG"
            alt="ShareLelKheir"
          />

        </div>


        <div className="login-text">

        Donations Like Never Before!


        </div>
        <div className="login-subtext">

        Join us in helping those in need! <br/> ShareLelKheir is a platform that connects donors with those in need!


        </div>

        </div>
<div className="login-form-container ">
<div className=" flex  flex-1 flex-col justify-center px-2 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6"  onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  placeholder="Enter your Username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="/ResetPassword" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
              <Input
              name="password"
      variant="bordered"
      placeholder="Enter your password"
      value={password}
      onChange={handlePasswordChange}
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      required
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
    />
              </div>
            </div>

            <div >
              <Button
              text="Sign in"
              type="submit"
              className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline "  />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
             {' '}
            <a href="/Register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Create an Account
            </a>

            {/* <Button text="show all data" onClick={showAllData}/> */}
          </p>
        </div>
      </div>
      </div>




       </div>

        );
      
      


}
 
export default LoginPage

