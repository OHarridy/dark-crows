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
        <div className=" ext-gray-800 flex flex-row gap-5 items-center text-2xl text-left">
          Misr El Kheir
        </div>



        
          {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg> */}
        
      
      
      
      
      <div className="text-gray-800 text-left leading-tight text-sm"> 
        
        Misr El Kheir Foundation (MEK) is a non-profit development organization established in 2007 with the aim of developing the Egyptian individual in a comprehensive way. Five main areas of human development were selected: health, education, scientific research, social solidarity and aspects of life.
        
        
      </div>
    
    </div>
    
  </div>
  
</div>
        
    );
}
 
export default CardProfile;