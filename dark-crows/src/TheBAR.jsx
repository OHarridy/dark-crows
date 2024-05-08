import {Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { useState } from "react";
import PropTypes from 'prop-types';

const TheBAR = (
  props
) => {

  TheBAR.propTypes = {
    setTerm: PropTypes.func,
};



    const [currentUrl] = useState(window.location.href);
    return ( 
        <Navbar position="static" isBordered shouldHideOnScroll isBlurred="false">
        <NavbarContent justify="end">
          <NavbarBrand className="mr-4">
          <Image src="https://i.ibb.co/5x4KDm7/better.png" alt="sharelelkheir" radius="full" width="62" />
          </NavbarBrand>
          {currentUrl.includes("/Donor")?
          <NavbarContent className="gap-12">
            <NavbarItem isActive={currentUrl.includes("/DonorOrganization") ? "false" : ""}>
              <Link href="/DonorOrganization" aria-current="page" >
                <p style={{color: currentUrl.includes("/DonorOrganization") ? "#28c95a" : "#000000"}}>Organizations</p>
              </Link>
            </NavbarItem>
            <NavbarItem isActive={currentUrl.includes("/DonorMainPage") ? "false" : ""}>
              <Link href="/DonorMainPage" aria-current="page" >
                <p style={{color: currentUrl.includes("/DonorMainPage") ? "#28c95a" : "#000000"}}>Posts</p>
              </Link>
            </NavbarItem>
          </NavbarContent>
          :
          <NavbarContent className="gap-12 pl-[300px]">
          <NavbarItem isActive={currentUrl.includes("/OrgHomePage") ? "false" : ""}>
            <Link href="/OrgHomePage" aria-current="page" >
              <p style={{color: currentUrl.includes("/OrgHomePage") ? "#28c95a" : "#000000"}}>Home</p>
            </Link>
          </NavbarItem>
        </NavbarContent>}
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          {currentUrl.includes("/DonorMainPage")?<Input
          onChange={(event) => (props.setTerm(event.target.value), console.log(event.target.value))}
            classNames={{
              base: "max-w-full sm:max-w-[22rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            type="search"
          />:""}
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
              <DropdownItem href="/Login" key="logout" color="danger">Log Out</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
     );
}
 
export default TheBAR;