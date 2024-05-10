
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Button from "./generalButton";
import { Link } from 'react-router-dom';
import {Select, SelectItem, Avatar} from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/react";
import { useState } from 'react';
import {Input} from "@nextui-org/react";

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const RegistrationForm = () => {

  const [isVisible, setIsVisible] =useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const photoUrl = localStorage.getItem('photo');

  const [formData, setFormData] = useState({
   
    title: 'Smile Getters',
    description:"Toys stimulate a child's cognitive abilities, fostering problem-solving, critical thinking, and creativity.",
    category: 'Toys',
    docs:'',
    maxDonateAmount:5000,
    services:''

  });

  const [category, setCategory] = useState('Food');



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




// TODO check that pw and confirm pw are the same
//TODO change behaviour of hide/show pw to be exclusive to each input


  return (  
    <div className="reg-parent flex flex-col">
<div className="h-[500px]"></div>
<div className="register-image flex justify-center items-center">

        <img
            className=""
            src={photoUrl}
            alt="ShareLelKheir"
        />
    </div>
    <div className="reg-form-container shadow-lg ">
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Post Details</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Edit the post details.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            

          


            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
               Title
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  placeholder=" Enter post title"
                  value={formData.title}
                  onChange={handleInputChange}
                  
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

         
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
               Category
              </label>
              <div className="mt-2">
                <input
                  id="Category"
                  name="Category"
                  placeholder=" Enter category"
                  value={formData.category}
                  onChange={handleInputChange}
                  
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>



<div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
              description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Post Description"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="Images" className="block text-sm font-medium leading-6 text-gray-900">
                Images
              </label>
             
                
              <p className="mt-1 text-sm leading-6 text-gray-600">Upload relevant images to your post and needs, to inform donors of exactly what you require! </p>
              
            
            {/* <p className="mt-1 text-sm leading-6 text-gray-600">Upload relevant documents proving your legitimacy as an Organization</p> */}
            
              <div className="mt-2 flex items-center gap-x-3">
           

                <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange}  />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onClick={() => fileInputRef.current.click()}
                >
                  Change Image
                </button>

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

            <div className="col-span-full">
              <label htmlFor="maxDonateAmount" className="block text-sm font-medium leading-6 text-gray-900">
               Donation Goal
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="maxDonateAmount"
                  id="maxDonateAmount"
                  placeholder=" Enter maximum donation amount"
                  value={formData.maxDonateAmount}
                  onChange={handleInputChange}
                  autoComplete="1000"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
              </div>
            </div>

            

            

            

            
          </div>
        </div>

      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link to="/OrgHomePage" className="text-sm font-semibold leading-6 text-gray-900"> 
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        </Link>
        <Button
          type="submit"
          text="Apply Changes"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        />
       
      </div>
    </form>
    </div>

    </div>
  );
}
 
export default RegistrationForm;