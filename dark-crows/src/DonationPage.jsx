import { useState } from "react";
import TheBAR from "./TheBAR";

const DonationPage = () => {
    var [nigga] = useState(
        {name: 'Ibra Fundraising', phone: "01092408287", address: "Al Thawra, El Mokattam, Cairo Governorate 4414540", orgType: "Refugees & Impoverished", id: 1}
);

    return (
        <div className="min-h-screen w-screen">
            <TheBAR/>
            
        </div>
    );
}
 
export default DonationPage;