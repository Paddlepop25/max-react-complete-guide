import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../context/store/auth-context';

const Navigation = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isContextLoggedIn && (
          <li>
            <a href='/'>Users</a>
          </li>
        )}
        {ctx.isContextLoggedIn && (
          <li>
            <a href='/'>Admin</a>
          </li>
        )}
        {ctx.isContextLoggedIn && (
          <li>
            <button onClick={ctx.onContextLoggedOut}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
