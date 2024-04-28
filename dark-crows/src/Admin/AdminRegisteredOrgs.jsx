import React,{useState} from "react";
import Card from "./Card.jsx";
import "./adminToggle.css";
import donors from "./donors.jsx";
import Search from "./Search.jsx";
import AdminPicture from "./AdminPicture.jsx";


function AdminRegisteredOrgs(){
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-between">
                <AdminPicture />
                <Search />
                
            </div>
            <div className="text-4xl p-5">Donors</div>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    
                    
                </div>
                <div style={{width:'70vw'}} className="flex-row flex flex-wrap justify-center">
                    {donors.map(Card)}
                </div>

            </div>
        </div>
    );
}

export default AdminRegisteredOrgs;