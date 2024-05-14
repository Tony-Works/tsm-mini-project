import React from 'react';
import { Stack, Container, Typography } from '@mui/material';
import Page from 'components/page/page';

const CommingSoon = () => {
  return (
    <Page>
      <Container maxWidth="xl" sx={{ mt: 20, height: '100% !important' }}>
        <Stack direction="column" alignItems="center" justifyContent="center">
          <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
            Coming Soon.
          </Typography>

          <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
            Soon it will be available
          </Typography>
        </Stack>
      </Container>
    </Page>
  );
};

export default CommingSoon;
