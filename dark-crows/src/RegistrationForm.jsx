
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Button from "./generalButton";
import { Link } from 'react-router-dom';
import {Select, SelectItem, Avatar} from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/react";
import { useState } from 'react';
import {Input} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import {Tabs, Tab} from "@nextui-org/react";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const RegistrationForm = () => {

  const [isVisible, setIsVisible] =useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    org_name:'',
    org_type:'',
    gender:'male',
    role:'regular',
    no_appointments:'',
    clinic_address:'',
    subjects:'',
    no_students:'',
    no_sessions:'',
    about:'',
    email: '',
    contact_number: '',
    password: '',
    confirmPassword: '',
    country: '',
    address:'',
    city:'',
    state:'',
  });



  function handleInputChange(e){
      const value = e.target ? e.target.value : e;
      const name = e.target ? e.target.name : 'gender';
        setFormData({
          ...formData,
          [name]: value
        });

  
    }
  

  const [users, setUsers] = useState([]);

  function handleSubmit(e){
  e.preventDefault();
  const newUsers = [...users, formData];
  setUsers(newUsers);
  localStorage.setItem('users', JSON.stringify(newUsers));
  setFormData({
    username: '',
    first_name: '',
    last_name: '',
    org_name:'',
    org_type:'',
    gender:'male',
    role:'regular',
    no_appointments:'',
    clinic_address:'',
    subjects:'',
    no_students:'',
    no_sessions:'',
    about:'',
    email: '',
    contact_number: '',
    password: '',
    confirmPassword: '',
    country: '',
    address:'',
    city:'',
    state:'',
  });

  setUploadtext('');
  setUploadPhototext('');
  toast.success('Registration successful! 🎉');


console.log("ALL REGISTERED USERS", localStorage.getItem("users"));

  }


const [selectedTab, setSelectedTab] = useState('Donor');

function handleTabChange() {
  console.log(selectedTab);
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

function handlePhotoChange(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onloadend = function() {
    localStorage.setItem('file', reader.result);
    console.log('Selected photo:', file);
  }
  reader.readAsDataURL(file);

  
  setUploadPhototext('Photo uploaded successfully! ✔');
}

const fileInputRef = React.useRef();

function downloadFile() {
  const fileDataUrl = localStorage.getItem('file');
  if (!fileDataUrl) {
    console.log('No file to download');
    return;
  }

  const link = document.createElement('a');
  link.href = fileDataUrl;
  link.download = 'document'; 


  document.body.appendChild(link);


  link.click();


  setTimeout(() => document.body.removeChild(link), 0);

}

const [uploadText, setUploadtext] = useState('');

const [uploadPhotoText, setUploadPhototext] = useState('');



// TODO check that pw and confirm pw are the same
//TODO change behaviour of hide/show pw to be exclusive to each input


  return (  
    <div >

<div className="register-page-slider-container">
<ToastContainer />
  <div className="flex flex-wrap gap-4">
        <Tabs key="success" color="success" aria-label="Tabs colors" radius="full" selectedKey={selectedTab}  onSelectionChange={setSelectedTab} onClick={handleTabChange}>
          <Tab key="Donor" title="Donor" id= "donor" value="DonorRegistrationForm"/>
          <Tab key="Org" title="Organization" id="org" value="OrgRegistrationForm"/>
        </Tabs>

        </div>
        </div>
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                  id="username"
                  name="username"
                  type="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  autoComplete="username"
                  placeholder=" Enter your Username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder=" Tell us a bit about yourself!"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="picture" className="block text-sm font-medium leading-6 text-gray-900">
                Profile Picture
              </label>
              <p className="mt-1 text-sm leading-6 text-gray-600">Upload you profile picture</p>
              <div className="mt-2 flex items-center gap-x-3">
           

                <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handlePhotoChange} />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onClick={() => fileInputRef.current.click()}
                >
                  Upload Photo
                </button>

               <div className="uploaded-text">
                <p className="mt-1 text-sm leading-6 ">{uploadPhotoText}</p>
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

            { (selectedTab === "Donor"  )? (
<>
            <div className="sm:col-span-4">
              <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
              Volunteer Role Selection
              </label>
              <div className="mt-2">
              <RadioGroup  
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required >
              <Radio value="regular">Regular Donor</Radio>
              <Radio value="doctor">Pro-bono Doctor</Radio>
              <Radio value="teacher">Pro-bono Teacher</Radio>
            </RadioGroup>
              </div>
            </div>
            </>
): null}

{ (formData.role === "doctor"  )? (
<>
            <div className="sm:col-span-4">
              <label htmlFor="no_appointments" className="block text-sm font-medium leading-6 text-gray-900">
                Number of Appointments
              </label>
              <div className="mt-2">
                <input
                  id="no_appointments"
                  name="no_appointments"
                  type="number"
                  placeholder=" Enter number of Appointments"
                  value={formData.no_appointments}
                  onChange={handleInputChange}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="clinic_address" className="block text-sm font-medium leading-6 text-gray-900">
                Clinic Address
              </label>
              <div className="mt-2">
                <input
                  id="clinic_address"
                  name="clinic_address"
                  placeholder=" Enter Clinic Address"
                  value={formData.clinic_address}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            </>
            ): null}

{ (formData.role === "teacher"  )? (
<>
            <div className="sm:col-span-4">
              <label htmlFor="subjects" className="block text-sm font-medium leading-6 text-gray-900">
                Subjects
              </label>
              <div className="mt-2">
                <input
                  id="subjects"
                  name="subjects"
                  placeholder="List Subject(s) you teach"
                  value={formData.subjects}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="no_students" className="block text-sm font-medium leading-6 text-gray-900">
                Number of Students
              </label>
              <div className="mt-2">
                <input
                  id="no_students"
                  name="no_students"
                  placeholder=" Enter Number of Students"
                  type="number"
                  value={formData.no_students}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="no_sessions" className="block text-sm font-medium leading-6 text-gray-900">
                Number of Sessions Per Week
              </label>
              <div className="mt-2">
                <input
                  id="no_sessions"
                  name="no_sessions"
                  placeholder=" Enter Number of Sessions Per Week"
                  type="number"
                  value={formData.no_sessions}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            </>
            ): null}


             { (formData.role !== "regular" ||  selectedTab === "Org" )? (
<>
            <div className="col-span-full">
              <label htmlFor="document" className="block text-sm font-medium leading-6 text-gray-900">
                Document
              </label>
              { (selectedTab === "Donor"  )? (
                <>
              <p className="mt-1 text-sm leading-6 text-gray-600">Upload relevant documents proving your legitimacy as a Doctor/Teacher</p>
              </>
            ):  <>
            <p className="mt-1 text-sm leading-6 text-gray-600">Upload relevant documents proving your legitimacy as an Organization</p>
            </>}
              <div className="mt-2 flex items-center gap-x-3">
           

                <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} required />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onClick={() => fileInputRef.current.click()}
                >
                  Upload Document
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
            </>
          ): null}

          </div>



        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first_name"
                  id="first-name"
                  placeholder=" Enter your first name"
                  required
                  value={formData.first_name}
                  onChange={handleInputChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last_name"
                  id="last-name"
                  placeholder=" Enter your last name"
                  required
                  value={formData.last_name}
                  onChange={handleInputChange}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            { (selectedTab === "Org"  )? (
<>
            <div className="sm:col-span-3">
              <label htmlFor="org-name" className="block text-sm font-medium leading-6 text-gray-900">
                Organization name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="org_name"
                  id="org-name"
                  placeholder=" Enter your Organization name"
                  value={formData.org_name}
                  onChange={handleInputChange}
                  required
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="org-type" className="block text-sm font-medium leading-6 text-gray-900">
                Organization Type
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="org_type"
                  id="org-type"
                  placeholder=" Enter your Organization Type"
                  value={formData.org_type}
                  onChange={handleInputChange}
                  required
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            </>
): null}

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder=" Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="password-input-container">
              <Input
              name="password"
      variant="bordered"
      placeholder="Enter your password"
      value={formData.password}
      onChange={handleInputChange}
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
                Confirm Password
              </label>
              <div className="password-input-container">
              <Input
              name="confirmPassword"
      variant="bordered"
      placeholder="Re-enter your password"
      value={formData.confirmPassword}
      onChange={handleInputChange}
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

            <div className="sm:col-span-4">
              <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                Gender
              </label>
              <div className="mt-2">
              <RadioGroup  
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange} 
                  required
                  defaultValue="male">
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </RadioGroup>
              </div>
            </div>
            

            <div className="sm:col-span-3">
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
            <Select
            name="country"
      className="max-w-xs"
      label="Select country"
    value={formData.country}
       onChange={handleInputChange}
       defaultValue=""
    >
      <SelectItem
        key="argentina"
        startContent={<Avatar alt="Argentina" className="w-6 h-6" src="https://flagcdn.com/ar.svg" />}
      >
        Argentina
      </SelectItem>
      <SelectItem
        key="venezuela"
        startContent={<Avatar alt="Venezuela" className="w-6 h-6" src="https://flagcdn.com/ve.svg" />}
      >
        Venezuela
      </SelectItem>
      <SelectItem
        key="brazil"
        startContent={<Avatar alt="Brazil" className="w-6 h-6" src="https://flagcdn.com/br.svg" />}
      >
        Brazil
      </SelectItem>
      <SelectItem
        key="switzerland"
        startContent={
          <Avatar alt="Switzerland" className="w-6 h-6" src="https://flagcdn.com/ch.svg" />
        }
      >
        Switzerland
      </SelectItem>
      <SelectItem
        key="germany"
        startContent={<Avatar alt="Germany" className="w-6 h-6" src="https://flagcdn.com/de.svg" />}
      >
        Germany
      </SelectItem>
      <SelectItem
        key="spain"
        startContent={<Avatar alt="Spain" className="w-6 h-6" src="https://flagcdn.com/es.svg" />}
      >
        Spain
      </SelectItem>
      <SelectItem
        key="france"
        startContent={<Avatar alt="France" className="w-6 h-6" src="https://flagcdn.com/fr.svg" />}
      >
        France
      </SelectItem>
      <SelectItem
        key="italy"
        startContent={<Avatar alt="Italy" className="w-6 h-6" src="https://flagcdn.com/it.svg" />}
      >
        Italy
      </SelectItem>
      <SelectItem
        key="mexico"
        startContent={<Avatar alt="Mexico" className="w-6 h-6" src="https://flagcdn.com/mx.svg" />}
      >
        Mexico
      </SelectItem>

      <SelectItem
        key="Egypt"
        startContent={<Avatar alt="Egypt" className="w-6 h-6" src="https://flagcdn.com/eg.svg" />}
      >
        Egypt
      </SelectItem>
    </Select>
            </div>

            <div className="col-span-full">
              <label htmlFor="contact-number" className="block text-sm font-medium leading-6 text-gray-900">
               Contact Number
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="contact_number"
                  id="contact-number"
                  placeholder=" Enter your Contact Number"
                  value={formData.contact_number}
                  onChange={handleInputChange}
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address"
                  id="street-address"
                  placeholder=" Enter your street address"
                  value={formData.address}
                  onChange={handleInputChange}
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder=" Enter your City"
                  value={formData.city}
                  onChange={handleInputChange}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
                State / Governorate
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder=" Enter your State"
                  value={formData.state}
                  onChange={handleInputChange}
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
          text="Register"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        />
       
      </div>
    </form>

    </div>
  );
}
 
export default RegistrationForm;
