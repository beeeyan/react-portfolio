import React from 'react';
/** @jsxImportSource theme-ui */
import {Box, NavLink} from 'theme-ui';

/**
 * Navbar function
 * @return {jsx}
 */
const NavBar: React.FC = () => {
  return (
    <Box as="nav" p={3} bg="highlight">
      <div sx={{'display': 'inline-block'}}>
        <NavLink href="#!" p={2}>
          Home
        </NavLink>
      </div>
      <div sx={{'display': 'inline-block', 'float': 'right'}}>
        <NavLink href="#test" p={2}>
          Blog
        </NavLink>
        <NavLink href="#!" p={2}>
          About
        </NavLink>
      </div>
    </Box>
  );
};

export default NavBar;
