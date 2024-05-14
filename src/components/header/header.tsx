import { Toolbar, Box, AppBar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: 'flex',
            justifyItems: 'center',
            alignItems: 'center',
          }}>
          <Box
            onClick={() => navigate('/login')}
            sx={{
              display: { xs: 'none', sm: 'flex' },
              justifyItems: 'center',
              alignItems: 'center',
              flexGrow: 1,
              img: {
                cursor: 'pointer',
                width: 80,
                height: 35,
              },
            }}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
