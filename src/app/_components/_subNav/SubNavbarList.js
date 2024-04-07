import Link from "next/link";
import "../../styles/navbar.css";
import SubNavbarItem from "./SubNavavbarItem";
import SubNavbarDropdownItem from "./SubNavbarDropdownItem";

// import SubNav

export default function SubNavbarList () {
    const links = [
        {
            id: 1,
            link: "home",

        },
        {
            id: 2,
            link: "about",
            isDropdown: true,
            sublinks: [],
        },
        {
            id: 4,
            link: "prices",
            isDropdown: true,
            sublinks: [],
        },
        {
            id: 5,
            link: "contact",
        },
    ];
    return (<>
        {links.map((item, index) => (
            item.isDropdown ? (
                <li key={index} className="relative">
                    <SubNavbarDropdownItem />
                </li>
            ) : (
                <li key={index}>
                    <SubNavbarItem />
                </li>
            )
        ))}
       
        {/* <NavbarItems></NavbarItems>
        <NavbarDropdownItems></NavbarDropdownItems> */}
    </>);
};
  
//   export default Navbar;