import { Button } from "@mui/material";
import style from '../../styles/projects/DrawingApp.module.css'

export default function DrawingApp() {
    const handleClick = () => {
        window.open('https://github.com/MinhNguyen4958/Drawing-Application')
    }
    return (
        <section id='drawingapp' className={style.drawingapp}>
            <div className={style.descBox}>
                <h1>Drawing Application</h1>
                <p>
                A basic shape drawing application that is loosely based on MS 
                Paint. There are shape and color toolbars for users to ultilize, as well as a mini view that 
                has the same interaction as the main canvas. <br/>
                </p>
                <span> Java with JavaFX framework</span>
                <div>
                    <Button variant='outlined' className={style.btnGrad} size={'medium'} onClick={handleClick}>github</Button>
                </div>
            </div>

        </section>
    )
}