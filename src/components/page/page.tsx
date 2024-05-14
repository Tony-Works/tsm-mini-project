import type { ReactElement, ReactNode } from 'react';

import { styled, SxProps } from '@mui/material/styles';
import { Box, Toolbar } from '@mui/material';

import Navbar from './navbar/navbar';
import Sidebar from './sidebar/side-bar';

type PageProps = {
  children: ReactNode;
  sx?: SxProps;
};

const MuiContainer = styled('div')({
  display: 'flex',
  // minHeight: `calc(100% - ${theme.mixins.toolbar.minHeight}px)`,
});

const Page = (props: PageProps): ReactElement => {
  const { children, sx } = props;

  return (
    <MuiContainer>
      <Navbar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: 'auto',
          ...sx,
        }}>
        <Toolbar />
        {children}
      </Box>
    </MuiContainer>
  );
};

export default Page;
