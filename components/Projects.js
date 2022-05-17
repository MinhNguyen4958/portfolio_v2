export default function Projects () {
    return (
        <div className='text-center'>
            <p>
                This portfolio: I decided to revamp  {' '} 
                <a className='font-bold text-purple-300' href='https://minhnguyen4958.github.io/'> my portfolio </a> 
                with a more modern, miminalistic one. What inspired me to make the change, you may ask? I have fundamental experience
                in Next.js frontend framework and CSS in previous group projects, coupled that with a passion to gain knowledge about UI/UX design thinking.
                <p className=" text-purple-300 font-bold "> Next.js, Tailwind CSS</p>
            </p> <br/>
            <p>
                DeagerVision: A health-oreiented applicaton that allows clients to create
                and complete goals within a time limit of 7 days. Trainers can takein multiple clients and monitor
                their progress, as well as leaving feedback on a client's current goal. <br/>
                <p className='text-bold'>
                    MongoDB, Next.js with Material UI, Javascript 
                    </p>
            </p> <br/>
            <p>
                ShelterSystem: a website for homeless shelter we chose as our Community based Originization.
                Since this is a one-month project, the website only has some basic functionalities - 
                creating/updating/deleting staff members or customers. <br/>
                <p className='text-bold'>MongoDB, Next.js, Javascript</p>
            </p> <br/>
            <p>
                Drawing applicaton: a basic shape drawing application that is loosely based on MS 
                Paint. There are shape and color toolbars for users to ultilize, as well as a mini view that 
                has the same interaction as the main canvas. <br/>
                <p className='font-bold'> Java with JavaFX framework - using MVC architecture.</p>
            </p> <br/>
            <p>
                Multicast Messenger: a network of a single server and multiple sender clients/receiver clients,
                communicating through TCP protocol. A sender sends lines of text to all currently connected receivers, 
                whether from console inputs or redirected files. <br/>
                <p className="font-bold"> C with POSIX pthread library</p>
            </p>
        </div>
    )
}