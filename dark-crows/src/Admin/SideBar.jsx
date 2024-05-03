import React,{useState} from "react";

function SideBar(){
    return(
        <div className="flex flex-col shadow-xl border-r-2 border-t-2 absolute left-0 border-green-500" >
            <div className="hover:flex-shrink cursor-pointer hover:shadow-lg p-3 text-2xl">Home Page</div>
            <div className="hover:flex-shrink cursor-pointer hover:shadow-lg p-3 text-2xl">Donors</div>
            <div className="hover:flex-shrink cursor-pointer hover:shadow-lg p-3 text-2xl">Organizations</div>
            <div className="hover:flex-shrink cursor-pointer hover:shadow-lg p-3 text-2xl">Submissions</div>
            
        </div>
    );
}

export default SideBar;