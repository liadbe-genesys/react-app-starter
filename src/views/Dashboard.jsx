import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Grid from '@mui/joy/Grid';
import { Card, Stack, Typography } from '@mui/joy';


const items = [
  { value: 10, label: 'Series A ( no Id )' },
  { id: 'id_B', value: 15, label: 'Series B' },
  { id: 'id_C', value: 20, label: 'Series C' },
];
const formatObject = (obj) => {
  if (obj === null) {
    return '  undefined';
  }
  return JSON.stringify(obj, null, 2)
    .split('\n')
    .map((l) => `  ${l}`)
    .join('\n');
};


const data1 = [
  { label: 'Group A', value: 400 },
  { label: 'Group B', value: 300 },
  { label: 'Group C', value: 300 },
  { label: 'Group D', value: 200 },
];

const data2 = [
  { label: 'A1', value: 100 },
  { label: 'A2', value: 300 },
  { label: 'B1', value: 100 },
  { label: 'B2', value: 80 },
  { label: 'B3', value: 40 },
  { label: 'B4', value: 30 },
  { label: 'B5', value: 50 },
  { label: 'C1', value: 100 },
  { label: 'C2', value: 200 },
  { label: 'D1', value: 150 },
  { label: 'D2', value: 50 },
];

export default function Dashboard() {
  const [identifier, setIdentifier] = React.useState(null);
  const [id, setId] = React.useState(undefined);

  const handleClick = (event, itemIdentifier, item) => {
    setId(item.id);
    setIdentifier(itemIdentifier);
  };

  return (
    <div>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: 'flex-start', md: 'center' }}
        justifyContent="space-between"
        sx={{ width: '100%' }}
      >
        <Typography
          component="pre"
          sx={{ maxWidth: { xs: '100%', md: '50%', flexShrink: 1 }, overflow: 'auto' }}
        >
          {`item id: ${id ?? 'undefined'}

          item identifier:
          ${formatObject(identifier)}`}
        </Typography>

        <PieChart
          series={[
            {
              data: items,
            },
          ]}
          onItemClick={handleClick}
          width={400}
          height={200}
          margin={{ right: 200 }}
        />
      </Stack>

    </div>
  );
}
