import React,{useState} from "react";
import { Button } from "@nextui-org/react";
function Record(org){
    const [flag,setFlag] = useState(false);
    const [hideVariable, sethideVariable] = React.useState("");
    const [bold, setNotBold] = React.useState("font-bold");
    const [isAccept, setIsAccept] = useState(false);
    const [isReject, setIsReject] = useState(false);
    function setAccept(){
        setIsAccept(!isAccept);
    }
    function setReject(){
        setIsReject(!isReject);
    }
    const handleAcceptClick = () => {
        // if (window.confirm("Are you sure you want to Accept?")) {
            setIsAccept(!isAccept);
            sethideVariable("hidden");
            org.setTotalWhenAccept();
            if(!flag)
                org.setUnseen();
        // } else {}
        
    };
    const handleRejectClick = () => {
        // if (window.confirm("Are you sure you want to Reject?")) {
            setIsReject(!isReject);
            sethideVariable("hidden");
            org.setTotalWhenAccept();
            if(!flag)
                org.setUnseen();
        // } else {}
    };
    
    function openProfile(){
        setNotBold("");
        togglePopup();
        
        if(!flag){
            org.setUnseen();
            setFlag(true);
        }
    }

    const [isOpen, setIsOpen] = useState(false);
    function togglePopup() {
        setIsOpen(!isOpen);
    }
    
    return (
        <div className={`flex flex-row ${hideVariable} justify-between border-2 border-green-500 text-black hover:shadow-green-900 hover:shadow-lg transition duration-200 ease-in-out py-2 px-4 rounded`}>
            <div className="flex flex-row hover:cursor-pointer hover:shadow-md w-3/4"  onClick={openProfile} >
                <img className={`{org.isOrg === "true" ? "hidden" : ""}  rounded-full mr-3 w-28`}  src={org.img}></img>
                <div className="flex flex-col text-left">
                    <p className={` ${bold} text-xl mt-4`}>{org.name}</p>
                    <p className={`text-sm text-gray-700`}>{org.description}</p>
                    
                    
                </div>
            </div>
            
            
            <div className=" w-1/4 flex-1 flex justify-center">
                <button onClick={setAccept} className="ml-3 h-12 mt-2 mr-4 text-xs inline-block bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">Accept</button>
                <button onClick={setReject} className="h-12 mt-2 text-xs inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Reject</button>
            </div>


        {isOpen && org.isOrg && (
            <div className="flex flex-col border-5 w-1/3 border-green-700" style={{position: 'fixed',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',backgroundColor: 'white',padding: '20px',zIndex: 1000,}}>
                
                
                
                <div className="flex flex-row shadow-lg shadow-slate-500 rounded-full">
                    <img className={`{isOrg === "true" ? "hidden" : ""} h-32 rounded-full mr-3`}  src={org.img}></img>
                    <div className="flex flex-col">
                        <p className={` font-bold text-3xl mt-10 ml-3`}>{org.name}</p>
                        
                    </div>
                </div>
                
                <div className="flex flex-col">
                    <p className="text-lg text-gray-500 my-10 mx-5 text-left">{org.description}</p>

                    <div className="flex flex-row">
                        <button className="border-2 text-xl font-light hover:font-normal w-24 h-16 mr-5 border-green-500 hover:border-green-700 p-2 rounded-xl" onClick={togglePopup}>
                        Close
                        </button>
                        
                    </div>
                </div>   
                
                
            </div>
        )}

        {isOpen && org.isOrg && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              zIndex: 500,
            }}
          />
        )}

        {isOpen && !org.isOrg && (
            <div className="flex flex-col border-5 w-1/3 border-green-700" style={{position: 'fixed',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',backgroundColor: 'white',padding: '20px',zIndex: 1000,}}>
                
                
                
                <div className="flex flex-row shadow-lg shadow-slate-500 rounded-full">
                    <img className={`{isOrg === "true" ? "hidden" : ""} h-32 rounded-full mr-3`}  src={org.img}></img>
                    <div className="flex flex-col">
                        <p className={` font-bold text-3xl mt-10 ml-3`}>{org.name}</p>
                        
                    </div>
                </div>
                
                <div className="flex flex-col">
                    <p className="text-lg text-gray-500 my-10 mx-5 text-left">{org.description}</p>

                    <div className="flex flex-row">
                        <button className="border-2 text-xl font-light hover:font-normal w-24 h-16 mr-5 border-green-500 hover:border-green-700 p-2 rounded-xl" onClick={togglePopup}>
                        Close
                        </button>
                        
                    </div>
                </div>   
                
                
            </div>
        )}

        {isOpen && !org.isOrg && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              zIndex: 500,
            }}
          />
        )}



        {isAccept && (
            <div className="flex flex-col border-2 rounded-xl w-1/4 border-green-700" style={{position: 'fixed',top: '40%',left: '50%',transform: 'translate(-50%, -50%)',backgroundColor: 'white',padding: '20px',zIndex: 1000,}}>
                
            <div className="flex flex-row gap-5">
              <img src="./../../public/Accept.png" alt="Danger icon" className="h-10  rounded"/>
                <div>
                  <p className=" text-xl">Are you sure you want to <span className="font-bold">Accept</span>?</p>
                  
                </div>
            </div>
                <div className="flex flex-row justify-end mt-7">
                  <div >
                    <Button onClick={setAccept} className="mr-6 text-gray-700">Cancel</Button>
                    <Button onClick={handleAcceptClick} className="text-white bg-green-500">Accept </Button>
                  </div>
                </div>
            </div>
        )}

        {isAccept && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              zIndex: 500,
            }}
          />
        )}

        {isReject && (
            <div className="flex flex-col border-2 rounded-xl w-1/4 border-red-700" style={{position: 'fixed',top: '40%',left: '50%',transform: 'translate(-50%, -50%)',backgroundColor: 'white',padding: '20px',zIndex: 1000,}}>
                
            <div className="flex flex-row gap-5">
              <img src="./../../public/1200px-Antu_task-reject.svg.png" alt="Danger icon" className="h-10  rounded"/>
                <div>
                  <p className=" text-xl">Are you sure you want to <span className="font-bold">Reject</span>?</p>
                </div>
            </div>
                <div className="flex flex-row justify-end mt-7">
                  <div >
                    <Button onClick={setReject} className="mr-6 text-gray-700">Cancel</Button>
                    <Button onClick={handleRejectClick} className="text-white bg-red-500">Reject
                    
</Button>
                  </div>
                </div>
            </div>
        )}

        {isReject && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              zIndex: 500,
            }}
          />
        )}

        </div>
    );
}

export default Record;