import { Avatar } from "@nextui-org/react";
import { useState } from "react";
import TheBAR from "./TheBAR";
import {DateInput} from "@nextui-org/react";
import {parseAbsoluteToLocal} from "@internationalized/date";

var thisp = "text-3xl w-[290px]";
const Donor = () => {
    var [nigga] = useState(
        {name: 'Ahmed Ibrahim', email: "ahmoslamy@hotmail.com", phone: "01092408287", address: "Al Thawra, El Mokattam, Cairo Governorate 4414540", donorType: "Teacher", donorGender: "Male", id: 1}
);
    var [drivernigga] = useState(
        [{ETA: '2024-11-07T07:45:00Z', driverName: "Ahmed 3andaleeb", driver: "01092408287"},
         {ETA: '2024-12-10T07:28:00Z', driverName: "Omar 3andaleeb", driver: "01022608212"},
         {ETA: '2024-09-10T07:17:00Z', driverName: "Shaz 3andaleeb", driver: "01092285549"},
         {ETA: '2024-07-02T07:30:00Z', driverName: "Hamo 3andaleeb", driver: "01092267447"}
]);
    return (
        <div className="min-h-screen w-screen">
            <TheBAR/>
            <div className="flex flex-row ml-10">
                <div className>
                    <div className="text-4xl font-bold px-3"> Pending Deliveries </div>
                    <div>
                    {drivernigga.map(drivernigga => (
                    <div key={drivernigga.ETA}> 
                    <div className="text-2xl w-52 mx-auto">{drivernigga.driverName}</div>
                        <DateInput  defaultValue={parseAbsoluteToLocal(drivernigga.ETA)}/>
                    </div>
                    ))}
                    </div>
                </div>
                <div className="w-[1000px] ml-20">
                    <div className="grid grid-cols-3 gap-4 items-center" >   
                        <Avatar className="row-span-3 w-[85%] h-[80%] mx-auto" src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQoMB9EDQmmBFcCDocEi2IpdyTyw698gxJHPVus-UaCn1c0397j'/>
                    <p className={thisp}>{nigga.name}</p>
                    <p className={thisp}>{nigga.email}</p>
                    <p className={thisp}>{nigga.donorGender}</p>
                    <p className={thisp}>{nigga.phone}</p>
                    <p className={thisp}>{nigga.donorType}</p>
                    <p className={thisp}>{nigga.address}</p>
                </div>

                {nigga.donorType.includes("Doctor") ? <div className="flex flex-row">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.855933447735!2d31.321447549598684!3d30.012535899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f7e406772f5%3A0x4bfd4ca20c13262a!2sYour%20clinic!5e0!3m2!1sen!2seg!4v1714583676383!5m2!1sen!2seg" 
                    width="400" height="300"></iframe>
                    <div className="flex flex-col gap-12 my-auto">
                        <p className="w-54 text-3xl">
                            Working Hours:-
                        </p>
                        <p className="w-54 text-3xl">
                            Sunday-Thursday: 8:00 am → 10:00 pm
                        </p>
                        <p className="w-54 text-3xl">
                            No. of free appointments per week: 69
                        </p>
                    </div>
                </div> : <div className="flex flex-col gap-12 my-auto">
                        <p className="w-54 text-3xl">
                            Subjects: History, Humanities
                        </p>
                        <p className="w-54 text-3xl">
                             No. of pro bono classes: 77
                        </p>
                        <p className="w-54 text-3xl">
                            No. of private students: 69

                        </p>
                    </div>}


                   



            </div>
            </div>
        </div>
    );
}
 
export default Donor;