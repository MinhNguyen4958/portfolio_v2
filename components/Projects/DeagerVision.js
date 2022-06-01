import { Button, Link } from "@mui/material";
import style from '../../styles/DeagerVision.module.css'

export default function DeagerVision () { 
    return (
        <section id='deagervision' className={style.deagervision}>
            <div className={style.descBox}>
                <h1>DeagerVision</h1>
                <p>
                    Health-oriented applicaton that allows clients to create
                    and complete goals within a time limit of 7 days. Trainers can takein multiple clients and monitor
                    their progress, as well as leaving feedback on a client's current goal.
                </p>
                <span>MongoDB, Next.js with Material UI, Javascript </span>
                <div>
                    <Link href='https://github.com/MinhNguyen4958/DeagerVision' style={{textDecoration: 'none'}}>
                        <Button variant='outlined' className={style.btnGrad} size={'large'}>github</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}