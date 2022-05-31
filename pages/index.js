import TitleBar from '../components/TitleBar'
import About from '../components/About'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import SideNavBar from '../components/SideNavBar'
import Credits from '../components/Credits'
import homeStyle from '../styles/Home.module.css'
export default function Home() {
  return (
    
    <div>
      <TitleBar/>
      <div>
        <Intro/>
        <About/>
        <Projects/>
        {/* <Credits/> */}
      </div>
      {/* <SideNavBar/> */}
    </div>
  )
}
