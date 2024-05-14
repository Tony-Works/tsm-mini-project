import { Stack, Box, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ flex: 1, bgcolor: '#EEEfff', width: '100%' }}>
      <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
        <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
          404: Page Not Found.
        </Typography>
      </Box>
    </Stack>
  );
};

export default NotFound;
