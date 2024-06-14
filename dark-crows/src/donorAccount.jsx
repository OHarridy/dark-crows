import { Input } from "@nextui-org/react";
import { useState, useEffect } from "react";
import TheBAR from "./TheBAR";
import TheMAP from "./TheMAP";
import GeneralButton from "./generalButton";
import { PencilSquareIcon  } from '@heroicons/react/20/solid'
import { ToastContainer, toast } from "react-toastify";
import {Textarea} from "@nextui-org/react";
const Donor = () => {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); 
    var [nidda, setnidda] = useState(
        {username: loggedInUser.username, password:loggedInUser.password ,first_name: loggedInUser.first_name,last_name: loggedInUser.last_name, email: loggedInUser.email, contact_number: loggedInUser.contact_number,
             address: loggedInUser.address, country: loggedInUser.country,
             role: loggedInUser.role, gender: loggedInUser.gender, longitude:+loggedInUser.longitude, latitude:+loggedInUser.latitude, 
             no_appointments: loggedInUser.no_appointments, subjects: loggedInUser.subjects, no_students: loggedInUser.no_students, 
             no_sessions: loggedInUser.no_sessions, document: loggedInUser.document, clinic_address: loggedInUser.clinic_address, 
             org_name: loggedInUser.org_name, org_type: loggedInUser.org_type, about: loggedInUser.about, city: loggedInUser.city, 
             state: loggedInUser.state, address_selection: loggedInUser.address_selection, specialty: loggedInUser.specialty, clinic_area: loggedInUser.clinic_area, clinic_governorate: loggedInUser.clinic_governorate}
);
    var [drivernidda] = useState(
        [{ETA: '2024-05-10 19:57:00', driverName: "Ahmed 3andaleeb", driver: "01092408287"},
         {ETA: '2024-04-26 19:45:00', driverName: "Omar 3andaleeb", driver: "01022608212"},
         {ETA: '2024-09-10 07:17:00', driverName: "Shazly 3andaleeb", driver: "01092285549"},
         {ETA: '2024-07-02 07:30:00', driverName: "Hamo 3andaleeb", driver: "01092267447"},
         {ETA: '2024-07-02 07:30:00', driverName: "Boko 3andaleeb", driver: "01092287447"},
]);

const [time, setTime] = useState(new Date());

useEffect(() => {
  const targetTime = new Date("2024-05-10T20:00:00Z").getTime();

  const timer = setInterval(() => {
    const currentTime = new Date().getTime();

    if(currentTime == targetTime){
      notify();
    }
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);




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

const [interim, setInterim] = useState({
    username: loggedInUser.username,
    first_name: loggedInUser.first_name,
    last_name: loggedInUser.last_name,
    org_name:loggedInUser.org_name,
    org_type:loggedInUser.org_type,
    gender:loggedInUser.gender,
    role:loggedInUser.role,
    no_appointments:loggedInUser.no_appointments,
    clinic_address:loggedInUser.clinic_address,
    subjects:loggedInUser.subjects,
    no_students:loggedInUser.no_students,
    no_sessions:loggedInUser.no_sessions,
    document:loggedInUser.document,
    longitude:loggedInUser.longitude,
    latitude:loggedInUser.latitude,
    about:loggedInUser.about,
    email: loggedInUser.email,
    contact_number: loggedInUser.contact_number,
    password: loggedInUser.password,
    confirmPassword: loggedInUser.confirmPassword,
    country: loggedInUser.country,
    address_selection: loggedInUser.address_selection,
    address: loggedInUser.address,
    city: loggedInUser.city,
    state: loggedInUser.state,
    specialty: loggedInUser.specialty,
    clinic_area: loggedInUser.clinic_area,
    clinic_governorate: loggedInUser.clinic_governorate

  });
  function handleInputChange(e){
    const value =e.target.value;
    const name = e.target.name;
    console.log("interim",value);
      setInterim({
        ...interim,
        [name]: value
      }); 
  }
  function handleMapChange(long, lat){
    console.log("interim",long);
    console.log("interim",lat);
    setInterim({
      ...interim,
      longitude: long,
      latitude: lat
    });
  }

  const [changeMode, setChangeMode] = useState(false);
  function changethis(){
    setChangeMode(!changeMode)
    localStorage.setItem('loggedInUser', JSON.stringify(interim));
    loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); 
    setnidda(loggedInUser);

  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  const photoSrc = localStorage.getItem('photo');
  const [isVisible, setIsVisible] =useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  function notify(){
    toast.info("Driver has Arrived");}
    return (
        
        <div className="min-h-screen w-screen mt-[200px]">
            
            <TheBAR/>
            <div className="flex flex-row mx-auto w-[1200px]">

                <div className="mx-auto">
                <div>
       
       <div className="h-full w-full bg-gray-200 p-8 mb-12" style={{marginTop: loggedInUser.longitude?"1100px":"500px"}}>
               <div className="bg-white rounded-lg shadow-xl ">
                   <div className="absolute right-12 mt-4 rounded">
                       <div className="bg-white absolute right-0 w-40 py-2 mt-1 border border-gray-200 shadow-2xl" style={{display: "none"}}>
                       </div>
                   </div>
                   <div className="w-full h-[250px]">
                       <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" className="w-full h-full rounded-tl-lg rounded-tr-lg"/>
                   </div>
                   <div className="flex flex-col items-center -mt-20">
                       <img src={photoSrc} className="w-40 border-4 h-40 border-white rounded-full"/>
                       <div className="flex items-center space-x-2 mt-2">
                           <p className="text-2xl">{nidda.username}</p>
                       </div>
                       { nidda.org_name === '' ?
    <>
        <p className="text-gray-500">{capitalizeFirstLetter(nidda.role)}</p>
    </>
    :
    <>
        <p className="text-gray-500">{capitalizeFirstLetter(nidda.org_type)}</p>
    </>
}
                       
                   {!changeMode?<p className="text-sm">{nidda.about}</p>:<Textarea variant="faded" onChange={handleInputChange}
                    label="Description"
                    name="about"
                    placeholder="Enter your description"
                    description="Edit your Bio."
                    className="max-w-xs" defaultValue={nidda.about}/>}
                   </div>
                   <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
                   </div>
                   <div className="text-2xl flex justify-end">
                       <GeneralButton onClick={() => (
                    changethis(),
                    notify()
                )} text={<PencilSquareIcon className="w-6"/>} className="m-2"/>
                       </div>
               </div>
       
               <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                   <div className="w-full flex flex-row gap-4">
                       <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                           <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
                           <ul className="mt-2 text-gray-700">
                              <li className="flex border-y border-t-2 py-2">
                                <span className="font-bold flex-1 my-auto">First name:</span>
                                {!changeMode ? <span className="text-gray-700">{nidda.first_name}</span> : <Input className="max-w-[420px]" type="text" name="first_name" onChange={handleInputChange}  id="first_name" defaultValue={nidda.first_name} variant="underlined" size="sm" />}
                              </li>
                              <li className="flex border-y py-2">
                                <span className="font-bold flex-1 my-auto">Last name:</span>
                                {!changeMode ? <span className="text-gray-700">{nidda.last_name}</span> : <Input className="max-w-[420px]" onChange={handleInputChange}  type="text" name="last_name" id="last_name" defaultValue={nidda.last_name} variant="underlined" size="sm" />}
                              </li>
                               <li className="flex border-y py-2">
                                  <span className="font-bold flex-1 my-auto">Phone:</span>
                                  {!changeMode ? <span className="text-gray-700">{nidda.contact_number}</span> : <Input className="max-w-[420px]" name="contact_number" onChange={handleInputChange} variant="underlined" size="sm" defaultValue={nidda.contact_number} />}
                               </li>
                               <li className="flex border-y py-2">
                                  <span className="font-bold flex-1 my-auto">Email:</span>
                                  {!changeMode ? <span className="text-gray-700">{nidda.email}</span> : <Input className="max-w-[420px]"  id="email" name="email" onChange={handleInputChange}  defaultValue={nidda.email} variant="underlined" size="sm"/>}
                               </li>
                               <li className="flex border-y py-2">
                                   <span className="font-bold flex-1 my-auto">Gender:</span>
                                   <span className="text-gray-700 ">{capitalizeFirstLetter(nidda.gender)}</span>
                               </li>
                               <li className="flex border-y py-2">
                                   <span className="font-bold flex-1 my-auto">Area:</span>
                                   {!changeMode?<span className="text-gray-700">{nidda.city}</span>:<Input className="max-w-[420px]"  id="city" name="city" onChange={handleInputChange}  variant="underlined" size="sm" defaultValue={nidda.city}/>}
                               </li>
                               <li className="flex border-y py-2">
                                   <span className="font-bold flex-1 my-auto">Country:</span>
                                   {!changeMode?<span className="text-gray-700">{capitalizeFirstLetter(nidda.country)}</span>:<Input className="max-w-[420px]" onChange={handleInputChange}  name="country" id="country" variant="underlined" size="sm" defaultValue={capitalizeFirstLetter(nidda.country)}/>}
                               </li>
                               <li className="flex border-y py-2">
                                   <span className="font-bold flex-1 my-auto">Address:</span>
                                   {!changeMode?<span className="text-gray-700 ">{nidda.address}</span>:<Input className="max-w-[420px]" name="address" id="address" onChange={handleInputChange}  defaultValue={nidda.address} variant="underlined" size="sm"/>}
                               </li>

{nidda.role === "teacher" ? <>
                               <li className="flex border-y py-2">
                                   <span className="font-bold flex-1 my-auto">Subjects:</span>
                                   {!changeMode?<span className="text-gray-700 ">{nidda.subjects}</span>:<Input className="max-w-[420px]" name="subjects" id="subjects" onChange={handleInputChange}  defaultValue={nidda.subjects} variant="underlined" size="sm"/>}
                               </li>

                               
                               <li className="flex border-y py-2">
                                   <span className="font-bold flex-1 my-auto">Students:</span>
                                   {!changeMode?<span className="text-gray-700 ">{nidda.no_students}</span>:<Input className="max-w-[420px]" name="no_students" id="no_students" onChange={handleInputChange}  defaultValue={nidda.no_students} variant="underlined" size="sm"/>}
                               </li>

                               
                               <li className="flex border-y py-2">
                                   <span className="font-bold flex-1 my-auto">Sessions:</span>
                                   {!changeMode?<span className="text-gray-700 ">{nidda.no_sessions}</span>:<Input className="max-w-[420px]" name="no_sessions" id="no_sessions" onChange={handleInputChange}  defaultValue={nidda.no_sessions} variant="underlined" size="sm"/>}
                               </li>

                               </>:<></>}

                               
                               {nidda.role === "doctor" ? <>
                               <li className="flex border-y py-2">
                                   <span className="font-bold flex-1 my-auto">Specialty:</span>
                                   {!changeMode?<span className="text-gray-700 ">{nidda.specialty}</span>:<Input className="max-w-[420px]" id="specialty" name="specialty" onChange={handleInputChange}  defaultValue={nidda.specialty} variant="underlined" size="sm"/>}
                               </li>

                               
                               <li className="flex border-y py-2">
                                   <span className="font-bold flex-1 my-auto">Appointments:</span>
                                   {!changeMode?<span className="text-gray-700 ">{nidda.no_appointments}</span>:<Input className="max-w-[420px]" id="no_appointments" name="no_appointments" onChange={handleInputChange}  defaultValue={nidda.no_appointments} variant="underlined" size="sm"/>}
                               </li>

                               
                               <li className="flex border-y border-b-2 py-2">
                                   <span className="font-bold flex-1 my-auto">Clinic Address:</span>
                                   {!changeMode?<span className="text-gray-700 ">{nidda.clinic_address}</span>:<Input className="max-w-[420px]" id="clinic_address" name="clinic_address" onChange={handleInputChange}  defaultValue={nidda.clinic_address} variant="underlined" size="sm"/>}
                               </li>
                               <li className="flex border-y border-b-2 py-2">
                                   <span className="font-bold flex-1 my-auto">Clinic Area:</span>
                                   {!changeMode?<span className="text-gray-700 ">{nidda.clinic_area}</span>:<Input className="max-w-[420px]" id="clinic_area" name="clinic_area" onChange={handleInputChange}  defaultValue={nidda.clinic_area} variant="underlined" size="sm"/>}
                               </li>
                               <li className="flex border-y border-b-2 py-2">
                                   <span className="font-bold flex-1 my-auto">Clinic Governorate:</span>
                                   {!changeMode?<span className="text-gray-700 ">{nidda.clinic_governorate}</span>:<Input className="max-w-[420px]" id="clinic_governorate" name="clinic_governorate" onChange={handleInputChange}  defaultValue={nidda.clinic_governorate} variant="underlined" size="sm"/>}
                               </li>
                               </>:<></>}

                           </ul>
                       </div>
                       <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                           <h4 className="text-xl text-gray-900 font-bold">Pending Deliveries</h4>
                           <div className="relative px-4">
                               
       
                           {drivernidda.map(sn => (
                           <div key={drivernidda.ETA}> 
                           
                           <div className="flex items-center w-full my-6 -ml-1.5">
                                   <div className="w-1/12 z-10">
                                       <div className="w-3.5 h-3.5 bg-green-500 rounded-full"></div>
                                   </div>
                                   <div className="w-11/12">
                                       <p className="text-sm">{sn.driverName}</p>
                                       <p className="text-xs text-gray-500">{sn.ETA}</p>
                                   </div>
                               </div>
                           
                           </div>
                           ))}
       
                           </div>
                       </div>
                   </div>
                   
       
               </div>
       
               {loggedInUser.longitude?
                    !changeMode?<iframe src={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1818.421628697366!2d"+nidda.longitude+"!3d"+nidda.latitude+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714984628638!5m2!1sen!2seg"} className="bg-white rounded-lg shadow-xl "
                    width="100%" height="600"></iframe>:<TheMAP handleMapChange={handleMapChange} width={"100%"} long={nidda.longitude} lat={nidda.latitude} />:""}
       
               </div>
               </div>
                </div>

            </div>
            <ToastContainer/>
        </div>
    );
}
 
export default Donor;