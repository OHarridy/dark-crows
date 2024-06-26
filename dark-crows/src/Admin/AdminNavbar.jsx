import {Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react"
import { ToastContainer, toast } from "react-toastify";
import {EyeFilledIcon} from "../EyeFilledIcon";
import {EyeSlashFilledIcon} from "../EyeSlashFilledIcon";
import GeneralButton from "../generalButton";


const AdminNavbar = () => {
    const [currentUrl] = useState(window.location.href);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [oldpass, setoldpass] = useState("admin");
    const [newp, setNewp] = useState("");
    const [rep, setRep] = useState("");
    const [oldp, setOldp] = useState("");
   function change(old, newp, rep){
    if(oldpass !== old){
      toast.error('Old Password is incorrect!');
      console.log("old pass", oldpass);
    } 
    else if(newp !== rep){
    toast.error('New Passwords do not match!');
    console.log("old pass", oldpass);
    }
    else{
      //  setoldpass(newp);
       toast.success('Password Changed Successfully! 🎉🥳');
       setoldpass(newp);
     }
   }

   const [isVisible, setIsVisible] =useState(false);
   const [isVisible2, setIsVisible2] =useState(false);
   const [isVisible3, setIsVisible3] =useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibility2 = () => setIsVisible2(!isVisible2); 
  const toggleVisibility3 = () => setIsVisible3(!isVisible3);

  const fileDataUrl = localStorage.getItem("photo");

    return ( 
      
        <Navbar isBordered shouldHideOnScroll isBlurred="false" className="w-full p-2 m-0">
          
            <NavbarContent justify="end">
            <NavbarBrand className="mr-4">
            <Image src="https://i.ibb.co/5x4KDm7/better.png" alt="sharelelkheir" radius="full" width="62" />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-8">
                <NavbarItem isActive={currentUrl.includes("/AdminRegisteredOrgs") ? "false" : ""}>
                    <Link href="/AdminRegisteredOrgs" aria-current="page" >
                        <p style={{color: currentUrl.includes("/AdminRegisteredOrgs") ? "#28c95a" : "#000000"}}>Organizations</p>
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={currentUrl.includes("/AdminRegisteredDonors") ? "false" : ""}>
                    <Link href="/AdminRegisteredDonors" aria-current="page" >
                        <p style={{color: currentUrl.includes("/AdminRegisteredDonors") ? "#28c95a" : "#000000"}}>Donors</p>
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={currentUrl.includes("/AdminRequests") ? "false" : ""}>
                    <Link href="/AdminRequests" aria-current="page" >
                        <p style={{color: currentUrl.includes("/AdminRequests") ? "#28c95a" : "#000000"}}>Requests</p>
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={currentUrl.includes("/AdminSubmission") ? "false" : ""}>
                    <Link href="/AdminSubmission" aria-current="page" >
                        <p style={{color: currentUrl.includes("/AdminSubmission") ? "#28c95a" : "#000000"}}>Submissions</p>
                    </Link>
                </NavbarItem>
            </NavbarContent>
            </NavbarContent>

            <NavbarContent as="div" className="items-center" justify="end">
            {/* <Input
                classNames={{
                base: "max-w-full sm:max-w-[22rem] h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Type to search..."
                size="sm"
                type="search"
            /> */}

    <NavbarContent className="hidden mr-0 sm:flex gap-3 ml-7">
          <Button
            className="flex justify-center items-center p-2 gap-2 h-9 w-30 border-none bg-purple-200 rounded-full cursor-pointer"
            onPress={onOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              viewBox="0 0 20 20"
              height="20"
              fill="none"
              className="svg-icon"
            >
              <g strokeWidth="1.5" strokeLinecap="round" stroke="#5d41de">
                <circle r="2.5" cy="10" cx="10"></circle>
                <path
                  fillRule="evenodd"
                  d="m8.39079 2.80235c.53842-1.51424 2.67991-1.51424 3.21831-.00001.3392.95358 1.4284 1.40477 2.3425.97027 1.4514-.68995 2.9657.82427 2.2758 2.27575-.4345.91407.0166 2.00334.9702 2.34248 1.5143.53842 1.5143 2.67996 0 3.21836-.9536.3391-1.4047 1.4284-.9702 2.3425.6899 1.4514-.8244 2.9656-2.2758 2.2757-.9141-.4345-2.0033.0167-2.3425.9703-.5384 1.5142-2.67989 1.5142-3.21831 0-.33914-.9536-1.4284-1.4048-2.34247-.9703-1.45148.6899-2.96571-.8243-2.27575-2.2757.43449-.9141-.01669-2.0034-.97028-2.3425-1.51422-.5384-1.51422-2.67994.00001-3.21836.95358-.33914 1.40476-1.42841.97027-2.34248-.68996-1.45148.82427-2.9657 2.27575-2.27575.91407.4345 2.00333-.01669 2.34247-.97026z"
                  clipRule="evenodd"
                ></path>
              </g>
            </svg>
            <span className="lable">Change Password</span>
           
          </Button>

          <Modal 
          isOpen={isOpen} 
          onOpenChange={onOpenChange}
          placement="top"
          backdrop="blur"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Change Password</ModalHeader>
                <ModalBody>                  
              <Input
             id="oldepass"
             label="Old Password"
             placeholder="Enter old password"
             variant="bordered"
             value={oldp}
             onChange={e => setOldp(e.target.value)}
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
    />

              <Input
              id="newpass"
              label="New Password"
              placeholder="Enter new password"
              variant="bordered"
              value={newp}
              onChange={e => setNewp(e.target.value)}
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility2}>
          {isVisible2 ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible2 ? "text" : "password"}
    />
                  <Input
               id="newpass2"
               label="Repeat new Password"
               placeholder="Repeat new password"
               variant="bordered"
               value={rep}
               onChange={e => setRep(e.target.value)}
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility3}>
          {isVisible3 ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible3 ? "text" : "password"}
    />
    
    
     <ToastContainer/>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <GeneralButton text="Change Password" onClick={()=>{change(oldp,newp,rep)}}/>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
          
          </NavbarContent>
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    style={{color:"#28c95a"}}
                    size="sm"
                    src={fileDataUrl}
                />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem href="/Login" key="logout" color="danger">Log Out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
           </NavbarContent>
      </Navbar>
     );
}
 
export default AdminNavbar ;