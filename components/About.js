import style from '../styles/About.module.css'

export default function About() {
    const tech_stack = [
        "Javascript",
        "Python",
        "C",
        "Java",
        "Node.js",
        "HTML & CSS",
        "Next.js",
        "MongoDB"
    ]

    const techItems = tech_stack.map((tech) => 
        <li>{tech}</li>
    )

    const AboutDescription = () => {
        return(
            <p>
                I'm currently a third year Computer Science major at 
                <a href='https://www.usask.ca/about/index.php'>
                    {' '}
                    University of Saskatchewan 
                    </a> 
                 . During my acedemic years, I have developed interest in Full-stack Development, Human Computer Interaction, and Artificial Intelligence.
            </p>
        )
    }
    
    const OutsideWork = () => { 
        return (
            <p>
                I also have a passion for synthwave and 80s retro arts, and a strong liking to Astronomy.🪐
            </p>
        )
    }

    return (
        <section id='about' className={style.about}>
            <div className={style.aboutContent}>
                <div className={style.aboutDescription}>
                    {AboutDescription()}
                    {'Here are some technologies that I have worked with: '}
                    <ul>
                        {techItems}
                    </ul>
                    {OutsideWork()}
                </div>
                <div className={style.aboutImage}>
                    <img src={'/image/me.jpg'}/>
                </div>

            </div>
        </section>
        
  

    )
}