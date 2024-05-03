import {Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { useState } from "react";


const ThePole = () => {
    const [currentUrl] = useState(window.location.href);
    return ( 
        <Navbar isBordered shouldHideOnScroll isBlurred="false">
        <NavbarContent justify="end">
          <NavbarBrand className="mr-4">
          <Image src="https://i.ibb.co/5x4KDm7/better.png" alt="sharelelkheir" radius="full" width="62" />
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-3">
            <NavbarItem isActive={currentUrl.includes("/AdminHome") ? "false" : ""}>
            <Link href="/AdminHome" aria-current="page" >
                <p style={{color: currentUrl.includes("/AdminHome") ? "#28c95a" : "#000000"}}>Organizations</p>
              </Link>
            </NavbarItem>
            <NavbarItem isActive={currentUrl.includes("/Regorg") ? "false" : ""}>
              <Link href="/Regorg" aria-current="page" >
                <p style={{color: currentUrl.includes("/Regorg") ? "#28c95a" : "#000000"}}>Posts</p>
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>
      </Navbar>
     );
}
 
export default ThePole;