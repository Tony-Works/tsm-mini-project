import React, { PropsWithChildren, useLayoutEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Layout = (props: PropsWithChildren) => {
  const location = useLocation();
  const [active, setActive] = useState('');

  useLayoutEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <Stack>
      <Stack
        direction="column"
        justifyItems="center"
        alignItems="center"
        sx={{
          marginInlineStart: 'auto',
          flex: 1,
          width: { xs: 'auto', sm: '100%' },
          backgroundColor: active === '/dashboard' ? '#EEEfff' : '#FFFFFF',
        }}>
        {props.children}
      </Stack>
    </Stack>
  );
};

export default Layout;
