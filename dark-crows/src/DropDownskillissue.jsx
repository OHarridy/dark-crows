import {Accordion, AccordionItem, CheckboxGroup, Checkbox, Input, RadioGroup, Radio} from "@nextui-org/react";
import { useState } from "react";
import PropTypes from 'prop-types';
const DropDownniiga = (props) => {

  DropDownniiga.propTypes = {
    setArea: PropTypes.func,
    setCategory: PropTypes.func,
    setGender: PropTypes.func,
    setAge: PropTypes.func,
    setSeason: PropTypes.func,
    setHospital: PropTypes.func,
    setGovernorate: PropTypes.func,
    setType: PropTypes.func,
    setSubject: PropTypes.func,
    setSpecial: PropTypes.func,
};
function deletethis (){
  props.setArea("");
  props.setCategory("");
  props.setGender("");
  props.setAge(0);
  props.setSeason("");
  props.setHospital("");
  props.setGovernorate("");
  props.setSubject("");
  props.setSpecial("");
}
    return (
<Accordion className="w-[200px] fixed ml-4 mt-24 ">
  <AccordionItem key="0" className="w-[0px] h-[0px]"
  isDisabled
  isCompact
  hideIndicator
  />
      <AccordionItem key="1" aria-label="Clothes" title="Clothes" className="w-[200px]"
      onFocusChange={() =>  (deletethis(),props.setType("Clothes"), console.log("Clothes"))}>
        
      <Input  className="my-2"
              key="Age"
              type="number"
              label="Age"
              defaultValue="0"
              min="0"
              max="90"
              labelPlacement="inside"
              onChange={(event) => {
                const value = Number(event.target.value);
                props.setAge(value);
                console.log(value);
            }}/>
      <RadioGroup
      label="Season"
      orientation="horizontal"
      onChange={(event) => (props.setSeason(event.target.value), console.log(event.target.value))}>
      <Radio value="Spring">Spring</Radio>
      <Radio value="Summer">Summer</Radio>
      <Radio value="Winter">Winter</Radio>
      <Radio value="Autumn">Autumn</Radio>
    </RadioGroup>
      <RadioGroup
      label="Gender"
      orientation="horizontal"
      onChange={(event) => (props.setGender(event.target.value), console.log(event.target.value))}
    >
      <Radio value="Male">Male</Radio>
      <Radio value="Female">Female</Radio>
    </RadioGroup>
        
      </AccordionItem>
      <AccordionItem key="2" title="Toys" className="w-[200px]"
      onFocusChange={() => (deletethis(),props.setType("Toys"), console.log("Toys"))}>
      <Input  className="my-2"
              key="Age"
              type="number"
              label="Age"
              min="0"
              max="90"
              labelPlacement="inside"
              onChange={(event) => (props.setAge(event.target.value), console.log(event.target.value))}/>
      <RadioGroup
      label="Gender"
      orientation="horizontal"
      onChange={(event) => (props.setGender(event.target.value), console.log(event.target.value))}
    >
      <Radio className="mb-2" value="Male">Male</Radio>
      <Radio className="mb-2" value="Female">Female</Radio>
    </RadioGroup>
      <CheckboxGroup label="Category" onChange={(event) => (props.setCategory(event), console.log(event))}>
      <Checkbox value="Board Games">Board Games</Checkbox>
      <Checkbox value="Stuffed Toys">Stuffed Toys</Checkbox>
      <Checkbox value="Dolls">Dolls</Checkbox>
      <Checkbox value="Sports">Sports</Checkbox>
      <Checkbox value="Cars">Cars</Checkbox>
      <Checkbox value="Outdoor">Outdoor</Checkbox>
    </CheckboxGroup>


      </AccordionItem>
      <AccordionItem key="3" title="Food" className="w-[200px]"
      onFocusChange={() => (deletethis(),props.setType("Food"), console.log("Food"))}>  

      <CheckboxGroup onChange={(event) => (props.setCategory(event), console.log(event))}>
      <Checkbox value="Fruits and Vegetables">Fruits and Vegetables</Checkbox>
      <Checkbox value="Fresh Meals">Fresh Meals</Checkbox>
      <Checkbox value="Canned Foods">Canned Foods</Checkbox>
      <Checkbox value="Baked Goods">Baked Goods</Checkbox>
    </CheckboxGroup>


      </AccordionItem>
      <AccordionItem key="4" title="Blood" className="w-[200px]"
      onFocusChange={() => (deletethis(),props.setType("Blood"), console.log("Blood"))}>  

<Input        className="my-2"
              key="Area"
              type="text"
              label="Area"
              labelPlacement="inside"
              onChange={(event) => (props.setArea(event.target.value), console.log(event.target.value))}/>
<Input        className="my-2"
              key="Governorate"
              type="text"
              label="Governorate"
              labelPlacement="inside"
              onChange={(event) => (props.setGovernorate(event.target.value), console.log(event.target.value))}/>
<Input        className="my-2"
              key="Hospital"
              type="text"
              label="Hospital"
              labelPlacement="inside"
              onChange={(event) => (props.setHospital(event.target.value), console.log(event.target.value))}/>


</AccordionItem>
<AccordionItem key="5" title="Medical" className="w-[200px]"
onFocusChange={() => (deletethis(),props.setType("Medical"), console.log("Medical"))}> 

<CheckboxGroup onChange={(event) => (props.setCategory(event), console.log(event))}>
<Checkbox value="Medical Devices">Medical Devices</Checkbox>
<Checkbox value="Medical Equipment">Medical Equipment</Checkbox>
<Checkbox value="Medication">Medication</Checkbox>
</CheckboxGroup>


</AccordionItem>
<AccordionItem key="6" title="School" className="w-[200px]"
onFocusChange={() => (deletethis(),props.setType("School"), console.log("School"))}>  

<CheckboxGroup onChange={(event) => (props.setCategory(event), console.log(event))}>
<Checkbox value="Books">Books</Checkbox>
<Checkbox value="Stationery">Stationery</Checkbox>
</CheckboxGroup>


</AccordionItem>


<AccordionItem key="7" title="Teaching" className="w-[200px]"
onFocusChange={() => (deletethis(),props.setType("Teaching"), console.log("Teaching"))}>  

<Input        className="my-2"
              key="Area"
              type="text"
              label="Area"
              labelPlacement="inside"
              onChange={(event) => (props.setArea(event.target.value), console.log(event.target.value))}/>
<Input        className="my-2"
              key="Governorate"
              type="text"
              label="Governorate"
              labelPlacement="inside"
              onChange={(event) => (props.setGovernorate(event.target.value), console.log(event.target.value))}/>
<Input        className="my-2"
              key="Subject"
              type="text"
              label="Subject"
              labelPlacement="inside"
              onChange={(event) => (props.setSubject(event.target.value), console.log(event.target.value))}/>

</AccordionItem>

<AccordionItem key="8" title="Doctoring" className="w-[200px]"
onFocusChange={() => (deletethis(),props.setType("Doctoring"), console.log("Doctoring"))}>  

<Input        className="my-2"
              key="Medical Specialty"
              type="text"
              label="Medical Specialty"
              labelPlacement="inside"
              onChange={(event) => (props.setSpecial(event.target.value), console.log(event.target.value))}/>
<Input        className="my-2"
              key="Governorate"
              type="text"
              label="Governorate"
              labelPlacement="inside"
              onChange={(event) => (props.setGovernorate(event.target.value), console.log(event.target.value))}/>
<Input        className="my-2"
              key="Area"
              type="text"
              label="Area"
              labelPlacement="inside"
              onChange={(event) => (props.setArea(event.target.value), console.log(event.target.value))}/>
<Input        className="my-2"
              key="Organization Name"
              type="text"
              label="Organization Name"
              labelPlacement="inside"
              />
</AccordionItem>
    </Accordion>
);
}
export default DropDownniiga;