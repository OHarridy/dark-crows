import React from "react";
import orgs from "./orgs.js";
import "./adminToggle.css";

function Record(org){

    const [hideVariable, sethideVariable] = React.useState("");
    const [bold, setNotBold] = React.useState("font-bold");
    

    const handleAcceptClick = () => {
    if (window.confirm("Are you sure you want to Accept?")) {
        sethideVariable("hidden");
    } else {
        
       
    }
    };
    const handleRejectClick = () => {
        if (window.confirm("Are you sure you want to Reject?")) {
            sethideVariable("hidden");
            
        } else {
           
            
        }
    };

    function openProfile(){
        setNotBold("");
    }

    return (
        <div onClick={openProfile} className={`flex flex-row ${hideVariable} justify-between border-2 border-green-500 text-black hover:cursor-pointer hover:shadow-xl transition duration-200 ease-in-out py-2 px-4 rounded`}>
            <div className="flex flex-col">
                <p className={` ${bold} text-xl`}>{org.name}</p>
                <p className="text-sm">{org.description}</p>
            </div>
            <a className="Btn" href="./../MS2 SE" download="MS2 SE">
                <svg className="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
                <span className="icon2"></span>
                <span className="tooltip">Download</span>
            </a>
            <div className=" w-1/4 border-2 border-indigo-600 flex justify-between">
                <button onClick={handleAcceptClick} className="text-xs inline-block bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">Accept</button>
                <button onClick={handleRejectClick} className="text-xs inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reject</button>
            </div>
        </div>
    );
}

export default Record;
