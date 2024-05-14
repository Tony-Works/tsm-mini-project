import React from 'react';
import Page from 'components/page/page';
import { Box, Stack, Container, Grid, Typography } from '@mui/material';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import Card from 'components/card/card';
import { dataTransaction, RowTransaction } from './utils';
import { ContentTabs } from './content-tab';

const Trading = () => {
  return (
    <Page>
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontSize: 16,
                fontWeight: 700,
                color: '#63738d',
                display: 'flex',
                gap: 2,
              }}>
              <DashboardCustomizeIcon />
              Trades Transactions
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <ContentTabs />
          </Grid>

          <Grid item xs={12}>
            <Card>
              <Grid
                container
                sx={{
                  background: '#f9f9fb',
                  p: 1,
                  border: '3px solid #ededef',
                  '.MuiTypography-root': {
                    color: '#747898',
                    textTransform: 'uppercase',
                    fontSize: 14,
                  },
                }}>
                <Grid item xs={1.5}>
                  <Typography variant="body2">Trade#</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body2">Contract Details</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body2">Products</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body2">Shipping Details</Typography>
                </Grid>
                <Grid item xs={1.5}>
                  <Typography variant="body2"> </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body2">Status</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography variant="body2"> </Typography>
                </Grid>
              </Grid>

              <Box sx={{ p: 2 }} />

              <Stack spacing={1}>
                {dataTransaction?.map((item, idx) => (
                  <RowTransaction key={idx} {...item} />
                ))}
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Trading;
