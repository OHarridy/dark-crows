import { Avatar, Input } from "@nextui-org/react";
import { useState, useEffect } from "react";
import TheBAR from "./TheBAR";
import GeneralButton from "./generalButton";
import { PencilSquareIcon  } from '@heroicons/react/20/solid'
import { ToastContainer, toast } from "react-toastify";
import ProfileCard from "./ProfileCard";
import {Textarea} from "@nextui-org/react";
var thisp = "text-3xl w-[200px] break-words";
const Donor = () => {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); 
    var [info, setinfo] = useState(
        {username: "Dr.John", password:loggedInUser.password ,first_name: "John",last_name: "Micheal", email: "John.micheal@gmail.com", contact_number: "0101731557",
             address: "187 Sadat axis", country: "USA",
             role: "doctor", gender: "Male", longitude:+loggedInUser.longitude, latitude:+loggedInUser.latitude, no_appointments: "7", subjects: loggedInUser.subjects, no_students: loggedInUser.no_students, no_sessions: loggedInUser.no_sessions, document: loggedInUser.document, clinic_address: "194 Northern 90", org_name: loggedInUser.org_name, org_type: loggedInUser.org_type, about: "Hey There! My name is Dr John Micheal, and as the anme implies, i am a pro-bono doctor! Ive always had a passion for helping people and my clinic is open for all thos in need mondays through sunday through thursday! ", city: "New York", state: "California", address_selection: loggedInUser.address_selection, specialty: "Orthodontist"}
);
    var [driverinfo] = useState(
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
    setinfo(loggedInUser);

  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  const photoSrc = "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*";
  const [isVisible, setIsVisible] =useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  function notify(){
    toast.info("Driver has Arrived");}
    return (
        
        <div className="min-h-screen w-screen">
            
            <TheBAR/>
            <div className="flex flex-row ml-[0.5%]">

                <div className="mx-auto">
                <div>
       
       <div className="h-full w-full bg-gray-200 p-8 mt-[800px] mb-12">
               <div className="bg-white rounded-lg shadow-xl ">
                   <div className="absolute right-12 mt-4 rounded">
                       <div className="bg-white absolute right-0 w-40 py-2 mt-1 border border-gray-200 shadow-2xl" style={{display: "none"}}>
                       </div>
                   </div>
                   <div className="w-full h-[250px]">
                       <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" className="w-full h-full rounded-tl-lg rounded-tr-lg"/>
                   </div>
                   <div className="flex flex-col items-center -mt-20">
                       <img src={photoSrc} className="w-40 border-4 border-white rounded-full"/>
                       <div className="flex items-center space-x-2 mt-2">
                           <p className="text-2xl">{info.username}</p>
                       </div>
       <p className="text-gray-500">Pro-Bono Doctor</p>
                       
                                   {!changeMode?<p className="text-sm w-[700PX] mt-3 mb-3  break-words">{info.about}</p>:<Textarea variant="faded"
      label="Description"
      placeholder="Enter your description"
      description="Edit your Bio."
      className="max-w-xs" defaultValue={info.about}/>}
                   </div>
                   <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
                   </div>
                   <div className="text-2xl flex justify-end">
                       {/* <GeneralButton onClick={() => (
                    changethis(),
                    notify()
                )} text={<PencilSquareIcon className="w-6"/>} className="m-2"/> */}
                       </div>
               </div>
       
               <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                   <div className="w-full flex flex-row gap-4">
                       <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                           <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
                           <ul className="mt-2 text-gray-700">
                              <li className="flex border-y border-t-2 py-2">
                                <span className="font-bold flex-1 my-auto">First name:</span>
                                {!changeMode ? <span className="text-gray-700">{info.first_name}</span> : <Input className="max-w-[420px]" type="text" name="first_name" onChange={handleInputChange}  id="first_name" defaultValue={info.first_name} variant="underlined" size="sm" />}
                              </li>
                              <li className="flex border-y py-2">
                                <span className="font-bold flex-1 my-auto">Last name:</span>
                                {!changeMode ? <span className="text-gray-700">{info.last_name}</span> : <Input className="max-w-[420px]" onChange={handleInputChange}  type="text" name="last_name" id="last_name" defaultValue={info.last_name} variant="underlined" size="sm" />}
                              </li>
                               <li className="flex border-y py-2">
                                  <span className="font-bold flex-1 my-auto">Phone:</span>
                                  {!changeMode ? <span className="text-gray-700">{info.contact_number}</span> : <Input className="max-w-[420px]" name="contact_number" onChange={handleInputChange} variant="underlined" size="sm" defaultValue={info.contact_number} />}
                               </li>
                               <li className="flex border-y py-2">
                                  <span className="font-bold flex-1 my-auto">Email:</span>
                                  {!changeMode ? <span className="text-gray-700">{info.email}</span> : <Input className="max-w-[420px]"  id="email" name="email" onChange={handleInputChange}  defaultValue={info.email} variant="underlined" size="sm"/>}
                               </li>
                               <li className="flex border-y py-2">
                                   <span className="font-bold flex-1 my-auto">Gender:</span>
                                   <span className="text-gray-700 ">{capitalizeFirstLetter(info.gender)}</span>
                               </li>
                               <li className="flex border-y py-2">
                                   <span className="font-bold flex-1 my-auto">Area:</span>
                                   {!changeMode?<span className="text-gray-700">{info.city}</span>:<Input className="max-w-[420px]"  id="city" name="city" onChange={handleInputChange}  variant="underlined" size="sm" defaultValue={info.city}/>}
                               </li>
                               <li className="flex border-y py-2">
                                   <span className="font-bold flex-1 my-auto">Country:</span>
                                   {!changeMode?<span className="text-gray-700">{capitalizeFirstLetter(info.country)}</span>:<Input className="max-w-[420px]" onChange={handleInputChange}  name="country" id="country" variant="underlined" size="sm" defaultValue={capitalizeFirstLetter(info.country)}/>}
                               </li>
                               <li className="flex border-y py-2">
                                   <span className="font-bold flex-1 my-auto">Address:</span>
                                   {!changeMode?<span className="text-gray-700 ">{info.address}</span>:<Input className="max-w-[420px]" name="address" id="address" onChange={handleInputChange}  defaultValue={info.address} variant="underlined" size="sm"/>}
                               </li>

{info.role === "teacher" ? <>
                               <li className="flex border-y py-2">
                                   <span className="font-bold flex-1 my-auto">Subjects:</span>
                                   {!changeMode?<span className="text-gray-700 ">{info.subjects}</span>:<Input className="max-w-[420px]" name="subjects" id="subjects" onChange={handleInputChange}  defaultValue={info.subjects} variant="underlined" size="sm"/>}
                               </li>

                               
                               <li className="flex border-y py-2">
                                   <span className="font-bold flex-1 my-auto">Students:</span>
                                   {!changeMode?<span className="text-gray-700 ">{info.no_students}</span>:<Input className="max-w-[420px]" name="no_students" id="no_students" onChange={handleInputChange}  defaultValue={info.no_students} variant="underlined" size="sm"/>}
                               </li>

                               
                               <li className="flex border-y py-2">
                                   <span className="font-bold flex-1 my-auto">Sessions:</span>
                                   {!changeMode?<span className="text-gray-700 ">{info.no_sessions}</span>:<Input className="max-w-[420px]" name="no_sessions" id="no_sessions" onChange={handleInputChange}  defaultValue={info.no_sessions} variant="underlined" size="sm"/>}
                               </li>

                               </>:<></>}

                               
                               {info.role === "doctor" ? <>
                               <li className="flex border-y py-2">
                                   <span className="font-bold flex-1 my-auto">Specialty:</span>
                                   {!changeMode?<span className="text-gray-700 ">{info.specialty}</span>:<Input className="max-w-[420px]" id="specialty" name="specialty" onChange={handleInputChange}  defaultValue={info.specialty} variant="underlined" size="sm"/>}
                               </li>

                               
                               <li className="flex border-y py-2">
                                   <span className="font-bold flex-1 my-auto">Appointments:</span>
                                   {!changeMode?<span className="text-gray-700 ">{info.no_appointments}</span>:<Input className="max-w-[420px]" id="no_appointments" name="no_appointments" onChange={handleInputChange}  defaultValue={info.no_appointments} variant="underlined" size="sm"/>}
                               </li>

                               
                               <li className="flex border-y border-b-2 py-2">
                                   <span className="font-bold flex-1 my-auto">Clinic Address:</span>
                                   {!changeMode?<span className="text-gray-700 ">{info.clinic_address}</span>:<Input className="max-w-[420px]" id="clinic_address" name="clinic_address" onChange={handleInputChange}  defaultValue={info.clinic_address} variant="underlined" size="sm"/>}
                               </li>
                               </>:<></>}

                           </ul>
                       </div>
                       <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                           <h4 className="text-xl text-gray-900 font-bold">Completed Deliveries</h4>
                           <div className="relative px-4">
                               
       
                           {driverinfo.map(sn => (
                           <div key={driverinfo.ETA}> 
                           
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
       
               <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13816.535839230537!2d31.434103619311546!3d30.03301445684388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1715456458622!5m2!1sen!2seg" 
               width="100%" height="400px" style={{border:"0"}} className="rounded-lg shadow-xl"></iframe>
       
               </div>
               </div>
                </div>

            </div>
            <ToastContainer/>
        </div>
    );
}
 
export default Donor;