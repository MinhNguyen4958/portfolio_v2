export default function SideNavBar() {
    const links = [
        <a href="#intro">Home</a>,
        <a href="#about">About</a>,
        <a href="#projects">Projects</a>
      ];
      
    return (
        <div>
            {links.map((link, i) => {
                <div>{link}</div>
            })}
        </div>
    )
}