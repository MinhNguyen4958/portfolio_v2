import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from '../components/About'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import SideNavBar from '../components/SideNavBar'
export default function Home() {
  return (
    <div>
      <div>
        <Intro/>
        <About/>
        <Projects/>
      </div>
      <SideNavBar/>
    </div>
  )
}
