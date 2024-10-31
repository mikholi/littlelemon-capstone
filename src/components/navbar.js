import style from './navbar.css';
import Logo from '../../public/images/Logo.svg'




const Navbar = () => {
    return(
        <header>
            <nav class={style.Navbar}>
                <img src={Logo} alt='logo' class={style.Logo} />
                <ul class={style.NavLinks}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}