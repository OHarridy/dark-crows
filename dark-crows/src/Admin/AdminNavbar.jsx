import {Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { useState } from "react";


const AdminNavbar = () => {
    const [currentUrl] = useState(window.location.href);
    return ( 
        <Navbar isBordered shouldHideOnScroll isBlurred="false" className="w-full p-2">
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
                <NavbarItem isActive={currentUrl.includes("/AdminSubmission") ? "false" : ""}>
                    <Link href="/AdminSubmission" aria-current="page" >
                        <p style={{color: currentUrl.includes("/AdminSubmission") ? "#28c95a" : "#000000"}}>Submissions</p>
                    </Link>
                </NavbarItem>
            </NavbarContent>
            </NavbarContent>

            <NavbarContent as="div" className="items-center" justify="end">
            <Input
                classNames={{
                base: "max-w-full sm:max-w-[22rem] h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Type to search..."
                size="sm"
                type="search"
            />
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    style={{color:"#28c95a"}}
                    size="sm"
                    src="https://cdn.discordapp.com/emojis/765098679362650133.webp?size=44&quality=lossless"
                />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem href="/Donor" showDivider key="profile" className="h-14 gap-2">
                    <p className="font-semibold w-full" style={{color:"#28c95a"}}>My Account</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="logout" color="danger">Log Out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
           </NavbarContent>
      </Navbar>
     );
}
 
export default AdminNavbar ;