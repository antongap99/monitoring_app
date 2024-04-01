import Logo from 'shared/assets/logo.svg?react';
import { NavBar } from 'widgets/NavBar/ui/NavBar.tsx';
import style from './Header.module.css';

const Header = () => (
    <header className={style.Header}>
        <div className={style.HeaderContent}>
            <div className={style.HeaderLogo}>
                {/*<Logo />*/}
            </div>
            <div className={style.NavBar}>
                <NavBar />
            </div>
        </div>
    </header>
);

export default Header;
