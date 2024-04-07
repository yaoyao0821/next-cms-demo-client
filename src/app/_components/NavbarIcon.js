
export default function NavbarItems () {
    return (
        <div className="p-4 self-start">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                {/* <Image src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" ></Image> */}
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ApryseDemo</span>
            </a>            
        </div>

    );
}

