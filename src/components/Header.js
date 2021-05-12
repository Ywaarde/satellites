import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
      <h1>Satellites</h1>
      <NavLink to='/' activeClassName='is-active' exact={true}>Misson Overview</NavLink>
      <NavLink to='/create' activeClassName='is-active'>Add mission</NavLink>
    </div>
)

export default Header;