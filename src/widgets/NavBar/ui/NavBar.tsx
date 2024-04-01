import { AppRoutes, AppTabs } from 'shared/config/routeConfig/routeConfig.tsx';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';

export const NavBar = () => {
    const NavigationTabs = Object.entries(AppTabs);

    return (
        <nav className={style.NavBar}>
            {NavigationTabs
                .filter(([tab]) => tab !== AppRoutes.NOT_FOUND && tab !== AppRoutes.LOGIN)
                .map(
                    ([tab, value]) => (
                        <NavLink
                            key={`${tab}`}
                            to={`/${tab === 'main' ? '' : tab}`}
                        >
                            {value}
                        </NavLink>
                    ),
                )}
        </nav>
    );
};
