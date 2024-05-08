
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Button from "./generalButton";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {Progress, RadioGroup, Input} from "@nextui-org/react";
import { useState } from 'react';
import { CustomRadio } from "../CustomRadio";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';


const DonationPage = () => {
  const [isVisible, setIsVisible] =useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [formData, setFormData] = useState({
   
    title: 'The Key to Life!',
    description:'Kids in Africa are dying of thirst, help us provide clean water for them!',
    category: 'Food',
    docs:'',
    maxDonateAmount:10000,
    services:''

  });

const type = "Clothes";
  function handleInputChange(e){
      const value = e.target ? e.target.value : e;
      const name = e.target ? e.target.name : 'gender';
        setFormData({
          ...formData,
          [name]: value
        });

  
    }
    
  

  const [posts, setPosts] = useState([]);

  function handleSubmit(e){
  e.preventDefault();
  const newPosts = [...posts, formData];
  setPosts(newPosts);
  localStorage.setItem('posts', JSON.stringify(newPosts));
  

  setUploadtext('');
  toast.success('Request Updated Successfully! 🎉🥳');


console.log("ALL REGISTERED USERS", localStorage.getItem("posts"));

  }





function handleFileChange(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onloadend = function() {
    localStorage.setItem('file', reader.result);
    console.log('Selected file:', file);
  }
  reader.readAsDataURL(file);

  
  setUploadtext('Document uploaded successfully! ✔');
}

const fileInputRef = React.useRef();



const [uploadText, setUploadtext] = useState('');

const navigate= useNavigate();



function redirectToDonor(){
  navigate("/DonorProfile");
}



  return ( 
    <div className="flex flex-col">
      <div className="h-[600px]"></div>
      

    <div className="reg-parent ">


<div className="reg-form-container shadow-lg  ">
    <form onSubmit={handleSubmit}>
      <div className=" ">
        
      <ToastContainer/>
        <div className="border-b border-gray-900/10">
          <h2 className="text-base font-semibold leading-7 text-gray-900"></h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
               Title
              </label>
              <div className="mt-2">
              <p className="mt-1 text-md leading-6 text-gray-600">Medical Assistance</p>
                {/* <input
                  id="title"
                  name="title"
                  placeholder=" Enter post title"
                  value={formData.title}
                  onChange={handleInputChange}
                  
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                /> */}
              </div>
            </div>

         
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
               Category
              </label>
              <div className="mt-2">
              <p className="mt-1 text-md leading-6 text-gray-600">Medical</p>
           
              </div>
            </div>



<div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
              Description
              </label>
              <div className="mt-2">
              <p className="mt-1 text-md leading-6 text-gray-600">Any Pro-bono Doctor that can help maya, a 6 year old who has very a severe cold and has been sick for weeks! Please help!</p>
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="Images" className="block text-sm font-medium leading-6 text-gray-900">
                Images
              </label>
             
       
            
              <div className="mt-2 flex items-center gap-x-3">
           
              <img src="https://assets.clevelandclinic.org/transform/df266997-a5d9-44e0-90f9-63100ef2b798/childSick-1445845423-770x533-1_jpg" width={"400px"}/>

               <div className="uploaded-text">
                <p className="mt-1 text-sm leading-6 ">{uploadText}</p>
                </div>

                {/* <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onClick={downloadFile}
                >
                  Download Document
                </button> */}
              </div>
            </div>

            <div className="col-span-6">
              <label htmlFor="maxDonateAmount" className="block text-sm font-medium leading-6 text-gray-900">
              Donor Contributions
              </label>
              <div className="mt-2 ml-2 mr-2">

      <div><Progress/>
        {type==="Clothes"?<div className="grid grid-cols-3 grid-rows-1 gap-1">
        
        <RadioGroup className="w-[300px]" label="Method of Transport">
      <CustomRadio description="Up to 500 items" value="Truck">
        Truck
      </CustomRadio>
      <CustomRadio description="Up to 100 items" value="Car">
        Car
      </CustomRadio>
      <CustomRadio
        description="Up to 20 items"
        value="Motorcycle">
        Motorcycle
      </CustomRadio>
    </RadioGroup>

    <RadioGroup className="w-[300px]" label="Time Slot">
      <CustomRadio description="from 9 am to 5 pm" value="Business Hours">
        Business Hours
      </CustomRadio>
      <CustomRadio description="9 am to 12 pm" value="Normal Hours">
        Normal Hours
      </CustomRadio>
    </RadioGroup>
    <Input className="w-[200px]"
          type="number"
          label="Amount"
          placeholder="0"
          labelPlacement="outside"
          endContent="items"
          classNames={{
            base: "pt-52",
          }}
        />
    </div>:""}
      </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link to="/DonorMainPage" className="text-sm font-semibold leading-6 text-gray-900"> 
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Back
        </button>
        </Link>
        <Button
        onClick={() => {toast.info("Thank you for your donation! 🎉🥳");setTimeout(() => {
            navigate('/DonorMainPage');
          }, 1000);}}
          text="Donate"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        />
       
      </div>
    </form>
    </div>

    </div>
    </div> 
  );
}
 
export default DonationPage;