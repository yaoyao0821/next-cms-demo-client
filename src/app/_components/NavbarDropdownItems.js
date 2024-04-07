

import Link from "next/link";
// import React, { useState } from "react";
import NavbarDropdownItem from "./NavbarDropdownItem";
import "../styles/navbar.css";

export default function NavbarDropdownItems () {
    const dropDownlinks = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
    ];
  
    return (<>
           {dropDownlinks.map((item, index) => (
                <li key={index} className="relative">
                    <NavbarDropdownItem></NavbarDropdownItem>
                </li>
            ))}
    </>);
  };
  
//   export default Navbar;