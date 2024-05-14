import { Box, Paper, Tab, Tabs } from '@mui/material';
import { colors } from 'colors';
import { SyntheticEvent, useState } from 'react';
import { tradingTab } from './utils';

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const ContentTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{
        '.MuiTabs-flexContainer': {
          background: '#fff',
        },
        '.MuiButtonBase-root': {
          color: '#62668b',
          fontSize: 14,
          fontWeight: 700,
          textTransform: 'capitalize',
        },
        '.Mui-selected': {
          color: '#7350ea !important',
          fontWeight: 700,
        },
        '.MuiTabs-indicator': {
          backgroundColor: '#7350ea',
        },
      }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={{ background: colors.gray[12] }}>
        {tradingTab?.map((item, index) => (
          <Tab
            sx={{ textTransform: 'initial', fontSize: [15, 16] }}
            label={item.name}
            value={index}
            key={item.id}
          />
        ))}
      </Tabs>
    </Paper>
  );
};

export const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: [0, 3] }}>{children}</Box>}
    </div>
  );
};
