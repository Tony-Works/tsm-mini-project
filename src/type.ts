import { SvgIcon } from '@mui/material';
import { ReactNode } from 'react';

export interface NavProps {
  id?: number;
  title?: string;
  url?: string;
  icon?: typeof SvgIcon | any;
  parent?: NavProps | null;
  basePath?: string;
  open?: boolean;
}
