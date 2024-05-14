import React, { PropsWithChildren } from 'react';
import {
  Box,
  Stack,
  Theme,
  SxProps,
  useTheme,
  Typography,
  useMediaQuery,
} from '@mui/material';

import { colors } from 'colors';

export interface PageContainerProps {
  title?: string;
  subtitle?: string;
  centerAlign?: boolean;
  sx?: SxProps<Theme>;
}

const PageContainer = (
  props: PageContainerProps &
    PropsWithChildren &
    React.HTMLProps<HTMLDivElement>,
) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('sm'));
  const { title, subtitle, centerAlign, sx } = props;
  return (
    <Stack
      direction={'column'}
      sx={{
        minWidth: 0,
        maxWidth: { xs: '100vw', sm: 768, md: 900, lg: '1180px' },
        flex: 1,
        gap: 1,
        marginX: 'auto',
        py: '24px',
        px: { xs: '1rem', lg: '3rem' },
        alignItems: centerAlign ? 'center' : 'initial',
        justifyContent: centerAlign ? 'center' : 'initial',
        ...sx,
      }}>
      <Box>
        {title && (
          <Typography
            component="h1"
            sx={{ textAlign: 'center' }}
            color={colors.gray[12]}
            variant={md ? 'title' : 'title2'}>
            {props.title}
          </Typography>
        )}
        {subtitle && (
          <Typography
            component="h3"
            paragraph
            variant="body"
            color={colors.gray[12]}
            sx={{ textAlign: 'center' }}>
            {props.subtitle}
          </Typography>
        )}
      </Box>
      <Stack sx={{ gap: 2 }}>{props.children}</Stack>
    </Stack>
  );
};

export default PageContainer;
