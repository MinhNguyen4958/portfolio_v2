import style from '../styles/Intro.module.css'

export default function Intro() {
    return (
        <section id='intro' className={style.introBg} style={{fontFamily: 'Product_Sans'}}>
          <div className={style.intro}>
              <h1 className={style.introTitle}>
                Welcome! 🪐
              </h1>
              <p className={style.introDesc}>
                I'm Minh Nguyen. I'm a U of S student.
              </p>
            </div>   
        </section>
    )
}