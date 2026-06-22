import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { MagneticCursor } from "../utils/MagneticCursor";
import Lenis from 'lenis'


export default function MainLayout(){
    // Initialize Lenis
    const lenis = new Lenis({autoRaf: true,})

    return(
        <main>
            <MagneticCursor 
            size={20}           // Default circle size
            hoverSize={60}      // Size when hovering links/buttons
            color="#2238A7"     // Default border color
            hoverColor="#2238A7" // Hover border color
            easing={0.12}       // Follow speed (0.05 - 0.3)
            blur={false}        // Enable backdrop blur
            />
            <div>
                <Navbar/>
            </div>
            <div>
                <Outlet/>
            </div>
        </main>
    )
}
    