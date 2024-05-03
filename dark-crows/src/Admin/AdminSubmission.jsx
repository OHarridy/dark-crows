import React, { useState } from 'react';
import Records from "./Records.jsx";
import setIsOpen from "./Record.jsx";
import SideBar from "./SideBar.jsx";
import AdminPicture from './AdminPicture.jsx';

const screenHeight = window.screen.height;
const screenWidth = window.screen.width;

function AdminSubmission(){
    const[totalSubmissions,setTotalSubmissions] = useState(0);
    const[unseenSubmissions,setUnseenSubmissions] = useState(0);
    

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
    var tmp = screenHeight/4 ;
    console.log(tmp);
    return (
        <div className="w-full flex flex-col">
            <div className='flex flex-row w-full'>
                <AdminPicture />
                <div className='w-full'>
                    
                    <div className="text-4xl text-center p-5">{where} Submissions</div>
                    
                </div>  
            
            </div>

            <div className='flex flex-row justify-between' style={{marginTop:`${tmp}px`}}>
                <SideBar />
                <div>
                    <div className='flex flex-row justify-end w-full'>
                       <div className='flex flex-col -space-x-4 space-y-3 mb-2'>
                            <span className=' mb-2'><span className='border-2 rounded-full py-1 px-2'>{totalSubmissions}</span> Submissions</span>
                            <div className='flex flex-col space-x-4'>
                                <span className='font-bold text-black mb-4'>
                                    <span className='border-2 rounded-full text-white bg-green-500 py-1 px-2'>
                                        {unseenSubmissions}
                                    </span> Unseen
                                </span>
            
                            </div>
                       </div>
                        <div className="toggle-container m-3 mt-10"  onClick={handleToggle}>
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
                    </div>
                    <Records hid={isToggled} isOrg={isOrg} setTotalSubmissions={setTotalSubmissions} setUnseenSubmissions={setUnseenSubmissions} totalSubmissions={totalSubmissions} unseenSubmissions={unseenSubmissions}/>
                </div>
            </div>
           
            

            
        {/**/}
        </div>
    );
}

export default AdminSubmission;