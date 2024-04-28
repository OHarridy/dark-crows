import CardProfile from "./CardProfile";
import MyButton from "./generalButton";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import ThisThing from "./singleThing";
import Home from "./mainPage";
//TODO : the create button must be at the botmom right corner and always on display even if i scroll
//TODO : when clicking on the card i want to see the form but the indo is in field 
//TODO : if u decide to take data from form and create new posts with it using a FUNCTION & NOT conditional rendering, research and utilize "useEffect()"  
//TODO: sort the cards to make the most recent org appear first
const OrgPage = () => {

    
    return (  
    <div className="register-page-container">
        <div>
            <CardProfile/>
            
        </div>

        <div><ThisThing/></div>

        </div>
    );
}
 
export default OrgPage;