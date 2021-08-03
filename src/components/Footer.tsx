import React from 'react';
/** @jsxImportSource theme-ui */
import {Box} from 'theme-ui';

/**
 *
 * @return {jsx}
 */
const Footer : React.FC = () => {
  return (
    <div>
      <Box p={3} bg="highlight">
      </Box>
      <Box p={1} bg="primary">
        © 2021 sendFun(it,story)
      </Box>
    </div>
  );
};

export default Footer;
