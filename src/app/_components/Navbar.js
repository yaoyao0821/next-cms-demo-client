
import Link from "next/link";
// import React, { useState } from "react";
import NavbarIcon from "./NavbarIcon";
import NavbarList from "./NavbarList";

const Navbar = () => {
    return (<>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2.5">
                <NavbarIcon />
                <NavbarList />
            </div>                                                  
        </nav>
    </>);
};
  
export default Navbar;