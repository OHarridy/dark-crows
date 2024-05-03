import React from "react";
import Record from "./Record.jsx";
import orgs from "./orgs.js";
import donors from "./donors.jsx";

function Records(props){

    if(props.isOrg){
        props.setTotalSubmissions(orgs.length);
        props.setUnseenSubmissions(orgs.length);
    }else{
        props.setUnseenSubmissions(orgs.length);
        props.setTotalSubmissions(donors.length);
    }
    return (
        <div style={{width:'70vw'}} className="text-center w-full">
            
       
            <div className={props.hid === false ? "" : "hidden"}>{orgs.map((rec,index) => 
            (<Record key={index} name={rec.name} description={rec.description} img={rec.img} isOrg={props.isOrg} 
            setTotalSubmissions={props.setTotalSubmissions} setUnseenSubmissions={props.setUnseenSubmissions}
            totalSubmissions={props.totalSubmissions} unseenSubmissions={props.unseenSubmissions}
            />))}</div>
            
            <div className={props.hid === true ? "" : "hidden"}>{donors.map((rec,index) => 
            (<Record key={index} name={rec.name} description={rec.description} img={rec.img} isOrg={props.isOrg}
            setTotalSubmissions={props.setTotalSubmissions} setUnseenSubmissions={props.setUnseenSubmissions}
            totalSubmissions={props.totalSubmissions} unseenSubmissions={props.unseenSubmissions}
            />))}</div>
            
           
        </div>
    );
}

export default Records;
