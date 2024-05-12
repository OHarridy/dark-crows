
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


const DonationPage9 = () => {
  const [isVisible, setIsVisible] =useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);


  const [formData, setFormData] = useState(
        {Type:"Doctoring",tag:'Neurology', Area:"Mokattam", Governorate:"Cairo", 
        title: 'They need to be fed 3 chickens a day', body: 'Any Pro-bono Doctor that can help maya, a 6 year old who has very a severe cold and has been sick for weeks! Please help!',   id: 1, donatedAmount: 1000 , maximumAmount: 10000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 1,                                                       source: 'https://assets.clevelandclinic.org/transform/df266997-a5d9-44e0-90f9-63100ef2b798/childSick-1445845423-770x533-1_jpg'});

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
      <div className="h-[400px]"></div>
      

    <div className="reg-parent ">


<div className="reg-form-container shadow-lg  ">
    <form onSubmit={handleSubmit}>
      <div className=" ">
        
      <ToastContainer/>
        <div className="border-b border-gray-900/10">
          <h2 className="text-base font-semibold leading-7 text-gray-900"></h2>

          <div className="mt-10 grid grid-cols-2 grid-rows-3 w-[1000px] gap-y-8">
            <div className="">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
               Title
              </label>
              <div className="">
              <p className="mt-1 text-md leading-6 text-gray-600">Medical Assistance</p>
              </div>
            </div>

         
            <div className="">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
               Category
              </label>
              <div className="">
              <p className="mt-1 text-md leading-6 text-gray-600">Medical</p>
           
              </div>
            </div>
            <div className="">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
               Patient Name
              </label>
              <div className="">
              <p className="mt-1 text-md leading-6 text-gray-600">Anna</p>
           
              </div>
            </div>
            <div className="">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
               Blood Type
              </label>
              <div className="">
              <p className="mt-1 text-md leading-6 text-gray-600">A+</p>
           
              </div>
            </div>
            <div className="">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
               Address
              </label>
              <div className="">
              <p className="mt-1 text-md leading-6 text-gray-600">184 North elnineteen</p>
           
              </div>
            </div>
            <div className="">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
               Hospital Name
              </label>
              <div className="">
              <p className="mt-1 text-md leading-6 text-gray-600">57357</p>
           
              </div>
            </div>
           
            <div className="">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
              Hospital Address 
              </label>
              <div className="">
              <p className="mt-1 text-md leading-6 text-gray-600">214 Mecca</p>
           
              </div>
            </div>
            <div className="">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
               Hospital Area
              </label>
              <div className="">
              <p className="mt-1 text-md leading-6 text-gray-600">Manyal</p>
           
              </div>
            </div>
            <div className="">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
               Hospital Governorate
              </label>
              <div className="">
              <p className="mt-1 text-md leading-6 text-gray-600">Giza</p>
           
              </div>
            </div>
            <div className="">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
               Organization Name
              </label>
              <div className="">
              <p className="mt-1 text-md leading-6 text-gray-600">Masr ElKheir</p>
           
              </div>
            </div>

        
            <div className="">
              <label htmlFor="Images" className="block text-sm font-medium leading-6 text-gray-900">
                Images
              </label>
             
              <div className="flex items-center">
           
              <img src={formData.source} width={"400px"}/>

               <div className="uploaded-text">
                <p className="mt-1 text-sm leading-6 ">{uploadText}</p>
                </div>

              </div>
            </div>


            <div className="">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
              Google Map Location
              </label>
              <iframe src={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1818.421628697366!2d"+"31"+"!3d"+"29"+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714984628638!5m2!1sen!2seg"} 
                    width="400" height={"92%"} ></iframe>
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
 
export default DonationPage9;