import { Button } from "@mui/material";
import style from '../../styles/Multicast.module.css'

export default function Messenger() {
    const handleClick = () => {
        window.open('https://github.com/MinhNguyen4958/Multicast-Messenger');
    };

    return ( 
        <section id='multicast' className={style.multicast}>
            <div className={style.descBox}>
                <h1>Multicast Messenger</h1>
                <p>
                    A network of a single server and multiple sender clients/receiver clients,
                    communicating through TCP protocol. A sender sends lines of text to all currently connected receivers, 
                    whether from console inputs or redirected files. <br/>
                </p>
                <span> C with POSIX pthread library</span>
                <div>
                    <Button variant='outlined' className={style.btnGrad} size={'medium'} onClick={handleClick}>github</Button>
                </div>
            </div>
        </section>
    )
}