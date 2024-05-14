import type { ReactElement } from 'react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Avatar,
  Box,
  Stack,
  Typography,
  Paper,
  Menu,
  MenuItem,
  MenuList,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import user from 'assets/images/user.png';

export const StyledContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto, 1fr)',
});

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  gridRow: '1 / 3',
  justifySelf: 'center',
  alignSelf: 'center',
  height: theme.spacing(4.5),
  width: theme.spacing(4.5),
  marginRight: theme.spacing(2),
  backgroundColor: theme.palette.common.white,
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
}));

export const StyledUsername = styled(StyledText)({
  gridRow: '1 / 1',
  gridColumn: '2 / 2',
  color: '#232323',
  fontWeight: 600,
  fontSize: '14px',
});

export const StyledDesignation = styled(StyledText)({
  gridRow: '2 / 2',
  gridColumn: '2 / 2',
  color: '#6c6c6c',
  fontWeight: 500,
  fontSize: '12px',
});

const UserMenu = (): ReactElement => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        button: {
          border: 0,
          background: 'inherit',
        },
      }}>
      <div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}>
          <MenuItem sx={{ fontSize: 14 }} onClick={() => navigate(`/login`)}>
            Logout
          </MenuItem>
        </Menu>
      </div>

      <Box
        component="button"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <Stack direction="row" spacing={2} sx={{ cursor: 'pointer' }}>
          <StyledContainer>
            <StyledAvatar src="" alt="Avatar">
              <Avatar alt="Remy Sharp" src={user} />
            </StyledAvatar>
            <StyledUsername>Jane Doe</StyledUsername>
            <StyledDesignation variant="caption">Admin</StyledDesignation>
          </StyledContainer>

          <ExpandMoreIcon sx={{ color: '#6c6c6c', fontSize: 22 }} />
        </Stack>
      </Box>
    </Box>
  );
};

export default UserMenu;
