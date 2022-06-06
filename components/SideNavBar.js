import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

import style from '../styles/SideNavBar.module.css'

export default function SideNavBar() {
    return (
        <div className={style.sideBar} style={{fontFamily: 'Product_Sans'}}>
            <div className={style.sidebarLinks}>
                <a href="#intro">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>    
            </div>
            <div className={style.sidebarLogos}>
                <a href="mailto:minh.nguyen4958@usask.ca">
                    <EmailIcon style ={{fontSize: 20}}/>
                </a>
                <a href="https://github.com/MinhNguyen4958">
                    <GitHubIcon style={{ fontSize: 19 }}/>
                </a>
                <a href="https://www.linkedin.com/in/minhnguyen4958">
                    <LinkedInIcon style={{ fontSize: 21 }}/>
                </a>
                <a href='https://open.spotify.com/playlist/52J8Y1q4E26a2ySCwe3M3R?si=996d3beaae904ecc'>
                    <LibraryMusicIcon style={{ fontSize: 20}}/>
                </a>
            </div>
        </div>
    )
}