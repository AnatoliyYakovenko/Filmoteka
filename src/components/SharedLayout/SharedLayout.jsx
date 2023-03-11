import { Suspense } from "react";
import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.css';
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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
