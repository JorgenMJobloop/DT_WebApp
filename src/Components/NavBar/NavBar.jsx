import "../NavBar/styles.css";
export default function NavBar() {
    return (
        <>
            <nav className="navBar">
                <ul className="navItems">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="https://github.com/JorgenMJobloop?tab=repositories" target="_blank">Contact</a>
                    </li>
                    <li>
                        <a href="https://github.com/JorgenMJobloop?tab=repositories" target="_blank">Github</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}