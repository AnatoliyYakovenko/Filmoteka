import { Suspense } from "react";
import { Outlet, NavLink } from 'react-router-dom';
import Loader from "components/Loader/Loader";
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/">
          Trending movies
        </NavLink>
        <NavLink to="/movies" >
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </>
  );
};
