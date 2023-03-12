import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import css from './MainLayout.module.css';

const styles = {
  color: '#010101',
};

export function MainLayout({ children }) {
  return (
    <div style={styles}>
      <header className={css.header}>
        <nav>
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

        </nav>
      </header>
      {children}
    </div>
  );
}

