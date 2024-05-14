import React, { PropsWithChildren, ReactNode } from 'react';
import { Card as MuiCard, CardContent, SxProps } from '@mui/material';

const Card = ({
  children,
  sx,
  sxContent,
}: {
  children: ReactNode;
  sx?: SxProps;
  sxContent?: SxProps;
}) => {
  return (
    <MuiCard sx={{ borderRadius: 4, ...sx }}>
      <CardContent sx={{ ...sxContent, padding: 3 }}>{children}</CardContent>
    </MuiCard>
  );
};

export default Card;
