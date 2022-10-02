import { Link } from "@mui/material";
import style from '../../styles/DrawingApp.module.css'

export default function DrawingApp() {
    return (
        <section id='drawingapp' className={style.drawingapp}>
            <div className={style.descBox}>
                <h1>Drawing Application</h1>
                <p>
                A basic shape drawing application that is loosely based on MS 
                Paint. There are shape and color toolbars for users to utilize, as well as a mini view that 
                has the same interaction as the main canvas. <br/>
                </p>
                <span> Java with JavaFX framework</span>
                <div>
                    <Link href='https://github.com/MinhNguyen4958/Drawing-Application' style={{textDecoration: 'none'}}>
                    <button className={style.btnGrad}>GitHub</button>
                    </Link>
                </div>
            </div>

        </section>
    )
}
