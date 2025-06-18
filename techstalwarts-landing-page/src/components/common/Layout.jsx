import React from 'react';
import Box from '../miuComponents/Box';

const LayoutWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        px: {
          xs: 2,
          sm: 4,
          md: 24,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default LayoutWrapper;
