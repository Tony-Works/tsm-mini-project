import type { Theme, CSSObject } from '@mui/material/styles';
import { useLayoutEffect, useState } from 'react';
import { useToggle } from 'react-use';
import { styled } from '@mui/material/styles';
import { Toolbar, useTheme, useMediaQuery } from '@mui/material';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PerfectScrollbar from 'react-perfect-scrollbar';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import drawerLogo from 'assets/images/drawerLogo.png';
import { NavProps } from 'type';
import { menuList } from 'data/constant';

const openedMixin = (theme: Theme): CSSObject => ({
  overflow: 'initial',
  width: theme.custom.drawer.width,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme: Theme): CSSObject => ({
  overflow: 'initial',
  width: `calc(${theme.spacing(7)} + 1px)`,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
});

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  width: theme.custom.drawer.width,
  flexShrink: 0,
  ...(open && {
    ...openedMixin(theme),
    [`& .${drawerClasses.paper}`]: {
      ...openedMixin(theme),
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    [`& .${drawerClasses.paper}`]: {
      ...closedMixin(theme),
    },
  }),
}));

function Sidebar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const sm = useMediaQuery(theme.breakpoints.down('md'));
  const [isOpen, setIsOpen] = useToggle(false);

  const ButtonToggler = styled('button')(({ theme }) => {
    return {
      position: 'absolute',
      top: theme.spacing(-5),
      right: isOpen ? theme.spacing(-5) : theme.spacing(-2),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: theme.spacing(4),
      height: theme.spacing(4),
      backgroundColor: theme.palette.common.white,
      boxShadow: isOpen ? '0px' : '0px 2px 10px #BFBEBE96',
      border: 0,
      borderRadius: '50%',
      marginTop: theme.mixins.toolbar.minHeight,
      cursor: 'pointer',
      zIndex: theme.zIndex.drawer + 1,
    };
  });

  useLayoutEffect(() => {
    if (sm) {
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  }, [sm]);

  return (
    <StyledDrawer variant="permanent" anchor="left" open={isOpen}>
      <Toolbar sx={{ mb: 3 }}>
        {isOpen && (
          <img
            onClick={() => navigate('/dashboard')}
            src={drawerLogo}
            height={40}
            width={80}
            style={{ marginTop: 15, marginLeft: 5, cursor: 'pointer' }}
          />
        )}
      </Toolbar>

      <ButtonToggler onClick={setIsOpen}>
        {isOpen ? <MenuIcon /> : <ChevronRightIcon sx={{ color: '#2c67ff' }} />}
      </ButtonToggler>

      <PerfectScrollbar
        options={{ suppressScrollX: true, useBothWheelAxes: false }}>
        <List
          component="nav"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            '.MuiListItemText-root': {
              display: isOpen ? 'block' : 'none',
            },
          }}>
          {menuList?.map(item => (
            <NavItem key={item.id} {...item} open={isOpen} />
          ))}
        </List>
      </PerfectScrollbar>
    </StyledDrawer>
  );
}

const NavItem = (props: NavProps) => {
  const location = useLocation();
  const [active, setActive] = useState('');

  useLayoutEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const navItem = () => {
    const MenuItemIcon = props.icon;
    return (
      <ListItemButton
        role="button"
        sx={{
          background:
            props.open && active === `/${props.url}` ? '#e2e7ff' : 'inherit',
          borderRadius: 2,
          cursor: 'pointer',
          ml: props.open ? 2.5 : 0,
          px: 2,
          py: 1.5,
          span: {
            color: active === `/${props.url}` ? '#2c67ff' : '#363636',
            fontSize: '14px',
            fontWeight: active === `/${props.url}` ? 700 : 500,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 4,
          },
        }}>
        <ListItemIcon
          sx={{
            svg: { color: active === `/${props.url}` ? '#2c67ff' : '#a6b3c3' },
          }}>
          <MenuItemIcon />
        </ListItemIcon>
        <ListItemText role="term">
          {props.title}
          {props.parent?.id && (
            <ArrowForwardIosIcon sx={{ fontSize: '12px', color: '#a6b3c3' }} />
          )}
        </ListItemText>
      </ListItemButton>
    );
  };

  return (
    <ListItem
      disablePadding
      role="listitem"
      sx={{ width: '100%', a: { textDecoration: 'none' } }}>
      <NavLink to={`/${props.url}`}>{navItem}</NavLink>
    </ListItem>
  );
};

export default Sidebar;
