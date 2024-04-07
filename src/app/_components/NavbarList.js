

import Link from "next/link";
import "../styles/navbar.css"
import NavbarItems from "./NavbarItems";
import NavbarDropdownItems from "./NavbarDropdownItems";
export default function NavbarList () {
    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 4,
            link: "prices",
        },
        {
            id: 5,
            link: "contact",
        },
    ];
  
    return (<>
        <div className="w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row
             md:mt-0 md:text-sm  md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900
              dark:border-gray-700 md:space-x-8 md:rtl:space-x-reverse">
                <NavbarItems></NavbarItems>
                <NavbarDropdownItems></NavbarDropdownItems>
            </ul>
        </div>

      {/* <div className="md:w-60 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
        <div className="flex flex-col space-y-6 w-full">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-12 w-full"
          >
            <span className="h-7 w-7 bg-zinc-300 rounded-lg" />
            <span className="font-bold text-xl hidden md:flex">Logo</span>
          </Link>
  
          <div className="flex flex-col space-y-2  md:px-6 ">
            {SIDENAV_ITEMS.map((item, idx) => {
              return <MenuItem key={idx} item={item} />;
            })}
          </div>
        </div>
      </div> */}
      </>
    );
  };
  
//   export default Navbar;