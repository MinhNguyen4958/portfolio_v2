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

    return (
        <div className={style.about}>
            <p>
                I'm currently a third year Computer Science major at University of Saskatchewan. 
                During my acedemic years, I have developed interest in Full-stack Development, Human Computer Interaction, and Artificial Intelligence.
            </p>
            <br/>
            <p>I also have a passion for music and arts, synthwave and 80s retro arts, respectively.</p> <br/>
            <p>Here are some technologies that I have worked with: 
                Javascript, Next.js, Node.js (Express.js), MongoDB, MySQL, Some web frameworks - Material UI, tailwind CSS (this project!)
            </p>

        </div>
  

    )
}