import { Button, Link } from "@mui/material";
import style from '../../styles/ShelterSystem.module.css'

export default function ShelterSystem () {
    return (
        <section id='sheltersystem' className={style.sheltersystem}>
            <div className={style.descBox}>
                <h1>Shelter System</h1>
                <p>
                A website for homeless shelter we chose as our Community based Originization.
                Since this is a one-month project, the website only has some basic functionalities: 
                creating/updating/deleting staff members or customers. <br/>
                </p>
                <span>MongoDB, Next.js, Javascript</span>
                <div>
                    <Link href='https://github.com/MinhNguyen4958/Shelter-System-v2' style={{textDecoration: 'none'}}>
                        <Button variant='outlined' className={style.btnGrad} size={'large'}>github</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}