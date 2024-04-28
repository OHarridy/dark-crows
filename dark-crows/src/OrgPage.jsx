import CardProfile from "./CardProfile";
import MyButton from "./GeneralButton";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DonorRegistrationForm from "./DonorRegistrationForm";
const OrgPage = () => {

    
    return (  

        <div>
            <CardProfile/>
            <Link to="/DonorRegistrationForm"><MyButton text="create new post" /></Link>
        </div>
    );
}
 
export default OrgPage;