import React from "react";
import Request from "./Request.jsx";
import requests from "./requests.js";
import donors from "./donors.jsx";


function Requests(props){
    
    
    return (
        <div style={{width:'70vw'}} className="text-center w-full">
            
            
            <div className={props.hid === false ? "" : "hidden"}>{requests.map((rec,index) => 
            (<Request key={index} name={rec.name} description={rec.description} img={rec.img} isOrg={props.isOrg} 
            setUnseen={props.setUnseen} unseen={props.unseen} setTotalWhenAccept={props.setTotalWhenAccept}
            
            />))}</div>
            
            
            <div className={props.hid === true ? "" : "hidden"}>{donors.map((rec,index) => 
            (<Request key={index} name={rec.name} description={rec.description} img={rec.img} isOrg={props.isOrg}
            setUnseen={props.setUnseen} unseen={props.unseen} setTotalWhenAccept={props.setTotalWhenAccept}
            
            />))}</div>
            
           
        </div>
    );
}

export default Requests;