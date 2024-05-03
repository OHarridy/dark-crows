import React from "react";

function AdminPicture(){
    return(
        <div className="flex flex-col w-1/6 bg-gray-800 text-white absolute left-0 top-0 m-2">
            <div className="flex flex-col justify-center items-center p-5">
                <img className="rounded-full h-36" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                <p className="text-2xl">Admin</p>
            </div>
            <div className="flex flex-col">
                <a href="./AdminRegisteredOrgs" className="p-3 hover:bg-gray-700">Organizations</a>
                <a href="./AdminRegisteredUsers" className="p-3 hover:bg-gray-700">Users</a>
                <a href="./AdminRecord" className="p-3 hover:bg-gray-700">Records</a>
            </div>
        </div>
    )
}

export default AdminPicture;