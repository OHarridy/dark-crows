import { Avatar, Input } from "@nextui-org/react";
import { useState, useEffect } from "react";
import TheBAR from "./TheBAR";
import TheMAP from "./TheMAP";
import {DateInput} from "@nextui-org/react";
import {parseAbsoluteToLocal} from "@internationalized/date";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import { ToastContainer, toast } from "react-toastify";
var thisp = "text-3xl w-[100%]";
const Donor = () => {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); 
    var [nidda, setnidda] = useState(
        {username: loggedInUser.username, password:loggedInUser.password ,first_name: loggedInUser.first_name,last_name: loggedInUser.last_name, email: loggedInUser.email, contact_number: loggedInUser.contact_number,
             address: loggedInUser.address, country: loggedInUser.country,
             role: loggedInUser.role, gender: loggedInUser.gender, longitude:+loggedInUser.longitude, latitude:+loggedInUser.latitude, no_appointments: loggedInUser.no_appointments, subjects: loggedInUser.subjects, no_students: loggedInUser.no_students, no_sessions: loggedInUser.no_sessions, document: loggedInUser.document, clinic_address: loggedInUser.clinic_address, org_name: loggedInUser.org_name, org_type: loggedInUser.org_type, about: loggedInUser.about, city: loggedInUser.city, state: loggedInUser.state, address_selection: loggedInUser.address_selection}
);
    var [drivernidda] = useState(
        [{ETA: '2024-05-10T19:57:00Z', driverName: "Ahmed 3andaleeb", driver: "01092408287"},
         {ETA: '2024-04-26T19:45:00Z', driverName: "Omar 3andaleeb", driver: "01022608212"},
         {ETA: '2024-09-10T07:17:00Z', driverName: "Shaz 3andaleeb", driver: "01092285549"},
         {ETA: '2024-07-02T07:30:00Z', driverName: "Hamo 3andaleeb", driver: "01092267447"}
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
  const fileDataUrl = localStorage.getItem('file');
  const [isVisible, setIsVisible] =useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  function notify(){
    toast.info("Driver has Arrived");}
    return (
        
        <div className="min-h-screen w-screen">
            
            <TheBAR/>
            <h2>{time.toLocaleTimeString()}</h2>
            <div className="flex flex-row ml-[0.5%]">
                <div className>
                    <div className="text-4xl font-bold px-[2%]"> Pending Deliveries </div>
                    <div>
                    {drivernidda.map(drivernidda => (
                    <div key={drivernidda.ETA}> 
                    <div className="text-2xl w-[60%] mx-auto">{drivernidda.driverName}</div>
                        <DateInput startContent="⠀⠀⠀⠀" endContent="⠀⠀⠀⠀" defaultValue={parseAbsoluteToLocal(drivernidda.ETA)} isReadOnly/>
                    </div>
                    ))}
                    </div>
                </div>

                <div className="w-[55.8%] ml-20 border-large border-dotted rounded-lg border-blue-500 ">
                    <div className="grid grid-cols-3 gap-4 items-center">   
                        <Avatar className="row-span-5 w-[250px] h-[250px] mx-auto"
                        src={fileDataUrl}/>
                    {changeMode?<Input id="first_name" name="first_name" onChange={handleInputChange} size="lg" type="text" variant={"flat"} placeholder="Name" defaultValue={nidda.first_name} />:<p className={thisp}>{nidda.first_name}</p>}
                    {changeMode?<Input id="last_name" name="last_name" onChange={handleInputChange} size="lg" type="text" variant={"flat"} placeholder="Name" defaultValue={nidda.last_name} />:<p className={thisp}>{nidda.last_name}</p>}
                    {changeMode?<Input id="email" name="email" onChange={handleInputChange} isRequired size="lg" type="email" variant={"flat"} placeholder="Email" defaultValue={nidda.email} />:<p className={thisp}>{nidda.email}</p>}
                    {changeMode?<Input id="gender" name="gender" onChange={handleInputChange} size="lg" type="text" variant={"flat"} placeholder="Gender" defaultValue={nidda.gender} />:<p className={thisp}>{nidda.gender}</p>}
                    {changeMode?<Input id="contact_number" name="contact_number" onChange={handleInputChange} size="lg" type="tel" variant={"flat"} placeholder="Phone" defaultValue={nidda.contact_number} />:<p className={thisp}>{nidda.contact_number}</p>}
                    {changeMode?<Input id="role" name="role" onChange={handleInputChange} isRequired size="lg" type="text" variant={"flat"} placeholder="Type" defaultValue={nidda.role} />:<p className={thisp}>{nidda.role}</p>}
                    {changeMode?<Input id="address" name="address" onChange={handleInputChange} isRequired size="lg" type="text" variant={"flat"} placeholder="Address" defaultValue={nidda.address} />:<p className={thisp}>{nidda.address}</p>}
                    {changeMode?<Input id="country" name="country" 
                    onChange={handleInputChange} isRequired size="lg" 
                    type="text" variant={"flat"} placeholder="Country" 
                    defaultValue={nidda.country} />:<p className={thisp}>{nidda.country}</p>}
                    {<p className={thisp}>{nidda.username}</p>}
                    {changeMode?<Input id="password" name="password" isRequired onChange={handleInputChange}
      placeholder="Password"
      defaultValue={nidda.password}
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

                {nidda.role === "doctor" ? 
                <div className="flex flex-row">
                {loggedInUser.longitude?
                    !changeMode?<iframe src={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1818.421628697366!2d"+nidda.longitude+"!3d"+nidda.latitude+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714984628638!5m2!1sen!2seg"} 
                    width="600" height="600"></iframe>:<TheMAP long={nidda.longitude} lat={nidda.latitude} handleMapChange={handleMapChange}/>:""}

                    <div className="flex flex-col gap-12 my-auto">
                        <p className="w-54 text-3xl">
                            Number of Appointments:{nidda.no_appointments}
                        </p>
                    </div>
                </div> : nidda.role === "teacher"?<div className="flex flex-row">
                {loggedInUser.longitude?
                    !changeMode?<iframe src={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1818.421628697366!2d"+nidda.longitude+"!3d"+nidda.latitude+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714984628638!5m2!1sen!2seg"} 
                    width="600" height="600"></iframe>:<TheMAP long={nidda.longitude} lat={nidda.latitude} handleMapChange={handleMapChange}/>:""}
                    <div className="grid grid-col-1 my-auto gap-24">
                        <p className="w-54 text-3xl">
                            Subjects: {nidda.subjects}
                        </p>
                        <p className="w-54 text-3xl">
                             No. of pro bono classes: {nidda.no_sessions}
                        </p>
                        <p className="w-54 text-3xl">
                            No. of private students: {nidda.no_students}
                        </p>
                        
                    </div>
                    </div> : <div className="flex flex-row">

                    {loggedInUser.longitude?
                    !changeMode?<iframe src={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1818.421628697366!2d"+nidda.longitude+"!3d"+nidda.latitude+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1714984628638!5m2!1sen!2seg"} 
                    width="600" height="600"></iframe>:<TheMAP long={nidda.longitude} lat={nidda.latitude} handleMapChangelong={handleMapChangelong} handleMapChangelat={handleMapChangelat}/>:""}




                    </div> }
                    <div className="w-full flex flex-col">
                      <button className="w-[90px] h-[45px] bg-green-500 rounded-lg self-end" 
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