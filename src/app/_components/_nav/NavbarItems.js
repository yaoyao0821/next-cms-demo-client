import Link from "next/link";
// import React, { useState } from "react";
import "../../styles/navbar.css"

export default function NavbarItems ({navItem}) {
    return (<>
        <Link
            href={navItem.link || '/'}
            className="navbar-item"
        >
            <p className="uppercase md:block">
                {navItem.title}
            </p>
        </Link>
    </>);
};