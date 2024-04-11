import Navbar from "../../_components/_nav/Navbar"
export default function menulayout({ children }) {
    return (
        <> 
            <div className="text-white">
                layout sub
                <Navbar />
            </div>
            {children}
        </>
    );
  }