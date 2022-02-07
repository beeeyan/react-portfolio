import React from 'react';
/** @jsxImportSource theme-ui */
import {Box, NavLink} from 'theme-ui';

/**
 * Navbar function
 * @return {jsx}
 */
const NavBar: React.FC = () =>
  (
    <Box as="nav" p={3} bg="highlight">
      <div sx={{'display': ['block', null, 'inline-block']}}>
        <NavLink href="#!" sx={{fontSize: '1.2rem'}} p={2}>
          sendFun(it, story)
        </NavLink>
      </div>
      <div sx={{'display': ['block', null, 'inline-block'],
        'float': ['none', null, 'right']}}>
        <NavLink href="#Profile" p={2}>
          Profile
        </NavLink>
        <NavLink href="#History" p={2}>
          History
        </NavLink>
        <NavLink href="#Blog" p={2}>
          Blog
        </NavLink>
        <NavLink href="#Story" p={2}>
          Story
        </NavLink>
      </div>
    </Box>
  );

export default NavBar;
