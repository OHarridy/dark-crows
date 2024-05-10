import {Tabs, Tab} from "@nextui-org/react";
import {useState} from 'react';

const CardProfile = () => {

  const [selectedTab, setSelectedTab] = useState('Donor');

function handleTabChange() {
  console.log(selectedTab);
}

let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); 
const photoUrl = localStorage.getItem("photo");
var [org, setOrg] = useState(
    {username: loggedInUser.username, password:loggedInUser.password ,first_name: loggedInUser.first_name,last_name: loggedInUser.last_name, email: loggedInUser.email, contact_number: loggedInUser.contact_number,
         address: loggedInUser.address, country: loggedInUser.country, about: loggedInUser.about , org_name: loggedInUser.org_name,
         role: loggedInUser.role, gender: loggedInUser.gender, longitude:+loggedInUser.longitude, latitude:+loggedInUser.latitude}
); 
    return (  
<div className=" h-auto flex items-left justify-center pb-4">
  
  <div className="w-3/4 grid grid-cols-5">
    
    <div className="object-center mt-12"> 
      
      <img src={photoUrl} className="rounded-full w-40 h-40 border border-black" />
      
    </div>
    
    <div className="col-span-4 flex flex-col gap-4"> 
      {/* <div class="text-gray-800 flex flex-row gap-5 items-center"> */}
      <br/>
      <br/><br/>
        <div className=" ext-gray-800 flex flex-row gap-5 items-center text-3xl font-bold  text-left">
         {org.org_name}
        </div>
        
      
      <div className=" w-full text-gray-800 text-left leading-tight text-sm"> 
        {/* TODO adjust styling of org.about */}

        {org.org_name} is a non-profit development organization established in 2007 with the aim of developing the Egyptian individual in a comprehensive way. Five main areas of human development were selected: health, education, scientific research, social solidarity and aspects of life.
        
        
      </div>
    
    </div>
    
  </div>
  
</div>
        
    );
}
 
export default CardProfile;