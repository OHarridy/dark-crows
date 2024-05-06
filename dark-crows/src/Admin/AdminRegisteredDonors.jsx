import React,{useState} from "react";
import Card from "./Card.jsx";
import "./adminToggle.css";
import donors from "./donors.jsx";
import Search from "./Search.jsx";
import AdminPicture from "./AdminPicture.jsx";
import TheBAR from "../TheBAR.jsx";
import AdminNavbar from "./AdminNavbar.jsx";
import List from "./List.jsx";


function AdminRegisteredDonors(){
    return (
        <div className='flex flex-row mt-5 justify-center w-full'><div className="w-2/3"><List /></div> </div>
    );
}

export default AdminRegisteredDonors;