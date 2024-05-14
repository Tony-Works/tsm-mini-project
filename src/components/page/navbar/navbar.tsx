import type { ReactElement } from 'react';

import { styled } from '@mui/material/styles';
import { Typography, AppBar, Stack, Badge, Toolbar, Box } from '@mui/material';
import {
  faEnvelope,
  faBell,
  faMaximize,
  faPeopleArrows,
  faCircleCheck,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import UserMenu from './user-menu/user-menu';

const listNav = [
  {
    icon: faPeopleArrows,
    title: 'Meeting',
  },
  {
    icon: faClipboardList,
    title: 'Task',
  },
  {
    icon: faCircleCheck,
    title: 'Approval',
  },
];

const iconNav = [
  {
    icon: faMaximize,
    notification: 0,
  },
  {
    icon: faEnvelope,
    notification: '',
  },
  {
    icon: faBell,
    notification: '',
  },
];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  color: theme.palette.common.white,
  zIndex: 1,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  gap: theme.spacing(1),
}));

const Navbar = (): ReactElement => {
  return (
    <StyledAppBar position="fixed" elevation={1}>
      <StyledToolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" alignItems="center" spacing={6}>
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 2 }}>
            {listNav?.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    cursor: 'pointer',
                    borderBottom: 2,
                    borderColor: '#Fe9c03',
                  },
                }}>
                <FontAwesomeIcon
                  style={{ fontSize: 14 }}
                  color="#2d374f"
                  icon={item.icon}
                />
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '117%',
                    color: '#000000',
                  }}>
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: 4,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {iconNav?.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Badge
                  color="warning"
                  badgeContent={item.notification}
                  variant="dot">
                  <FontAwesomeIcon
                    style={{ cursor: 'pointer', fontSize: 16 }}
                    color="#2d374f"
                    icon={item.icon}
                  />
                </Badge>
              </Box>
            ))}
          </Box>
          <UserMenu />
        </Stack>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
