import React, { useState } from 'react';
import Records from "./Records.jsx";
import setIsOpen from "./Record.jsx";
import SideBar from "./SideBar.jsx";
import AdminPicture from './AdminPicture.jsx';
import orgs from "./orgs.js";
import donors from './donors.jsx';
import AdminNavbar from './AdminNavbar.jsx';
import TheBAR from "../TheBAR.jsx";

const screenHeight = window.screen.height;
const screenWidth = window.screen.width;

function AdminSubmission(){
    const[totalSubmissions,setTotalSubmissions] = useState(orgs.length);
    const[unseenSubmissions,setUnseenSubmissions] = useState(orgs.length);

    const[totalOrgs,setTotalOrgs] = useState(orgs.length);
    const[totalDonors,setTotalDonors] = useState(donors.length);
    
    const[unseenOrgs,setUnseenOrgs] = useState(orgs.length);
    const[unseenDonors,setUnseenDonors] = useState(donors.length);
    

    const[isToggled,setToggle] = useState(false);
    const [where,setWhere] = useState("Organizations");
    function handleToggle(){
        setToggle(!isToggled);
        setWhere(where === "Organizations" ? "Donors" : "Organizations");
        setIsOrg(!isOrg);
        if(!isToggled){
            setTotalSubmissions(totalDonors);
            setUnseenSubmissions(unseenDonors);
        }else{
            setTotalSubmissions(totalOrgs);
            setUnseenSubmissions(unseenOrgs);
        }
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const setUnseen = () => {
        if(isToggled){
            setUnseenSubmissions(unseenDonors-1);
            setUnseenDonors(unseenDonors-1);
        }else{
            setUnseenSubmissions(unseenOrgs-1);
            setUnseenOrgs(unseenOrgs-1);
        }
    };

    const [isOpen, setIsOpen] = useState(false);
    
    const [isOrg, setIsOrg] = useState(true);
    function setOrg(){
        setIsOrg(!isOrg);
    }

    const setTotalWhenAccept = () => {
        if(isToggled){
            setTotalSubmissions(totalDonors-1);
            setTotalDonors(totalDonors-1);
        }else{
            setTotalSubmissions(totalOrgs-1);
            setTotalOrgs(totalOrgs-1);
        }
    }

    const setTotal = (x) => {
        setTotalSubmissions(x);
    }

    var tmp = screenHeight/15 ;
    
    return (
        <div className='w-screen h-screen'>
            
            <AdminNavbar />
            <div className="w-full flex flex-col text-center justify-center border-2">
            <div className='flex flex-row justify-center'>
                <p className='text-3xl mt-5 font-bold  w-fit p-3 rounded-lg text-gray-700'>{where}</p>
                </div>
                <div className='flex flex-row justify-between my-7' style={{marginTop:``}}>
                    
                    <div className='w-full'>
                        <div className='flex flex-row justify-end w-5/6'>
                        <div className='flex flex-col -space-x-20 space-y-3 mb-2'>
                                <span className=' mb-2'><span className='border-2 rounded-full py-1 px-2'>{totalSubmissions}</span> Submissions</span>
                                <div className='flex flex-col space-x-4'>
                                    <span className='font-bold text-black mb-4'>
                                        <span className='border-2 rounded-full text-white bg-green-500 py-1 px-2'>
                                            {unseenSubmissions}
                                        </span> Unseen
                                    </span>
                
                                </div>
                        </div>
                            <div className="toggle-container m-3 mt-10 border-10 border-red-500"  onClick={handleToggle}>
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
                        <div className='flex flex-row justify-center w-full'><Records hid={isToggled} isOrg={isOrg} unseen={unseenSubmissions} setTotalWhenAccept={setTotalWhenAccept} setUnseen={setUnseen} setTotal={setTotal}/></div>
                    </div>
                </div>
            
                

                
            {/**/}
            </div>
        </div>
    );
}

export default AdminSubmission;