import {Tabs, Tab} from "@nextui-org/react";
import {useState} from 'react';

const CardProfile = () => {

  const [selectedTab, setSelectedTab] = useState('Donor');

function handleTabChange() {
  console.log(selectedTab);
}
    return (  
<div className=" h-auto flex items-left justify-center pb-4">
  
  <div className="w-3/4 grid grid-cols-5">
    
    <div className="object-center mt-12"> 
      
      <img src="https://identity-mag.com/wp-content/uploads/2015/01/269c791.jpg" className="rounded-full w-40 h-40 border border-black" />
      
    </div>
    
    <div className="col-span-4 flex flex-col gap-4"> 
      {/* <div class="text-gray-800 flex flex-row gap-5 items-center"> */}
      <br/>
      <br/><br/>
        <div className=" ext-gray-800 flex flex-row gap-5 items-center text-3xl font-bold  text-left">
         <a href="/"> Misr El Kheir </a>
        </div>
        
      
      <div className="text-gray-800 text-left leading-tight text-sm"> 
        
        Misr El Kheir Foundation (MEK) is a non-profit development organization established in 2007 with the aim of developing the Egyptian individual in a comprehensive way. Five main areas of human development were selected: health, education, scientific research, social solidarity and aspects of life.
        
        
      </div>
    
    </div>
    
  </div>
  
</div>
        
    );
}
 
export default CardProfile;