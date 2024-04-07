import SubNavbarList from "./SubNavbarList";

const SubNavbar = () => {
    return (<>
        <nav className="bg-blue border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2.5">
                <div className="w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row
                    md:mt-0 md:text-sm  md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900
                    dark:border-gray-700 md:space-x-8 md:rtl:space-x-reverse">
                        <SubNavbarList />
                    </ul>
                </div>
            </div>                                                 
        </nav>
    </>);
};
  
export default SubNavbar;