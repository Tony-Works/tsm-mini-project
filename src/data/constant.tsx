import { NavProps } from 'type';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import HelpIcon from '@mui/icons-material/Help';

export const menuList: NavProps[] = [
  {
    id: 0,
    title: 'Dashboard',
    url: 'dashboard',
    icon: DashboardCustomizeIcon,
    parent: {},
    basePath: 'dashboard',
  },
  {
    id: 1,
    title: 'Customer',
    url: 'customer',
    icon: PeopleAltIcon,
    parent: {},
    basePath: 'customer',
  },
  {
    id: 2,
    title: 'Suppliers',
    url: 'suppliers',
    icon: ManageAccountsIcon,
    parent: {},
    basePath: 'suppliers',
  },
  {
    id: 3,
    title: 'Financial Institutions',
    url: 'financial-institutions',
    icon: AccountBalanceIcon,
    parent: {},
    basePath: 'financial-institutions',
  },
  {
    id: 4,
    title: 'Products',
    url: 'products',
    icon: PrecisionManufacturingIcon,
    parent: {
      id: 1,
    },
    basePath: 'products',
  },
  {
    id: 5,
    title: 'Trading',
    url: 'trading',
    icon: CloseFullscreenIcon,
    parent: {
      id: 1,
    },
    basePath: 'trading',
  },
  {
    id: 6,
    title: 'Reports',
    url: 'reports',
    icon: CloseFullscreenIcon,
    parent: {},
    basePath: 'reports',
  },
  {
    id: 7,
    title: 'Sales',
    url: 'sales',
    icon: CloseFullscreenIcon,
    parent: {
      id: 1,
    },
    basePath: 'sales',
  },
  {
    id: 8,
    title: 'Purchases',
    url: 'purchases',
    icon: CloseFullscreenIcon,
    parent: {
      id: 1,
    },
    basePath: 'Purchases',
  },
  {
    id: 9,
    title: 'FAQ',
    url: 'faq',
    icon: HelpIcon,
    parent: {},
    basePath: 'faq',
  },
];
