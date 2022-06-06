import { Button, Link } from "@mui/material";
import style from '../../styles/Portfolio.module.css'

export default function Portfolio () {
    return (
        <section id='portfolio' className={style.portfolio}>
            <div className={style.descBox}>
                <h1>This portfolio</h1>
                <p>
                    I decided to revamp {' '}
                    <a href='https://minhnguyen4958.github.io/'> my portfolio </a>
                    with a more modern, miminalistic one. What inspired me to make the change, you may ask? <br/>
                    I wanted to learn more about Next.js and CSS, coupled that with a passion to gain knowledge about UI/UX.
                </p>
                <span>Next.js with Material UI, HTML, CSS</span>
                <div>
                    <Link href='https://github.com/MinhNguyen4958/portfolio_v2' style={{textDecoration: 'none'}}>
                        {/* <Button variant='outlined' className={style.btnGrad} size={'large'}>github</Button> */}
                        <button className={style.btnGrad}>GitHub</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}