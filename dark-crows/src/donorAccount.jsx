import { Avatar, Input } from "@nextui-org/react";
import { useState } from "react";
import TheBAR from "./TheBAR";
import {DateInput} from "@nextui-org/react";
import {parseAbsoluteToLocal} from "@internationalized/date";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import { ToastContainer, toast } from "react-toastify";
var thisp = "text-3xl w-[290px]";
const Donor = () => {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); 
    var [nigga, setNigga] = useState(
        {username: loggedInUser.username, password:loggedInUser.password ,first_name: loggedInUser.first_name,last_name: loggedInUser.last_name, email: loggedInUser.email, contact_number: loggedInUser.contact_number,
             address: loggedInUser.address, country: loggedInUser.country,
             role: loggedInUser.role, gender: loggedInUser.gender, longitude:+loggedInUser.longitude, latitude:+loggedInUser.latitude}
);
    var [drivernigga] = useState(
        [{ETA: '2024-11-07T07:45:00Z', driverName: "Ahmed 3andaleeb", driver: "01092408287"},
         {ETA: '2024-12-10T07:28:00Z', driverName: "Omar 3andaleeb", driver: "01022608212"},
         {ETA: '2024-09-10T07:17:00Z', driverName: "Shaz 3andaleeb", driver: "01092285549"},
         {ETA: '2024-07-02T07:30:00Z', driverName: "Hamo 3andaleeb", driver: "01092267447"}
]);
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
  let currentTime = new Date();
  console.log(currentTime);
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
  });
  function handleInputChange(e){
    const value =e.target.value;
    const name = e.target.name;
    console.log(value);
      setInterim({
        ...interim,
        [name]: value
      }); 
  }
  const [changeMode, setChangeMode] = useState(false);
  function changethis(){
    
    setChangeMode(!changeMode)
    localStorage.setItem('loggedInUser', JSON.stringify(interim));
    loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); 
    setNigga(loggedInUser);
      console.log("ay7agacapitalneshofhaaaahhhh",JSON.parse(localStorage.getItem('loggedInUser')));

  }
  const fileDataUrl = localStorage.getItem('file');
  const [isVisible, setIsVisible] =useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  function notify(){
    toast.info("Driver has Arrived");}
    return (
        
        <div className="min-h-screen w-screen">
            
            <TheBAR/>
            <div className="flex flex-row ml-10">
                <div className>
                    <div className="text-4xl font-bold px-3"> Pending Deliveries </div>
                    <div>
                    {drivernigga.map(drivernigga => (
                    <div key={drivernigga.ETA}> 
                    <div className="text-2xl w-52 mx-auto">{drivernigga.driverName}</div>
                        <DateInput startContent="⠀⠀⠀⠀" endContent="⠀⠀⠀⠀" defaultValue={parseAbsoluteToLocal(drivernigga.ETA)} isReadOnly/>
                    </div>
                    ))}
                    </div>
                </div>



                <div className="w-[1200px] ml-20 border-large border-dotted rounded-lg border-blue-500">
                    <div className="grid grid-cols-3 gap-4 items-center">   
                        <Avatar className="row-span-5 w-[300px] h-[300px] mx-auto" 
                        src={fileDataUrl}/>
                    {changeMode?<Input id="first_name" name="first_name" onChange={handleInputChange} size="lg" type="text" variant={"flat"} placeholder="Name" defaultValue={nigga.first_name} />:<p className={thisp}>{nigga.first_name}</p>}
                    {changeMode?<Input id="last_name" name="last_name" onChange={handleInputChange} size="lg" type="text" variant={"flat"} placeholder="Name" defaultValue={nigga.last_name} />:<p className={thisp}>{nigga.last_name}</p>}
                    {changeMode?<Input id="email" name="email" onChange={handleInputChange} isRequired size="lg" type="email" variant={"flat"} placeholder="Email" defaultValue={nigga.email} />:<p className={thisp}>{nigga.email}</p>}
                    {changeMode?<Input id="gender" name="gender" onChange={handleInputChange} size="lg" type="text" variant={"flat"} placeholder="Gender" defaultValue={nigga.gender} />:<p className={thisp}>{nigga.gender}</p>}
                    {changeMode?<Input id="contact_number" name="contact_number" onChange={handleInputChange} size="lg" type="tel" variant={"flat"} placeholder="Phone" defaultValue={nigga.contact_number} />:<p className={thisp}>{nigga.contact_number}</p>}
                    {changeMode?<Input id="role" name="role" onChange={handleInputChange} isRequired size="lg" type="text" variant={"flat"} placeholder="Type" defaultValue={nigga.role} />:<p className={thisp}>{nigga.role}</p>}
                    {changeMode?<Input id="address" name="address" onChange={handleInputChange} isRequired size="lg" type="text" variant={"flat"} placeholder="Address" defaultValue={nigga.address} />:<p className={thisp}>{nigga.address}</p>}
                    {changeMode?<Input id="country" name="country" 
                    onChange={handleInputChange} isRequired size="lg" 
                    type="text" variant={"flat"} placeholder="Country" 
                    defaultValue={nigga.country} />:<p className={thisp}>{nigga.country}</p>}
                    {<p className={thisp}>{nigga.username}</p>}
                    {changeMode?<Input id="password" name="password" isRequired onChange={handleInputChange}
      placeholder="Password"
      defaultValue={nigga.password}
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
      
    />:<p className={thisp}>*****</p>}
                </div>

                {nigga.donorType === "Doctor" ? <div className="flex flex-row">
                {loggedInUser && loggedInUser.longitude?<iframe src={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1818.421628697366!2d"+nigga.longitude+"!3d"+nigga.latitude+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714984628638!5m2!1sen!2seg"} 
                    width="600" height="450"></iframe>:""}

                    <div className="flex flex-col gap-12 my-auto">
                        <p className="w-54 text-3xl">
                            Working Hours:-
                        </p>
                        <p className="w-54 text-3xl">
                            Sunday-Thursday: 8:00 am → 10:00 pm
                        </p>
                        <p className="w-54 text-3xl">
                            No. of free appointments per week: 69
                        </p>
                    </div>
                </div> : nigga.donorType === "Teacher"?<div className="flex flex-row">
                    {loggedInUser && loggedInUser.longitude?<iframe src={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1818.421628697366!2d"+nigga.longitude+"!3d"+nigga.latitude+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714984628638!5m2!1sen!2seg"} 
                    width="600" height="450"></iframe>:""}
                    <div className="grid grid-col-1 my-auto gap-24">
                        <p className="w-54 text-3xl">
                            Subjects: History, Humanities
                        </p>
                        <p className="w-54 text-3xl">
                             No. of pro bono classes: 77
                        </p>
                        <p className="w-54 text-3xl">
                            No. of private students: 69
                        </p>
                        
                    </div>
                    </div> : <div className="flex flex-row">
                    {loggedInUser && loggedInUser.longitude?<iframe src={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1818.421628697366!2d"+nigga.longitude+"!3d"+nigga.latitude+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714984628638!5m2!1sen!2seg"} 
                    width="600" height="450"></iframe>:""}
                </div> }
                <div className="w-full h-12 pl-[1100px]">
                <button className="w-[90px] h-[45px] bg-green-500 rounded-lg" 
                onClick={() => (
                    changethis(),
                    notify()
                )}
                >
                Edit
                </button> 
                </div>
                </div>
                  
            </div>
            <ToastContainer/>
        </div>
    );
}
 
export default Donor;