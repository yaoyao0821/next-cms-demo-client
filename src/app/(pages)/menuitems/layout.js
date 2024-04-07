import SubNavbar from "../../_components/_subNav/SubNavbar"
export default function menulayout({ children }) {
    return (
        <> 
            <div>
                layout sub
                <SubNavbar />
            </div>
            {children}
        </>
    );
  }