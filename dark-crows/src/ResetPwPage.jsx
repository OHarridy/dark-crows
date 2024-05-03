import Button from "./generalButton";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {Input} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import { ToastContainer, toast } from 'react-toastify';

const ResetPwPage = () => {


    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleUsernameChange(e){
        setUsername(e.target.value);
      }
  
      function handleEmailChange(e){
        setEmail(e.target.value);
      }

      function handleNewPasswordChange(e){
        setNewPassword(e.target.value);
      }

      function handleConfirmPassword(e){
        setConfirmPassword(e.target.value);
      }
    
    
  const [isVisible, setIsVisible] =useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const navigate = useNavigate();


  function resetPW(username,email,NewPassword){
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.email === email);

  if (user && newPassword === confirmPassword) {
    user.password = NewPassword;
    localStorage.setItem("users", JSON.stringify(users));
    console.log("ALL USERS AFTER PW CHANGE:" , localStorage.getItem("users"));
    return true;
    }
    else{
        toast.error('Incorrect Username or Email');
        return false;
    }

}

function handleSubmit(e){
    e.preventDefault();
if(resetPW(username,email,newPassword)){
    toast.success('Password Reset Successful');
    setTimeout(() => {
        navigate('/');
      }, 1000);
  }
}


    return ( 
        <div>
            <ToastContainer/>
            <div className="flex items-center justify-center min-h-screen  mb-3 mt-3 ">
<div className="flex  flex-1 flex-col justify-center px-2 py-12 lg:px-8 mt-10 sm:mx-auto sm:w-full sm:max-w-sm border shadow-lg p-30" >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Reset Your Password
          </h2>

          {/* <h3 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Make sure to enter your username and email correctly
          </h3> */}

          {/* <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}

        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm p5">
          <form className="space-y-6 w-100" action="#" method="POST" onSubmit={handleSubmit} >
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
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                 Enter New Password
                </label>
              </div>
              <div className="mt-2">
              <Input
              name="password"
      variant="bordered"
      placeholder="Enter your password"
      value={newPassword}
      onChange={handleNewPasswordChange}
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

            <div className="sm:col-span-4">
              <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm New Password
              </label>
              <div className="password-input-container">
              <Input
              name="confirmPassword"
      variant="bordered"
      placeholder="Re-enter your new password"
      value={confirmPassword}
      onChange={handleConfirmPassword}
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      required
      className="max-w-xs"
    />
              </div>
            </div>

            <div >
              <Button
              text="Change Password"
              type="submit"
              className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline "  />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
             {' '}
            <a href="/Login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Cancel
            </a>
          </p>
        </div>
      </div>


      </div>




       </div>



     );
}
 
export default ResetPwPage;