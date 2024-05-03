import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
  } from "@nextui-org/react";
  
import { Button } from "@nextui-org/react";

import React, { useState } from 'react';

  const DropDownTest = () => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedFilterOption, setselectedFilterOption] = useState(null);


    const filters = {
        Clothes: ['Age', 'Gender', 'Season'],
        Toys: ['Board Games', 'Stuffed', 'Dolls', 'Sports', 'Cars', 'Outdoor'],
        Food: ['Fresh', 'Canned', 'Baked' , 'Fruits & Vegetables'],
        Blood: ['Hospital', 'Governorate', 'Area'],
        Medical: ['Medical Devices' , 'Medical Equipment', 'Medication'],
        School: ['Books', 'Stationery']
      };
    return ( 

        <div className="flex flex-row ">
        <Dropdown>
        <DropdownTrigger>
          <Button 
            variant="bordered" 
          >
           {selectedOption || "Category"}  
          </Button>
        </DropdownTrigger>
        <DropdownMenu 
          aria-label="Action event example" 
          onAction={(key) => setSelectedOption(key)}
        >
        {Object.keys(filters).map((item) => (
            <DropdownItem key={item}>{item}</DropdownItem>
          ))}

        </DropdownMenu>
      </Dropdown>



      {selectedOption && (
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">
          {selectedFilterOption || "Filtered Category"}  
          </Button>
        </DropdownTrigger>
        <DropdownMenu 
          aria-label="Action event example" 
          onAction={(key) => setselectedFilterOption(key)}
        >
          {filters[selectedOption].map((item) => (
            <DropdownItem key={item}>{item}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    )}
      </div>


     );
}
 
export default DropDownTest;