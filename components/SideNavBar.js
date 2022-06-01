import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import style from '../styles/SideNavBar.module.css'

export default function SideNavBar() {
    return (
        <div className={style.sideBar}>
            <div className={style.sidebarLinks}>
                <a href="#intro">Home</a>,
                <a href="#about">About</a>,
                <a href="#projects">Projects</a>    
            </div>
            <div className={style.sidebarLogos}>
                <a href="mailto:minh.nguyen4958@usask.ca">
                    <EmailIcon style ={{fontSize: 20}}/>
                </a>
                <a href="https://github.com/MinhNguyen4958">
                    <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
                </a>
                <a href="https://www.linkedin.com/in/minhnguyen4958">
                    <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
                </a>
            </div>
        </div>
    )
}