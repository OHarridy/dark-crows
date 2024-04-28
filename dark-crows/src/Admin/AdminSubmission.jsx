import React, { useState } from 'react';
import Records from "./Records";
import setIsOpen from "./Record.jsx";
import SideBar from "./SideBar.jsx";

function AdminSubmission(){
    const[isToggled,setToggle] = useState(false);
    const [where,setWhere] = useState("Organizations");
    function handleToggle(){
        setToggle(!isToggled);
        setWhere(where === "Organizations" ? "Donors" : "Organizations");
        setIsOrg(!isOrg);
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const [isOpen, setIsOpen] = useState(false);
    
    const [isOrg, setIsOrg] = useState(true);
    function setOrg(){
        setIsOrg(!isOrg);
    }

    return (
        <div className="w-full flex flex-col">
            

            <div className="text-4xl text-center p-5">{where} Submissions</div>
            <div className="toggle-container m-3 justify-items-stretch"  onClick={handleToggle}>
                <input type="checkbox" className="toggle-input"/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 142" className="toggle">
                    <path d="M71 142C31.7878 142 0 110.212 0 71C0 31.7878 31.7878 0 71 0C110.212 0 119 30 146 30C173 30 182 0 221 0C260 0 292 31.7878 292 71C292 110.212 260.212 142 221 142C181.788 142 173 112 146 112C119 112 110.212 142 71 142Z" className="toggle-background"></path>
                    <rect rx="6" height="64" width="12" y="39" x="64" className="toggle-icon on"></rect>
                    <path d="M221 91C232.046 91 241 82.0457 241 71C241 59.9543 232.046 51 221 51C209.954 51 201 59.9543 201 71C201 82.0457 209.954 91 221 91ZM221 103C238.673 103 253 88.6731 253 71C253 53.3269 238.673 39 221 39C203.327 39 189 53.3269 189 71C189 88.6731 203.327 103 221 103Z" fillRule="evenodd" className="toggle-icon off"></path>
                    <g filter="url('#goo')">
                    <rect fill="#fff" rx="29" height="58" width="116" y="42" x="13" className="toggle-circle-center"></rect>
                    <rect fill="#fff" rx="58" height="114" width="114" y="14" x="14" className="toggle-circle left"></rect>
                    <rect fill="#fff" rx="58" height="114" width="114" y="14" x="164" className="toggle-circle right"></rect>
                    </g>
                    <filter id="goo">
                    <feGaussianBlur stdDeviation="10" result="blur" in="SourceGraphic"></feGaussianBlur>
                    <feColorMatrix result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" mode="matrix" in="blur"></feColorMatrix>
                    </filter>
                </svg>
            </div>
            
            <div className='flex flex-row justify-between'>
                <SideBar />
                <Records hid={isToggled} isOrg={isOrg}/>
            </div>
            <div className="bg-green-500 text-white text-center p-4 absolute left-0 bottom-0 w-screen">
                <p>Contact Us: 123-456-7890</p>
                <p>Email: example@example.com</p>
                    <div className="flex justify-center space-x-4">
                        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
            </div>

            
        {/**/}
        </div>
    );
}

export default AdminSubmission;
