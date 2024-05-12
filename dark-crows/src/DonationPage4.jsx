
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


const DonationPage4 = () => {
  const [isVisible, setIsVisible] =useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);


  const [formData, setFormData] = useState(
        {Type:"Toys",tag:'Cars', Area:"Mokattam", Governorate:"Cairo", 
        title: 'They need to be fed 3 chickens a day', body: 'Any Pro-bono Doctor that can help maya, a 6 year old who has very a severe cold and has been sick for weeks! Please help!',   id: 1, donatedAmount: 0 , maximumAmount: 1 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 1,                                                       source: 'https://assets.clevelandclinic.org/transform/df266997-a5d9-44e0-90f9-63100ef2b798/childSick-1445845423-770x533-1_jpg'});

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
    <div className="flex flex-col mt-[700px]">
      

    <div className="reg-parent ">


<div className="reg-form-container shadow-lg  ">
    <form onSubmit={handleSubmit}>
      <div className=" ">
        
      <ToastContainer/>
        <div className="border-b border-gray-900/10">
          <h2 className="text-base font-semibold leading-7 text-gray-900"></h2>

          <div className="mt-10 grid grid-cols-2 grid-rows-2 w-[1000px] gap-y-8">
          <div className="">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
               Title
              </label>
              <div className="">
              <p className="mt-1 text-md leading-6 text-gray-600">Urgent Stethoscopes Needed!</p>
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
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
               Category
              </label>
              <div className="">
              <p className="mt-1 text-md leading-6 text-gray-600">Medical</p>
           
              </div>
            </div>

            
            <div className="">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
              Device Type
              </label>
              <div className="">
              <p className="mt-1 text-md leading-6 text-gray-600">Stethoscope</p>
           
              </div>
            </div>

            <div className="">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Medical Use
              </label>
              <div className="">
              <p className="mt-1 text-md leading-6 text-gray-600">Heart-Rate Measurement</p>
           
              </div>
            </div>

              
            <div className="">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
               Quantity 
              </label>
              <div className="">
              <p className="mt-1 text-md leading-6 text-gray-600">1</p>
           
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


           


            <div className="col-span-full">
              <label htmlFor="maxDonateAmount" className="block text-sm font-medium leading-6 text-gray-900">
              Donor Contributions
              </label>
              <div className="mt-2 ml-2 mr-2">

      <div><Progress
                                style={{fontFamily: 'Roboto Condensed, sans-serif'}}
                                className=" gap-0 p-1 mb-4"
                                label={formData.maximumAmount + ""}
                                valueLabel={formData.donatedAmount / formData.maximumAmount * 100 + "%"}
                                aria-label="Donation progress" color="success"
                                classNames={{
                                    track: "drop-shadow-md border border-default p-0",
                                    indicator: "bg-gradient-to-r from-green-400 to-blue-600 p-0",
                                    label: "text-xl text-green-700 p-0",
                                    value: "text-default-600",
                                }}
                                maxValue={formData.maximumAmount} value={formData.donatedAmount}/>
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
          endContent="Items"
          classNames={{
            base: "pt-52 ml-auto",
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
 
export default DonationPage4;