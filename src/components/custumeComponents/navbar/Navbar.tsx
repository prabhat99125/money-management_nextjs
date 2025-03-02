import style from "@/styles/navbar/nav.module.css";
export default function Navbar() {

    return (<>
        <header className={`${style.header}`}>
            <nav className={`${style.nav}`}>
                <div className="logo">logo</div>
                <div className="items">
                    <ul className={`${style.item}`}>
                        <li>Home</li>
                        <li>Logout</li>
                    </ul>
                </div>
            </nav>
        </header>
    </>)
}