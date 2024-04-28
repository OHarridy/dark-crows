import {Tabs, Tab} from "@nextui-org/react";
import DonorRegistrationForm from "./DonorRegistrationForm";

const RegisterPage = () => {
    return ( 
        <div className="register-page-container">
        <div className="flex flex-wrap gap-4">
        <Tabs key="success" color="success" aria-label="Tabs colors" radius="full">
          <Tab key="Donor" title="Donor"/>
          <Tab key="Org" title="Organization"/>
        </Tabs>
        </div>

<div className="">
    <DonorRegistrationForm/>
    </div>
    





        </div>


     );
}
 
export default RegisterPage;