import React,{useState} from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";
import {EditIcon} from "./EditIcon";
import DeleteIcon from "./DeleteIcon";
import {EyeIcon} from "./EyeIcon";
import {columns, users} from "./data";
import Row from "./Row.jsx";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

function List() {

  const [hide,setHide] = useState("");
  const [demoUsers,setDemoUsers] = useState(users);
  function setHidden(x){
    setDemoUsers(demoUsers.filter(user => user.id !== x));
  }
  
  


  function setDemo(x){
    setDemoUsers(x);
  }

  

  return (
    <div className="border-2 rounded-xl l text-gray-600 w-full mb-5 mt-2 overflow-hidden ">
      <table className="w-full  rounded-xl">
        <thead className=" bg-stone-300 w-full m-10 border-solid rounded-3xl">
          <tr className="">
            <th className="p-2">NAME</th>
            <th className="p-2 ">ROLE</th>
            <th className="p-2 ">STATUS</th>
            <th className="pr-10">ACTIONS</th>
          </tr>

        </thead>
        <tbody>
          {demoUsers.map((user) => (
            <Row id={user.id} name={user.name} email={user.email} team={user.team} img={user.avatar} role={user.role} status={user.status}/>
            
          ))}

        </tbody>
      </table>
    </div>
  );
}

export default List;