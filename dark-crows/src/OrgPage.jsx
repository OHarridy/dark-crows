import CardProfile from "./CardProfile";
import MyButton from "./generalButton";
import CardOrgIbra from "./CardOrgIbra";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {Tabs, Tab} from "@nextui-org/react";
import { useState } from "react";
import MixedOrgPosts from "./MixedOrgPosts";
import FulfilledOrgPosts from "./FulfilledOrgPosts";

import ThisThing from "./singleThing";
import Home from "./mainPage";
//TODO : the create button must be at the botmom right corner and always on display even if i scroll
//TODO : when clicking on the card i want to see the form but the indo is in field 
//TODO : if u decide to take data from form and create new posts with it using a FUNCTION & NOT conditional rendering, research and utilize "useEffect()"  
//TODO: sort the cards to make the most recent org appear first
const OrgPage = () => {

 const [selectedTab, setSelectedTab] = useState('Donor');

function handleTabChange() {
  console.log(selectedTab);
}

    
    return (  
    <div className="register-page-container">
        <div>
            <CardProfile/>
            
        </div>

        <div className="register-page-slider-container">
  <div className="flex flex-wrap gap-4">
        <Tabs key="success" color="success" aria-label="Tabs colors" radius="full" selectedKey={selectedTab}  onSelectionChange={setSelectedTab} onClick={handleTabChange}>
          <Tab key="All" title="All" id= "All" value="All"/>
          <Tab key="Fulfilled" title="Fulfilled" id="Fulfilled" value="Fulfilled"/>
          <Tab key="Non-fulfilled" title="Non-fulfilled" id="Non-fulfilled" value="Non-fulfilled"/>
        </Tabs>

        </div>
        </div>

        <div className="pt-10">

            <h1>{selectedTab}</h1>
            <div className="pb-10 ">
            <hr className="myHr"/>
            </div>
            { (selectedTab === "All"  )? (
            <MixedOrgPosts/>
            ) : (selectedTab === "Fulfilled")? (
            <FulfilledOrgPosts/>
            ) : <CardOrgIbra/>}




            
            </div>

        </div>
    );
}
 
export default OrgPage;