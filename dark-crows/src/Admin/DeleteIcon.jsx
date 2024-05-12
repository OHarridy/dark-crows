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
            <div className="flex flex-col border-2 rounded-xl w-1/4 border-red-700" style={{position: 'fixed',top: '40%',left: '50%',transform: 'translate(-50%, -50%)',backgroundColor: 'white',padding: '20px',zIndex: 1000,}}>
                
            <div className="flex flex-row gap-5">
              <img src="./../../public/danger-sing-svgrepo-com.svg" alt="Danger icon" className="h-10  rounded"/>
                <div>
                  <p className="font-bold text-xl">Are you sure you want to delete?</p>
                  <p className="font-light text-sm pt-3">This account will be permanently deleted</p>
                </div>
            </div>
                <div className="flex flex-row justify-end mt-7">
                  <div >
                    <Button onClick={func} className="mr-6 text-gray-700">Cancel</Button>
                    <Button onClick={del} className="text-red-500">Delete <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
</svg>
</Button>
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