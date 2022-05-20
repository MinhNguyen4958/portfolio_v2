import style from '../styles/Intro.module.css'

export default function Intro() {
    return (
        <main className="bg-[url('../public/synthwaveSun.gif')] bg-cover bg-center text-center">
          <div className={style.intro}>
          <h1 className={style.introTitle}>
          Welcome! 🪐
        </h1>
        <p className={style.introDesc}>
          I'm Minh Nguyen. I'm currently a third year Computer Science major at University of Saskatchewan.
        </p>
          </div>
      </main>
    )
}