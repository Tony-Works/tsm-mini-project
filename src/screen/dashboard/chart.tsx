import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

interface Data {
  value: number;
  label: string;
}

interface ChartProps {
  data: Data[];
  title: string;
  number: string;
}

const size = {
  width: 220,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: '#ffffff',
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 16,
  fontWeight: 700,
}));

const StyledText2 = styled('text')(({ theme }) => ({
  fill: '#ffffff',
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 18,
  fontWeight: 700,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2.3}>
      {children}
    </StyledText>
  );
}

function PieCenterLabel2({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText2 x={left + width / 2} y={top + height / 1.8}>
      {children}
    </StyledText2>
  );
}

export default function PieChartWithCenterLabel(props: ChartProps) {
  const { data } = props;
  return (
    <PieChart
      slotProps={{ legend: { hidden: true } }}
      sx={{ ml: 13 }}
      series={[{ data, innerRadius: 80 }]}
      {...size}>
      <PieCenterLabel>{props.title}</PieCenterLabel>
      <PieCenterLabel2>{props.number}</PieCenterLabel2>
    </PieChart>
  );
}
