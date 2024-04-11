
import Link from "next/link";
import Image from "next/image";

import NavbarItems from "./NavbarItems";
import NavbarDropdownItem from "./NavbarDropdownItem";

import "../../styles/navbar.css";

const Navbar = ({navList, type = 'main' }) => {
    return (<>
        <nav className={` ${type == 'main' ? 'bg-white' : 'bg-blue'}
            bg-blue border-gray-200 dark:bg-gray-900 dark:border-gray-700`}>

            <div className={`max-w-screen-xl flex flex-wrap items-center mx-auto px-4 py-2.5
                ${type == 'main' ? 'justify-between' : 'justify-end'}`}>
                {
                    type == 'main' && 
                        <div className="p-4 self-start">
                            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                                <Image src="/logo.svg" alt="Flowbite Logo"
                                    className="h-8" style={{objectFit:"contain"}}
                                    height={32} width={32}
                                    priority />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ApryseDemo</span>
                            </a>            
                        </div>
                }
                <div className="w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className={`flex flex-col ${type == 'main' ? '' : 'justify-end flex-end'}
                        font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row
                        md:mt-0 md:text-sm  md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900
                        dark:border-gray-700 md:space-x-8 md:rtl:space-x-reverse`}>
                    
                        {navList?.map((item, index) => (  
                            item.hasDropdown ? (
                                <li key={index} className="relative">
                                    <NavbarDropdownItem navItem={item}/>
                                </li>
                            ) : (
                                <li key={index}>
                                    <NavbarItems navItem={item}/>
                                </li>
                            )
                        ))}
                    </ul>
                </div>
            </div>                                                  
        </nav>
    </>);
};
  
export default Navbar;