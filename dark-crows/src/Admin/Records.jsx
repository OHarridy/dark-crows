import React from "react";
import Record from "./Record.jsx";
import orgs from "./orgs.js";
import donors from "./donors.jsx";

function Records(props){

    
    return (
        <div style={{width:'70vw'}} className="text-center w-full">
            <div className={props.hid === false ? "" : "hidden"}>{orgs.map(Record)}</div>
            <div className={props.hid === true ? "" : "hidden"}>{donors.map(Record)}</div>
            
           
        </div>
    );
}

export default Records;
