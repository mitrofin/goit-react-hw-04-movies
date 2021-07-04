import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={s.siteNav}>
      <NavLink
        exact
        to={routes.homePage}
        className={s.navLink}
        activeClassName={s.activeNavLink}
      >
        Home
      </NavLink>
      <NavLink
        exact
        to={routes.moviesPage}
        className={s.navLink}
        activeClassName={s.activeNavLink}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
