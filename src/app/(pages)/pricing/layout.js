import Navbar from "../../_components/_nav/Navbar"
import client from '../../_api/sanity';

export default async function PricingLayout({ children }) {
    const subnavQuery = `*[_type == "subnav"] {
        title, 
        hasDropdown, 
        link,
        links[] {
            link,title
        }
    }|order(_createdAt desc)`;
    const navList = await client.fetch(subnavQuery);
    return (
        <>
            <Navbar navList={navList} type="side" />
            {children}
        </>
    );
  }