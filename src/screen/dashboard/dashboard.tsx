import React, { useState } from 'react';
import Page from 'components/page/page';
import {
  MenuItem,
  Box,
  Stack,
  Container,
  FormControl,
  Grid,
  Tab,
  Tabs,
  Typography,
  Avatar,
  CardHeader,
  Card as MuiCard,
  CardContent as ContentCard,
  List,
  ListItem,
  Divider,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import Card from 'components/card/card';
import {
  amountValue,
  boardList,
  coalData,
  deliverableList,
  mineralData,
  notifications,
  selectInput,
  StyledAvatar,
  StyledContainer,
  StyledDesignation,
  StyledUsername,
  tradeList,
  ValueChart,
  volumeValue,
} from './utils';
import { useNavigate } from 'react-router-dom';
import { gradients } from 'colors';
import CardItem from 'components/card-item/card-item';
import Chart from './chart';
import user from 'assets/images/image1.png';

const Dashboard = () => {
  const navigate = useNavigate();
  const [monthly, setMonthly] = useState('Monthly');
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  const handleChange = (event: SelectChangeEvent) => {
    setMonthly(event.target.value as string);
  };

  const handleTab2 = (_event: React.SyntheticEvent, newValue: number) => {
    setValue2(newValue);
  };

  const handleTab = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <Box
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
        {value === index && <>{children}</>}
      </Box>
    );
  }

  function CustomTabPanel2(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <Box
        role="tabpanel"
        hidden={value2 !== index}
        id={`simple-tabpanel-${index}`}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          p: { xs: 0, md: 1.5, lg: 0 },
        }}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
        {value2 === index && <>{children}</>}
      </Box>
    );
  }

  return (
    <>
      <Page sx={{ bgcolor: '#EEEfff' }}>
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Typography
                sx={{
                  textTransform: 'uppercase',
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#63738d',
                  display: 'flex',
                  gap: 2,
                }}>
                <DashboardCustomizeIcon />
                Dashboard
              </Typography>

              <FormControl
                sx={{
                  width: 120,
                  '& fieldset': { border: 'none' },
                  '& .MuiInputBase-root ': {
                    bgcolor: '#FFF',
                    height: 40,
                    border: 0,
                  },
                }}>
                <Select
                  defaultValue="Monthly"
                  value={monthly}
                  variant="outlined"
                  label="Monthly"
                  sx={{ fontSize: 16, pl: 1 }}
                  IconComponent={ExpandMoreIcon}
                  onChange={handleChange}>
                  {selectInput?.map((item, idx) => (
                    <MenuItem
                      key={idx}
                      value={item.value}
                      sx={{ fontSize: 15 }}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              md={8}
              lg={7}
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Card sx={{ background: gradients[1] }}>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ cursor: 'pointer', pb: 2 }}>
                  <StyledContainer>
                    <StyledAvatar src="" alt="Avatar">
                      <Avatar sx={{ width: 50, height: 50 }} src={user} />
                    </StyledAvatar>
                    <StyledDesignation variant="caption">
                      Good morning,
                    </StyledDesignation>
                    <StyledUsername>Vishwanath</StyledUsername>
                  </StyledContainer>
                </Stack>

                <Stack
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                  }}>
                  {boardList?.map((item, idx) => (
                    <CardItem key={idx} {...item} />
                  ))}
                </Stack>
                <Box sx={{ p: 0.5 }} />
              </Card>

              <MuiCard
                sx={{
                  borderRadius: 4,
                  '.MuiCardHeader-root': {
                    padding: '15px !important',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#F9f9ff',
                  },
                  '.MuiCardHeader-content': {
                    span: {
                      fontSize: 20,
                      fontWeight: 600,
                      color: '#69789f',
                    },
                  },
                  '.MuiCardHeader-action': {
                    '.MuiTypography-root': {
                      color: '#2c67ff',
                      fontSize: 14,
                      pr: 2,
                      pt: 1,
                      fontWeight: 600,
                      textDecoration: 'underline',
                    },
                  },
                }}>
                <CardHeader
                  title="Notifications"
                  action={
                    <Typography sx={{ cursor: 'pointer' }}>View All</Typography>
                  }
                />

                <ContentCard
                  sx={{
                    p: '0px !important',
                    px: '10px !important',
                    '.MuiList-root': {
                      p: '0px !important',
                    },
                  }}>
                  {notifications?.map((item, idx) => (
                    <List
                      key={idx}
                      sx={{
                        width: '100%',
                        bgcolor: 'background.paper',
                      }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <ListItem
                          alignItems="flex-start"
                          sx={{
                            width: '90%',
                            '.MuiListItemText-root': {
                              span: {
                                fontSize: 16,
                              },
                            },
                          }}>
                          <ListItemAvatar>
                            <Avatar alt="image3" src={item.image} />
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <React.Fragment>
                                <Typography
                                  sx={{
                                    color: '#000',
                                    fontSize: 16,
                                    fontWeight: 600,
                                    span: {
                                      fontWeight: 500,
                                      fontSize: 16,
                                      color: '#67686f',
                                    },
                                  }}>
                                  {item.name} <span>has updated</span>{' '}
                                  {item.label}
                                </Typography>
                              </React.Fragment>
                            }
                            secondary={
                              <React.Fragment>
                                <Typography
                                  sx={{
                                    display: 'inline',
                                    backgroundColor: '#e2e7ff',
                                    px: 1,
                                    color: '#000',
                                    py: 0.5,
                                    fontSize: '12px !important',
                                    fontWeight: 700,
                                    borderRadius: 1,
                                  }}
                                  component="span">
                                  {item.transaction}
                                </Typography>
                              </React.Fragment>
                            }
                          />
                        </ListItem>

                        <Typography sx={{ fontSize: 12, pr: 2 }}>
                          {item.time}
                        </Typography>
                      </Box>
                      {idx < 2 && <Divider variant="inset" component="li" />}
                    </List>
                  ))}
                </ContentCard>
              </MuiCard>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  background: gradients[2],
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  svg: {
                    width: '105%',
                    mt: 2.5,
                  },
                }}>
                <Typography
                  sx={{
                    color: '#FFFFFF',
                    textAlign: 'center',
                    fontWeight: 600,
                    fontSize: 18,
                  }}>
                  Divisions
                </Typography>

                <Box
                  sx={{
                    mt: 2.5,
                    height: 40,
                    width: 250,
                    bgcolor: 'inherit',
                    borderRadius: 3,
                    '.MuiButtonBase-root': {
                      color: '#FFFFFF',
                      fontSize: 14,
                      fontWeight: 700,
                      minHeight: 35,
                      borderRadius: 10,
                      mt: 0.4,
                      textTransform: 'capitalize',
                    },
                    '.MuiTabs-flexContainer': {
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 0.5,
                      mx: 0.5,
                    },
                    '.Mui-selected': {
                      color: '#FFFFFF !important',
                      background: '#0677a8',
                    },
                    '.MuiTabs-indicator': {
                      backgroundColor: 'inherit',
                    },
                  }}>
                  <Tabs
                    value={value}
                    onChange={handleTab}
                    centered
                    scrollButtons={false}
                    allowScrollButtonsMobile={false}
                    variant="fullWidth">
                    {['Metals', 'Minerals']?.map((item, idx) => {
                      return <Tab key={idx} label={item} />;
                    })}
                  </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                  <Chart data={coalData} title="Coal" number="$2303.79↑" />
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                  <Chart data={mineralData} title="Mineral" number="$303.79↑" />
                </CustomTabPanel>

                <Box sx={{ width: '100%' }}>
                  <Box
                    sx={{
                      mb: 2.5,
                      borderBottom: 1,
                      borderColor: 'gray',
                      height: 40,
                      bgcolor: 'inherit',
                      '.MuiButtonBase-root': {
                        color: '#c3c9d6',
                        ml: -1.5,
                        fontSize: 14,
                        fontWeight: 700,
                        minHeight: 35,
                        mt: 1,
                        textTransform: 'capitalize',
                      },
                      '.MuiTabs-flexContainer': {
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: 0.5,
                        mx: 0.5,
                      },
                      '.Mui-selected': {
                        color: '#FFFFFF !important',
                      },
                      '.MuiTabs-indicator': {
                        backgroundColor: 'inherit',
                      },
                    }}>
                    <Tabs value={value2} onChange={handleTab2}>
                      <Tab label="Amount" />
                      <Tab label="Volume" />
                    </Tabs>
                  </Box>

                  <CustomTabPanel2 value={value2} index={0}>
                    {amountValue?.map((item, idx) => (
                      <ValueChart key={idx} {...item} />
                    ))}
                  </CustomTabPanel2>

                  <CustomTabPanel2 value={value2} index={1}>
                    {volumeValue?.map((item, idx) => (
                      <ValueChart key={idx} {...item} />
                    ))}
                  </CustomTabPanel2>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={12} lg={2}>
              <Stack
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', lg: 'column' },
                  gap: 2,
                }}>
                {deliverableList?.map((item, idx) => (
                  <CardItem long key={idx} {...item} />
                ))}
              </Stack>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Typography
                sx={{
                  textTransform: 'uppercase',
                  fontSize: 22,
                  fontWeight: 500,
                  color: '#63738d',
                }}>
                Trades Overview
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Card sx={{ background: gradients[3] }}>
                <Stack
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center">
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: '#969fb6',
                        textTransform: 'uppercase',
                      }}>
                      Total Trades
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 42,
                        fontWeight: 500,
                        textAlign: { xs: 'end', sm: 'start' },
                      }}>
                      3586
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: '#969fb6',
                        textTransform: 'uppercase',
                      }}>
                      Total Revenue of Trades
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Typography
                        sx={{
                          fontSize: 42,
                          fontWeight: 500,
                          textAlign: { xs: 'end', sm: 'start' },
                          span: {
                            color: '#969fb6',
                          },
                        }}>
                        <span>$ </span>
                        3,945.07
                      </Typography>
                      <Typography
                        sx={{
                          ml: 1,
                          display: 'flex',
                          fontSize: 18,
                          color: 'white',
                          bgcolor: '#12948c',
                          borderRadius: 1,
                          px: 0.2,
                        }}>
                        10.2% ↑
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
                <Box sx={{ p: 5 }} />
                <Stack
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                  }}>
                  {tradeList?.map((item, idx) => (
                    <CardItem key={idx} {...item} />
                  ))}
                </Stack>
              </Card>
              <Box sx={{ p: 1 }} />
            </Grid>
          </Grid>
        </Container>
      </Page>
    </>
  );
};

export default Dashboard;
