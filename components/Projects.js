import DeagerVision from "./Projects/DeagerVision";
import Messenger from "./Projects/Multicast";
import DrawingApp from "./Projects/DrawingApp";
import Portfolio from "./Projects/Portfolio";
import ShelterSystem from "./Projects/ShelterSystem";


export default function Projects () {
    return (
        <section id='projects'>
            <div>
                <Portfolio/>
                {/* <DeagerVision/> */}
                {/* <ShelterSystem/> */}
                {/* <DrawingApp/> */}
                {/* <Messenger/> */}
            </div>
        </section>        
    )
}