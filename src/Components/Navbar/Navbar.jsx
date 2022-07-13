import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import NavMainDiv, { Nava, Styledh3, NavSpan } from './style';

const Navbar = () => {
  return (
    <NavMainDiv>
      <Styledh3>
        <Link to="/home" style={{ textDecoration: 'none', cursor: 'pointer' }}>
          {'<ED8EN/>'} <NavSpan>RECIPE</NavSpan>
        </Link>
      </Styledh3>
      <div>
        <NavLink style={{ textDecoration: 'none' }} to="/About">
          ABOUT
        </NavLink>
        <Nava href="https://github.com/NAkin-Oral">GITHUB</Nava>
        <NavLink style={{ textDecoration: 'none', marginRight: '2rem' }} to="/">
          LOGOUT
        </NavLink>
      </div>
    </NavMainDiv>
  );
};

export default Navbar;
