
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Button from "./generalButton";
import { Link } from 'react-router-dom';
import {Select, SelectItem, Avatar} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio} from "@nextui-org/react";
import { useState } from 'react';
import {Input} from "@nextui-org/react";

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const RegistrationForm = () => {

  const [isVisible, setIsVisible] =useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [formData, setFormData] = useState({
   
    title: 'Feeders',
    description:'African kids starve to death!! be the one that helps us provide better nutrition for them.',
    category: 'Food',
    docs:'',
    maxDonateAmount:10000,
    services:''

  });

  const [category, setCategory] = useState('Food');
  const colors = ["default", "primary", "secondary", "success", "warning", "danger"];
  const [selectedColor, setSelectedColor] = React.useState("success");



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





  return ( 
    <div className="flex flex-col">
      <div className="h-[500px]"></div>
      
{/* <div className="register-image flex justify-center items-center">

<img
    className=""
    src="data:image/jpeg;base64,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"
    alt="ShareLelKheir"
/>
</div> */}
    <div className="reg-parent flex flex-row ml-[350px]">


<div className="reg-form-container shadow-lg  ">
    <form onSubmit={handleSubmit}>
      <div className=" ">
        

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
        <Link to="/" className="text-sm font-semibold leading-6 text-gray-900"> 
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
{/* 
TODO: Adjust styling of table + alignment of text in table */}
    <div className="flex flex-col gap-3">
      <Table 
        color={selectedColor}
        selectionMode="single" 
        defaultSelectedKeys={["2"]} 
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Donor Role</TableColumn>
          <TableColumn width="150px"align="center">Donated Amount</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>Regular</TableCell>
            <TableCell align="center">200</TableCell>
          </TableRow>
          <TableRow key="2" textValue="hello">
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Regular</TableCell>
            <TableCell textValue="200">200</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Regular</TableCell>
            <TableCell>50</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>William Howard</TableCell>
            <TableCell>Regular</TableCell>
            <TableCell>550</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    </div>
    </div> 
  );
}
 
export default RegistrationForm;