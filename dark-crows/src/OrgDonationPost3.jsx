
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Button from "./generalButton";
import { Link, redirect, useNavigate } from 'react-router-dom';
import {Select, SelectItem, Avatar} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio} from "@nextui-org/react";
import { useState } from 'react';
import {Input} from "@nextui-org/react";

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const OrgDonationPost3 = () => {

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

const navigate= useNavigate();

function redirectBack(){
  navigate("/OrgHomePage");
}

function redirectToDonor(){
  navigate("/Donor");
}

  return ( 
    <div className="flex flex-col">
        <br/>
        <br/>
        <br/>
        <br/>
      <div className="h-[800px]"></div>
      

    <div className="reg-parent">


<div className="reg-form-container shadow-lg  ">
    <form onSubmit={handleSubmit}>
      <div className=" ">
        

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Post Details</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">View the post details.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
               Title
              </label>
              <div className="mt-2">
              <p className="mt-1 text-md leading-6 text-gray-600">The Key to Life!</p>
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
              <p className="mt-1 text-md leading-6 text-gray-600">Food</p>
           
              </div>
            </div>



<div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
              Description
              </label>
              <div className="mt-2">
              <p className="mt-1 text-md leading-6 text-gray-600">Kids in Africa are dying of thirst, help us provide clean water for them!</p>
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="Images" className="block text-sm font-medium leading-6 text-gray-900">
                Images
              </label>
             
       
            
              <div className="mt-2 flex items-center gap-x-3">
           
              <img src="https://t4.ftcdn.net/jpg/01/62/37/69/360_F_162376940_TvJVgP7PPQFOtpTRLmLKkpCg3RjaQIyj.jpg" width={"700px"}/>

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
              <p className="mt-1 text-md leading-6 text-gray-600">0/1 Pro-bono Doctor</p>
              </div>
            </div>


             <div className="col-span-6">
              <label htmlFor="maxDonateAmount" className="block text-sm font-medium leading-6 text-gray-900">
               Donor Contributions
              </label>
              <div className="mt-2 ml-2 mr-2">

      <Table 
        color={selectedColor}
        selectionMode="single" 
      >
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Donor Role</TableColumn>
          <TableColumn align="center">Donated Amount</TableColumn>
          <TableColumn align="end">Status</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell className=" cursor-pointer hover:underline" onClick={redirectToDonor}>Tony Reichert</TableCell>
            <TableCell>Regular</TableCell>
            <TableCell>200</TableCell>
            <TableCell >Completed</TableCell>
          </TableRow>
          <TableRow key="2" textValue="hello">
            <TableCell className=" cursor-pointer hover:underline" onClick={redirectToDonor}>Zoey Lang</TableCell>
            <TableCell>Regular</TableCell>
            <TableCell >200</TableCell>
            <TableCell >Completed</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell className=" cursor-pointer hover:underline" onClick={redirectToDonor}>Jane Fisher</TableCell>
            <TableCell>Regular</TableCell>
            <TableCell>50</TableCell>
            <TableCell >Completed</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell className=" cursor-pointer hover:underline" onClick={redirectToDonor}>William Howard</TableCell>
            <TableCell>Regular</TableCell>
            <TableCell>550</TableCell>
            <TableCell >Completed</TableCell>
          </TableRow>
        </TableBody>
      </Table>
              </div>
            </div>


            

            

            

            

            
          </div>
        </div>

      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button
        onClick={redirectBack}
          text="Back"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        />

       
       
      </div>
    </form>
    </div>
{/* 
TODO: Adjust styling of table + alignment of text in table */}
    {/* <div className="flex flex-col gap-3">
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
    </div> */}

    </div>
    </div> 
  );
}
 
export default OrgDonationPost3;