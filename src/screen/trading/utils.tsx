import React from 'react';
import {
  MenuItem,
  Box,
  Grid,
  Typography,
  Divider,
  Chip,
  Menu,
} from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InfoIcon from '@mui/icons-material/Info';
import CheckIcon from '@mui/icons-material/Check';

export const tradingTab = [
  {
    id: 0,
    name: 'Contract In Process',
  },
  {
    id: 1,
    name: 'Contracts Finalized (In-Execution)',
  },
  {
    id: 2,
    name: 'Shipment Completed (Pre-Closure)',
  },
  {
    id: 3,
    name: 'Closed Trades',
  },
];

export const menuItem = [
  {
    id: 0,
    label: 'Edit',
  },
  {
    id: 1,
    label: 'Freight Charges Updates',
  },
  {
    id: 2,
    label: 'Prepare Estimated Cost Sheet',
  },
  {
    id: 3,
    label: 'Customer Draft Contract',
  },
  {
    id: 4,
    label: 'Supplier Draft Contract',
  },
  {
    id: 5,
    label: 'Mark Contracts Finalized',
  },
];

interface Trade {
  tradeNo: string;
  tradeDate: string;
}

interface ContractDetail {
  no: string;
  company: string;
  document: string;
}

interface Product {
  item: string;
  item2: string;
}

interface Shipping {
  term: string;
  by: string;
  date: string;
  destination: string;
  load: string;
}

interface TransactionProps {
  trade: Trade;
  contractDetails: ContractDetail[];
  products: Product[];
  shipping: Shipping;
}

export const RowTransaction = (props: TransactionProps) => {
  return (
    <React.Fragment>
      <Grid container spacing={0}>
        <Grid item xs={1.5}>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: 1,
              fontSize: 14,
              fontWeight: 600,
              color: '#4f5466',
            }}>
            {props.trade.tradeNo}
            <InfoIcon sx={{ fontSize: 18, color: '#747898' }} />
          </Typography>
          <Typography sx={{ color: '#67687e', fontSize: 14 }}>
            {props.trade.tradeDate}
          </Typography>
        </Grid>

        <Grid item xs={2}>
          {props.contractDetails?.map((item, idx) => (
            <Box sx={{ pb: 2 }} key={idx}>
              <Typography
                sx={{
                  color: '#4f5466',
                  fontSize: 14,
                  fontWeight: 600,
                }}>
                {item.no}
              </Typography>
              <Typography sx={{ color: '#67687e', fontSize: 12, pb: 0.5 }}>
                {item.company}
              </Typography>
              <Typography
                sx={{ color: '#67687e', fontSize: 14, fontWeight: 600 }}>
                {item.document}
              </Typography>
            </Box>
          ))}
        </Grid>

        <Grid item xs={2}>
          {props.products?.map((item, idx) => (
            <Box sx={{ pb: 1 }} key={idx}>
              <Typography
                sx={{ color: '#4f5466', fontSize: 14, fontWeight: 600 }}>
                {item.item}
              </Typography>
              <Typography sx={{ color: '#67687e', fontSize: 12 }}>
                {item.item2}
              </Typography>
            </Box>
          ))}

          <Typography
            sx={{
              color: '#2c67ff',
              fontSize: 14,
              pt: 1,
              fontWeight: 600,
              textDecoration: 'underline',
            }}>
            +3 Products
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography
            sx={{
              color: '#67687e',
              fontSize: 14,
              span: {
                fontWeight: '700',
                color: '#000',
              },
            }}>
            Long-term <span>{props.shipping.term}</span> By{' '}
            <span>{props.shipping.by}</span>
          </Typography>
          <Typography sx={{ color: '#67687e', fontSize: 14, pt: 2 }}>
            Laycan
          </Typography>
          <Typography sx={{ color: '#000', fontSize: 14, fontWeight: 700 }}>
            {props.shipping.date}
          </Typography>
        </Grid>

        <Grid item xs={1.5}>
          <Box sx={{ pb: 1 }}>
            <Typography sx={{ color: '#67687e', fontSize: 14 }}>
              Load Port
            </Typography>
            <Typography sx={{ color: '#000', fontSize: 14 }}>
              {props.shipping.load}
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ color: '#67687e', fontSize: 14 }}>
              Destination Port
            </Typography>
            <Typography sx={{ color: '#000', fontSize: 14 }}>
              {props.shipping.destination}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={2}>
          <Typography sx={{ color: '#4f5466', fontSize: 13, fontWeight: 600 }}>
            Contract Storage
          </Typography>
          <Chip
            variant="outlined"
            size="small"
            label="Estimated Cost Sheet"
            sx={{
              fontSize: 12,
              fontWeight: 700,
              color: '#a6b3c3',
              background: '#e7e8eb',
            }}
          />
          <Chip
            icon={<CheckIcon />}
            variant="outlined"
            size="small"
            label="Customer Contract"
            sx={{
              fontSize: 12,
              fontWeight: 700,
              color: '#2fb181',
              borderColor: '#2fb181',
              background: '#ebf9f4',
            }}
          />
          <Chip
            variant="outlined"
            size="small"
            label="Supplier Contract Draft Ver2.0"
            sx={{
              fontSize: 12,
              fontWeight: 700,
              color: '#feae00',
              borderColor: '#feae00',
              background: '#f9f3eb',
            }}
          />
        </Grid>

        <Grid item xs={0.5}>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {popupState => (
              <Box
                sx={{
                  '.MuiMenuItem-root': {
                    color: 'red',
                    fontSize: 12,
                  },
                }}>
                <MoreHorizIcon
                  sx={{ cursor: 'pointer' }}
                  {...bindTrigger(popupState)}
                />
                <Menu
                  {...bindMenu(popupState)}
                  sx={{
                    '.MuiMenuItem-root': {
                      color: '#585966',
                      fontSize: 14,
                    },
                  }}>
                  {menuItem?.map(item => (
                    <MenuItem key={item.id} onClick={popupState.close}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )}
          </PopupState>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 2 }} />
    </React.Fragment>
  );
};

export const dataTransaction: TransactionProps[] = [
  {
    trade: {
      tradeNo: 'TR-22-00001',
      tradeDate: '19/06/2022',
    },
    contractDetails: [
      {
        no: 'SMJ-001',
        company: 'SMJ Power LTD',
        document: 'Letter of credit',
      },
      {
        no: 'JMS-001',
        company: 'JMS Power LTD',
        document: 'Letter of credit',
      },
    ],
    products: [
      {
        item: '12345 COAL',
        item2: '2000 MT',
      },
      {
        item: '12345 Barite',
        item2: '2000 MT',
      },
    ],
    shipping: {
      term: 'FOB',
      by: 'Sea',
      date: '01/09/22 - 10/09/22',
      destination: 'Dubai, UAE',
      load: 'Sharjah, UAE',
    },
  },
  {
    trade: {
      tradeNo: 'TR-22-00001',
      tradeDate: '19/06/2022',
    },
    contractDetails: [
      {
        no: 'SMJ-001',
        company: 'SMJ Power LTD',
        document: 'Letter of credit',
      },
      {
        no: 'JMS-001',
        company: 'JMS Power LTD',
        document: 'Letter of credit',
      },
    ],
    products: [
      {
        item: '12345 COAL',
        item2: '2000 MT',
      },
      {
        item: '12345 Barite',
        item2: '2000 MT',
      },
    ],
    shipping: {
      term: 'FOB',
      by: 'Sea',
      date: '01/09/22 - 10/09/22',
      destination: 'Dubai, UAE',
      load: 'Sharjah, UAE',
    },
  },
  {
    trade: {
      tradeNo: 'TR-22-00001',
      tradeDate: '19/06/2022',
    },
    contractDetails: [
      {
        no: 'SMJ-001',
        company: 'SMJ Power LTD',
        document: 'Letter of credit',
      },
      {
        no: 'JMS-001',
        company: 'JMS Power LTD',
        document: 'Letter of credit',
      },
    ],
    products: [
      {
        item: '12345 COAL',
        item2: '2000 MT',
      },
      {
        item: '12345 Barite',
        item2: '2000 MT',
      },
    ],
    shipping: {
      term: 'FOB',
      by: 'Sea',
      date: '01/09/22 - 10/09/22',
      destination: 'Dubai, UAE',
      load: 'Sharjah, UAE',
    },
  },
];
