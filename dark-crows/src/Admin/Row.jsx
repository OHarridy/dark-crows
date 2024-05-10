import React,{useState} from "react";
import DeleteIcon from "./DeleteIcon";

function Row(row){

    const [hide,setHide] = useState("");
    var status= row.status;
    function setHidden(){
        
            setHide("hidden");
    }

    if(row.status === "Active"){
        status = "text-success p-3 px-36 rounded-full";
    }
    if(row.status === "Pending"){
        status = "text-danger p-3 px-36";
    }
    if(row.status === "Vacation"){
        status = "text-warning p-3 px-36";
    }

    return(
        <tr className={hide}>
            <td className="p-3  pl-16 ">
            <div className="flex flex-row gap-3">
                <img src={row.img} alt="picture" className="h-14 rounded-xl"/>
                <div className="flex flex-col ">
                <span className="font-semibold">{row.name}</span>
                <span className="text-default-400">{row.email}</span>
                </div>
            </div>
            </td>
            <td className="p-3 px-20 ml-10">
            <div className="flex flex-col">
            {row.role}
            <span className="text-default-400">{row.team}</span>
            </div>
            </td>
            <td className={status}>{row.status}</td>
            <td className="p-3">
                <DeleteIcon sethidden={setHidden}/>
            </td>
            

            
        </tr>
    )

    
}

export default Row;