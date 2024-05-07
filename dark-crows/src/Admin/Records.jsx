import React from "react";
import Record from "./Record.jsx";
import orgs from "./orgs.js";
import donors from "./donors.jsx";


function Records(props){
    
    
    return (
        <div style={{width:'70vw'}} className="text-center w-full">
            
            
            <div className={props.hid === false ? "" : "hidden"}>{orgs.map((rec,index) => 
            (<Record key={index} name={rec.name} description={rec.description} img={rec.img} isOrg={props.isOrg} 
            setUnseen={props.setUnseen} unseen={props.unseen} setTotalWhenAccept={props.setTotalWhenAccept}
            
            />))}</div>
            
            <div className={props.hid === true ? "" : "hidden"}>{donors.map((rec,index) => 
            (<Record key={index} name={rec.name} description={rec.description} img={rec.img} isOrg={props.isOrg}
            setUnseen={props.setUnseen} unseen={props.unseen} setTotalWhenAccept={props.setTotalWhenAccept}
            
            />))}</div>
            
           
        </div>
    );
}

export default Records;