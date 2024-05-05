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
    
    <div className="object-center"> 
      
      <img src="data:image/jpeg;base64,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
      " className="rounded-full w-50 h-50   p-5" />
      
    </div>
    
    <div className="col-span-4 flex flex-col gap-4"> 
      {/* <div class="text-gray-800 flex flex-row gap-5 items-center"> */}
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