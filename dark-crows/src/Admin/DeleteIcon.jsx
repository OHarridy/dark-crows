import { Button } from "@nextui-org/react";
import React from "react";


function DeleteIcon (props) {
  
  const [isOpen, setIsOpen] = React.useState(false);

  function func() {
    setIsOpen(!isOpen);
    
    }

  function del(){
    props.sethidden();
  }

  return(
  <div>
  <svg className="text-red-500 cursor-pointer"
    onClick={func}
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 20 20"
    width="1em"
    
  >
    <path
      d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M8.60834 13.75H11.3833"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M7.91669 10.4167H12.0834"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />


  </svg>


  {isOpen && (
            <div className="flex flex-col border-3 rounded-xl w-1/4 border-red-700" style={{position: 'fixed',top: '40%',left: '50%',transform: 'translate(-50%, -50%)',backgroundColor: 'white',padding: '20px',zIndex: 1000,}}>
                
                
                
                <p className=" text-xl">Are you sure you want to delete?</p>
                <div className="flex flex-row justify-end mt-7">
                  <div >
                    <Button onClick={func} className="mr-6 text-gray-700">Cancel</Button>
                    <Button onClick={del} className="text-red-500">Delete</Button>
                  </div>
                </div>
            </div>
        )}

        {isOpen && (
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
)};

export default DeleteIcon;