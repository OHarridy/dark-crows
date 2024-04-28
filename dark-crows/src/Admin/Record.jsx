import React,{useState} from "react";


function Record(org){
    const [hideVariable, sethideVariable] = React.useState("");
    const [bold, setNotBold] = React.useState("font-bold");
    const handleAcceptClick = () => {
    if (window.confirm("Are you sure you want to Accept?")) {
        sethideVariable("hidden");
    } else {}
    };
    const handleRejectClick = () => {
        if (window.confirm("Are you sure you want to Reject?")) {
            sethideVariable("hidden");
        } else {}
    };
    
    function openProfile(){
        setNotBold("");
        togglePopup();
    }

    const [isOpen, setIsOpen] = useState(false);
    function togglePopup() {
        setIsOpen(!isOpen);
    }
    
    return (
        <div className={`flex flex-row ${hideVariable} justify-between border-2 border-green-500 text-black hover:shadow-xl transition duration-200 ease-in-out py-2 px-4 rounded`}>
            <div className="flex flex-row hover:cursor-pointer hover:shadow-md w-3/4"  onClick={openProfile} >
                <img className={`{org.isOrg === "true" ? "hidden" : ""} h-16 rounded-full mr-3`}  src={org.img}></img>
                <div className="flex flex-col">
                    <p className={` ${bold} text-xl mt-4`}>{org.name}</p>
                    
                </div>
            </div>
            
            <a className="Btn mt-2" href="./../MS2 SE" download="MS2 SE">
                <svg className="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
                <span className="icon2"></span>
                <span className="tooltip">Download</span>
            </a>
            <div className=" w-1/4 flex-1 flex justify-center">
                <button onClick={handleAcceptClick} className="ml-3 h-12 mt-2 mr-4 text-xs inline-block bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">Accept</button>
                <button onClick={handleRejectClick} className="h-12 mt-2 text-xs inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Reject</button>
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
                        <a className="Btn " style={{width:'60px',height:'60px'}} href="./../MS2 SE" download="MS2 SE">
                            <svg className="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
                            <span className="icon2"></span>
                            <span className="tooltip">Download</span>
                        </a>
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
                        <a className="Btn " style={{width:'60px',height:'60px'}} href="./../MS2 SE" download="MS2 SE">
                            <svg className="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
                            <span className="icon2"></span>
                            <span className="tooltip">Download</span>
                        </a>
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

        </div>
    );
}

export default Record;
