import React, { useState } from 'react';
import {
  Stack,
  Box,
  Button,
  Typography,
  TextField,
  FormControlLabel,
  Grid,
  InputAdornment,
  Checkbox,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import loginBg from '../../assets/images/loginBg.png';
import logo from '../../assets/images/logo.png';
import bg from '../../assets/images/wallpaper.jpg';

const Login = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('user') && data.get('password')) {
      navigate(`/dashboard`);
      setError(false);
    } else {
      setError(true);
      console.log('sdfa');
    }
  };

  return (
    <Stack
      direction="column"
      sx={{
        width: '100%',
        height: '112vh',
        background: `url(${bg})`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
      }}>
      <Box sx={{ position: 'absolute', top: 50, left: '10%' }}>
        <img src={logo} height={50} width={110} />
      </Box>

      <Grid container component="main">
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          lg={6}
          sx={{
            display: { xs: 'none', sm: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img
            src={loginBg}
            style={{
              marginTop: 120,
              objectFit: 'contain',
              width: 600,
              height: 600,
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={8}
          md={7}
          lg={6}
          sx={{
            mt: { xs: 10, sm: 0 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 200,
          }}>
          <Box
            sx={{
              width: 400,
              bgcolor: '#ffffff',
              px: { xs: 4, sm: 7 },
              py: { xs: 3, sm: 5 },
              my: { xs: 15, sm: 25 },
              mx: { xs: 2, sm: 5, md: 6, lg: 10, xl: 10 },
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              boxShadow:
                '0 0.5px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 1px 0 rgba(0, 0, 0, 0.19)',
              justifyContent: 'flex-start',
              gap: 1,
            }}>
            <Typography
              component="h1"
              variant="body"
              sx={{
                color: '#004d71',
              }}>
              Welcome to TMS
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontWeight: 800,
                fontSize: '21px',
                lineHeight: '117%',
                color: '#000000',
              }}>
              Trading & Analytics Platform
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                mt: 1,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                [`& fieldset`]: {
                  border: 'none',
                },
                '.MuiInputBase-root': {
                  height: 50,
                  backgroundColor: 'inherit',
                  borderColor: '#AFAFAF',
                  userSelect: 'none',
                },
                input: {
                  border: 0,
                  mt: 2,
                  fontSize: 14,
                  fontWeight: 600,
                },
                '.MuiFormLabel-root': {
                  mt: 2,
                  fontSize: 15,
                },
                '.MuiFormHelperText-root': {
                  fontSize: 11,
                },
              }}>
              <TextField
                fullWidth
                error={error}
                helperText={error ? 'Required Input.' : ''}
                name="user"
                label="User ID / Email"
                type="email"
                required
                autoComplete="current-password"
                color="secondary"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                fullWidth
                error={error}
                helperText={error ? 'Required Input.' : ''}
                color="secondary"
                required
                name="password"
                label="Password"
                type={visible ? 'text' : 'password'}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      onClick={() => setVisible(!visible)}>
                      {visible ? (
                        <VisibilityOffIcon sx={{ fontSize: 18 }} />
                      ) : (
                        <VisibilityIcon sx={{ fontSize: 18 }} />
                      )}
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: 25,
                  label: {
                    color: '#2c2ce',
                    span: {
                      fontSize: '12px',
                    },
                  },
                  svg: {
                    color: '#d1d1d6',
                  },
                }}>
                <Box>
                  <FormControlLabel
                    control={
                      <Checkbox size="small" value="remember" color="primary" />
                    }
                    label="Remember me"
                  />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                  }}>
                  <Typography
                    onClick={() => navigate(`/forgot-password`)}
                    sx={{
                      fontWeight: 550,
                      fontSize: '12px',
                      color: '#4d47c3',
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'orange',
                        cursor: 'pointer',
                      },
                    }}>
                    Forgot password?
                  </Typography>
                </Box>
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ bgcolor: '#2c67ff', color: '#FFFFFF' }}>
                Login
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ position: 'absolute', bottom: 0, left: '10%' }}>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '130%',
            span: {
              fontWeight: 700,
            },
          }}>
          Powered by <span>Stx Platform</span>
        </Typography>
      </Box>
    </Stack>
  );
};

export default Login;
