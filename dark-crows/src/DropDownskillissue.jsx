import {Accordion, AccordionItem, CheckboxGroup, Checkbox} from "@nextui-org/react";

const DropDown = () => {
    return ( 

<Accordion  >
      <AccordionItem key="1" aria-label="Clothes" title="Clothes" className="w-[300px]">
        
      <CheckboxGroup>
      <Checkbox value="Age">Age</Checkbox>
      <Checkbox value="Gender">Gender</Checkbox>
      <Checkbox value="Season">Season</Checkbox>
    </CheckboxGroup>
        
      </AccordionItem>
      <AccordionItem key="2" title="Toys">
        
      <CheckboxGroup>
      <Checkbox value="Board Games">Board Games</Checkbox>
      <Checkbox value="Stuffed Toys">Stuffed Toys</Checkbox>
      <Checkbox value="Dolls">Dolls</Checkbox>
      <Checkbox value="Sports">Sports</Checkbox>
      <Checkbox value="Cars">Cars</Checkbox>
      <Checkbox value="Outdoor">Outdoor</Checkbox>
    </CheckboxGroup>


      </AccordionItem>
      <AccordionItem key="3" title="Food">  

      <CheckboxGroup>
      <Checkbox value="Fruits & Veggies">Fruits & Veggies</Checkbox>
      <Checkbox value="sydney">Fresh</Checkbox>
      <Checkbox value="london">Canned</Checkbox>
      <Checkbox value="tokyo">Baked</Checkbox>
    </CheckboxGroup>


      </AccordionItem>
      <AccordionItem key="4" title="Blood">  

<CheckboxGroup>
<Checkbox value="Hospital">Hospital</Checkbox>
<Checkbox value="Governorate">Governorate</Checkbox>
<Checkbox value="Area">Area</Checkbox>
</CheckboxGroup>


</AccordionItem>
<AccordionItem key="5" title="Medical">  

<CheckboxGroup>
<Checkbox value="Medical Devices">Medical Devices</Checkbox>
<Checkbox value="Medical Equipment">Medical Equipment</Checkbox>
<Checkbox value="Medication">Medication</Checkbox>
</CheckboxGroup>


</AccordionItem>
<AccordionItem key="6" title="School">  

<CheckboxGroup>
<Checkbox value="Books">Books</Checkbox>
<Checkbox value="Stationery">Stationery</Checkbox>
</CheckboxGroup>


</AccordionItem>
    </Accordion>


     );
}
 
export default DropDown;
