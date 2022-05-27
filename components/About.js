import style from '../styles/About.module.css'

export default function About() {
    const tech_stack = [
        "Javascript ES6+",
        "Python",
        "C",
        "Java",
        "Node.js",
        "HTML & CSS",
        "Next.js with Material UI",
        "MongoDB",
        "Fundamental Photoshop"
    ]

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
            <p>I also have a passion for music and arts, synthwave and 80s retro arts, respectively.</p>
        )
    }

    return (
        <section>
            <div className={style.about}>
                {AboutDescription()}
                
               {'Here are some technologies that I have worked with: '}
               <ul>
                   {tech_stack.map(function(tech, i) {
                       return (
                           <li>{tech}</li>
                       )
                   })}
               </ul>

               {OutsideWork()}
            </div>
        </section>
        
  

    )
}