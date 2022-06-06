import DeagerVision from "./Projects/DeagerVision";
import Messenger from "./Projects/Multicast";
import DrawingApp from "./Projects/DrawingApp";
import Portfolio from "./Projects/Portfolio";
import ShelterSystem from "./Projects/ShelterSystem";
import style from '../styles/Projects.module.css'

export default function Projects () {
    return (
        <section id='projects' className={style.container} style={{fontFamily: 'Product_Sans'}}>
                <Portfolio/>
                <DeagerVision/>
                <ShelterSystem/>
                <DrawingApp/>
                <Messenger/>
        </section>        
    )
}