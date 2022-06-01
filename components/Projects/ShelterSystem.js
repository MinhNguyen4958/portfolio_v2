import { Button, Link } from "@mui/material";
import style from '../../styles/projects/ShelterSystem.module.css'

export default function ShelterSystem () {

    const handleClick = () => {
        window.open('https://github.com/MinhNguyen4958/Shelter-System-v2');
    };

    return (
        <section id='sheltersystem' className={style.sheltersystem}>
            <div className={style.descBox}>
                <h1>Shelter System</h1>
                <p>
                A website for homeless shelter we chose as our Community based Originization.
                Since this is a one-month project, the website only has some basic functionalities - 
                creating/updating/deleting staff members or customers. <br/>
                </p>
                <span>MongoDB, Next.js, Javascript</span>
                <div>
                    <Button variant='outlined' className={style.btnGrad} size={'medium'} onClick={handleClick}>github</Button>
                </div>
            </div>
        </section>
    )
}