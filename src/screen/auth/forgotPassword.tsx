import React, { useState } from 'react';
import {
  Stack,
  Box,
  Button,
  Typography,
  TextField,
  Grid,
  Snackbar,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WestIcon from '@mui/icons-material/West';
import { useNavigate } from 'react-router-dom';

import loginBg from '../../assets/images/loginBg.png';
import logo from '../../assets/images/logo.png';
import bg from '../../assets/images/wallpaper.jpg';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState<FormDataEntryValue | null>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    setEmail(email);

    if (data.get('email')) {
      // navigate(`/login`);
      setError(false);
      setOpen(true);
    } else {
      setError(true);
    }
    console.log({
      email: data.get('email'),
    });
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={6000}
        sx={{
          mt: -3,
          '.MuiPaper-root': {
            background: '#fff',
            color: '#000',
            textAlign: 'center',
          },
        }}
        onClose={handleClose}
        message={`A link to reset your password has been sent to ${email}`}
        action={action}
      />
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
                px: 7,
                py: 5,
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
                sx={{
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '117%',
                  color: '#000000',
                }}>
                Forgot Password
              </Typography>

              <Typography
                component="h5"
                sx={{
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '117%',
                  color: '#000000',
                }}>
                Enter the email address associated with your account, and we'll
                email you a link to reset your password.
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
                  required
                  error={error}
                  name="email"
                  helperText={error ? 'Required Input.' : ''}
                  label="User ID / Email"
                  type="email"
                  autoComplete="current-password"
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 1,
                    mb: 1.5,
                    bgcolor: '#2c67ff',
                    color: '#FFFFFF',
                    textTransform: 'inherit',
                  }}>
                  Send reset link
                </Button>

                <Typography
                  component="p"
                  sx={{
                    fontWeight: 500,
                    fontSize: '12px',
                    lineHeight: '117%',
                    textAlign: 'center',
                    color: '#4f5466',
                  }}>
                  I remember password. let's go
                </Typography>

                <Typography
                  onClick={() => navigate(`/login`)}
                  component="p"
                  sx={{
                    cursor: 'pointer',
                    fontWeight: 500,
                    textAlign: 'center',
                    fontSize: '12px',
                    lineHeight: '117%',
                    color: '#4743cd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    '&:hover': {
                      color: 'orange',
                      cursor: 'pointer',
                    },
                  }}>
                  <WestIcon sx={{ fontSize: '18px' }} />
                  Back to login
                </Typography>
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
    </>
  );
};

export default ForgotPassword;
