import React from 'react';
import {
  Card as MuiCard,
  CardContent,
  SxProps,
  Stack,
  Typography,
  Box,
} from '@mui/material';
import sidecard from 'assets/images/sidecard.png';

export interface CardItemProp {
  sx?: SxProps;
  sxContent?: SxProps;
  title?: string;
  number?: number | undefined;
  icon?: any;
  long?: boolean;
  amount?: string;
}

const CardItem = (props: CardItemProp) => {
  const { sx, sxContent, icon, number, title, amount, long } = props;
  const MenuItemIcon = icon;
  const paddedNumber = number! < 10 ? `0${number}` : number;

  return (
    <MuiCard
      sx={{
        borderRadius: 5,
        ...sx,
        width: '100%',
        height: long ? 188 : 'auto',
      }}>
      <CardContent
        sx={{ ...sxContent, pb: '5px !important', position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0 }}>
          <MenuItemIcon
            sx={{
              position: 'absolute',
              color: '#7452d6',
              top: 40,
              left: 30,
              fontWeight: 800,
              fontSize: 52,
            }}
          />
          <img src={sidecard} style={{ width: 120, height: 120 }} />
        </Box>
        <Stack sx={{ mt: long ? 12 : 12 }}>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center">
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: 500,
                textAlign: { xs: 'end', sm: 'start' },
              }}>
              {paddedNumber}
            </Typography>

            {amount && (
              <Typography
                sx={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: '#969fb6',
                }}>
                $ {amount}
              </Typography>
            )}
          </Stack>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontSize: 14,
              textAlign: { xs: 'end', sm: 'start' },
              fontWeight: 600,
              color: '#969fb6',
            }}>
            {title}
          </Typography>
        </Stack>
      </CardContent>
    </MuiCard>
  );
};

export default CardItem;
