import { styled } from '@mui/material/styles';
import { Avatar, Box, Typography, Stack } from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { CardItemProp } from 'components/card-item/card-item';
import CircleIcon from '@mui/icons-material/Circle';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupIcon from '@mui/icons-material/Group';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import image2 from 'assets/images/image2.png';
import image3 from 'assets/images/image3.png';

export const StyledContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto, 1fr)',
});

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  gridRow: '1 / 3',
  justifySelf: 'center',
  alignSelf: 'center',
  height: 50,
  width: 50,
  marginRight: theme.spacing(2),
  backgroundColor: theme.palette.common.white,
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
}));

export const StyledUsername = styled(StyledText)({
  gridRow: '2 / 2',
  gridColumn: '2 / 2',
  color: '#69789f',
  fontWeight: 600,
  fontSize: '20px',
});

export const StyledDesignation = styled(StyledText)({
  gridRow: '1 / 1',
  gridColumn: '2 / 2',
  color: '#9fadc7',
  fontWeight: 500,
  fontSize: '15px',
});

export const selectInput = [
  {
    label: 'Daily',
    value: 'Daily',
  },
  {
    label: 'Monthly',
    value: 'Monthly',
  },
  {
    label: 'Yearly',
    value: 'Yearly',
  },
];

export const notifications = [
  {
    image: image3,
    label: 'Freight Charges',
    name: 'Aneesh thomas',
    transaction: 'TR-22-00001',
    time: '3h ago',
  },
  {
    image: image2,
    label: 'Freight',
    name: 'Nita Chakravarty',
    transaction: 'TR-22-00001',
    time: '3h ago',
  },
  {
    image: image3,
    label: 'Freight',
    name: 'Aneesh thomas',
    transaction: 'TR-22-00001',
    time: '3h ago',
  },
];

export const boardList: CardItemProp[] = [
  {
    number: 12,
    icon: CloseFullscreenIcon,
    title: 'New Requirements',
  },
  {
    number: 2,
    icon: CloseFullscreenIcon,
    title: 'Initiated',
  },
  {
    number: 3,
    icon: CloseFullscreenIcon,
    title: 'Upcoming',
  },
];

export const deliverableList: CardItemProp[] = [
  {
    number: 1369,
    icon: GroupsIcon,
    title: 'Customers',
  },
  {
    number: 2056,
    icon: GroupsIcon,
    title: 'Suppliers',
  },
  {
    number: 5,
    icon: GroupIcon,
    title: 'Meeting',
  },
];

export const tradeList: CardItemProp[] = [
  {
    number: 12,
    icon: CloseFullscreenIcon,
    title: 'Contract Stage',
    amount: '3,5678',
  },
  {
    number: 20,
    icon: Inventory2Icon,
    title: 'Pre Shipment',
    amount: '3,5678',
  },
  {
    number: 8,
    icon: InsertInvitationIcon,
    title: 'Post Fixtures Vessel',
    amount: '3,5678',
  },
  {
    number: 5,
    icon: InsertInvitationIcon,
    title: 'In-Transit',
    amount: '20,5678',
  },
  {
    number: 5,
    icon: InsertInvitationIcon,
    title: 'Pre Closure',
    amount: '3,5678',
  },
];

export const coalData = [
  { value: 5, label: 'A' },
  { value: 10, label: 'B' },
  { value: 15, label: 'C' },
  { value: 20, label: 'D' },
];

export const mineralData = [
  { value: 20, label: 'A' },
  { value: 15, label: 'B' },
  { value: 20, label: 'C' },
  { value: 15, label: 'D' },
];

interface ValueChartProp {
  label?: string;
  value?: string;
  flag?: 'yellow' | 'green' | 'blue';
  badge?: 'red' | 'green';
  percentage?: string;
}

export const amountValue: ValueChartProp[] = [
  {
    label: 'Coal',
    value: '$2,303.72',
    flag: 'green',
    badge: 'green',
    percentage: '10.3% ↑',
  },
  {
    label: 'Aluminum',
    value: '$1,242.82',
    flag: 'yellow',
    badge: 'red',
    percentage: '11.55% ↓',
  },
  {
    label: 'Iron Ore',
    value: '$398.53',
    flag: 'blue',
    badge: 'red',
    percentage: '8.9% ↓',
  },
];

export const volumeValue: ValueChartProp[] = [
  {
    label: 'Iron Ore',
    value: '$398.53',
    flag: 'blue',
    badge: 'red',
    percentage: '8.9% ↓',
  },
  {
    label: 'Aluminum',
    value: '$1,242.82',
    flag: 'yellow',
    badge: 'red',
    percentage: '11.55% ↓',
  },
  {
    label: 'Coal',
    value: '$2,303.72',
    flag: 'green',
    badge: 'green',
    percentage: '10.3% ↑',
  },
];

export const ValueChart = (props: ValueChartProp) => {
  const { label, value, flag, badge, percentage } = props;
  return (
    <Stack
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      sx={{
        span: {
          fontSize: 14,
          color: 'white',
        },
      }}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
        <CircleIcon
          sx={{ width: '20% !important', ml: -1, color: flag, fontSize: 12 }}
        />
        <Typography
          sx={{
            fontSize: 14,
            color: 'white',
          }}>
          {label}
        </Typography>
      </Box>

      <Box
        sx={{
          ml: 3,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
        <Typography
          sx={{
            fontSize: 16,
            color: 'white',
          }}>
          {value}
        </Typography>
        <Typography
          sx={{
            ml: 1,
            display: 'flex',
            fontSize: 12,
            color: 'white',
            bgcolor: badge,
            borderRadius: 1,
            px: 0.2,
          }}>
          {percentage}
        </Typography>
      </Box>
    </Stack>
  );
};
