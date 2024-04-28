import CardProfile from "./CardProfile";
import MyButton from "./generalButton";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DonorRegistrationForm from "./DonorRegistrationForm";
import ThisThing from "./singleThing";
const OrgPage = () => {

    
    return (  
    <div className="register-page-container">
        <div>
            <CardProfile/>
            <Link to="/DonorRegistrationForm"><MyButton text="create new post" /></Link>
            
        </div>

        <div><ThisThing/></div>

        </div>
    );
}
 
export default OrgPage;