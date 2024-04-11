"use client"

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/router';
import "../../styles/navbar.css"

export default function NavbarDropdownItem ({navItem}) {
    const links = navItem.links || []

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
  
    useEffect(() => {
        const handleClickOutsideDropdown = (e) => {
            if(isDropdownOpen && !dropdownRef.current?.contains(e.target)){
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("click", handleClickOutsideDropdown);
        return () => document.removeEventListener('click', handleClickOutsideDropdown)
    }, [isDropdownOpen])

    return (<>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                onClick={handleToggleDropdown}
                ref={dropdownRef}
                className="uppercase flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                    {navItem?.title}
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>

            <div id="dropdownNavbar" className={` ${isDropdownOpen ? '' : 'hidden'}
                navbar-dropdown absolute z-50 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44
                dark:bg-gray-700 dark:divide-gray-600`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                    {
                        links.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.link}
                                    className="navbar-dropdown-item"
                                >
                                    <p className="md:block capitalize">
                                        {item.title}
                                    </p>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
    </>);
  };
  
//   export default Navbar;