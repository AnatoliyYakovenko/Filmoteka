import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import cn from 'classnames';
import Loader from 'components/Loader/Loader';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <nav className={css.nav}>
        <NavLink
          className={({ isActive }) =>
            cn(css.NavLink, { [css.active]: isActive })
          }
          to="/"
        >
          Trending movies
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(css.NavLink, { [css.active]: isActive })
          }
          to="/movies"
        >
          Movies
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(css.NavLink, { [css.active]: isActive })
          }
          to="/favorite"
        >
          Favorite
        </NavLink>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
