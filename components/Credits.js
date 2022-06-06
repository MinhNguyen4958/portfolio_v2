import style from '../styles/Credits.module.css'

export default function Credits () {
    return (
        <div className={style.credits} style={{fontFamily: 'Product_Sans'}}>
            <div className={style.endingCredits}>
                <div>Built and designed by Minh Nguyen. </div>
            </div>
        </div>
    )
}