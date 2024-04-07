import Link from "next/link";
// import React, { useState } from "react";
import "../../styles/navbar.css";


export default function SubNavbarItem () {
    return (<>
        <li>
            <Link
                key='test'
                href='/menuitems'
                className="navbar-item"
            >
                <p className="hidden md:block">
                    test
                </p>
            </Link>
        </li>
        {/* <li>
            <a href="#" className="navbar-item">Services</a>
        </li>
        <li>
            <a href="#" className="navbar-item">Pricing</a>
        </li>
        <li>
            <a href="#" className="navbar-item">Contact</a>
        </li> */}
    </>);
};