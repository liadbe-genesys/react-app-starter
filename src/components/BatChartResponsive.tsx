import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import data from '../data/chartsData.json';
import { BarChart } from '@mui/x-charts';

const highlightScope = {
    highlighted: 'series',
    faded: 'global',
  } as const;

export default function BarChartGroups() {
    const [months, setMonths] = useState(5);
    const [years, setYears] = useState(3);


    const handleYearsChange = (event: Event, newValue: number | number[]) => {
      if (typeof newValue !== 'number') {
        return;
      }
      setYears(newValue);
    };
    const handleMonthsChange = (event: Event, newValue: number | number[]) => {
      if (typeof newValue !== 'number') {
        return;
      }
      setMonths(newValue);
    };
    
    let mapedData = data.BarChartResponsive.Years.map((s) => ({ ...s, highlightScope }));
    mapedData = mapedData.slice(0, years).map(s => ({ ...s, data: s.data.slice(0, months) }));
    
    return (
        <Box sx={{ width: '100%' }}>
          <BarChart
            width={600}
            height={350}
            xAxis={[{ scaleType: 'band', data: data.BarChartResponsive.Months.slice(0, months) }]}
            series={mapedData}
          />
          
          <Typography id="input-item-number" gutterBottom>
            Number of months
          </Typography>
          <Slider
            value={months}
            onChange={handleMonthsChange}
            valueLabelDisplay="auto"
            min={1}
            max={12}
            aria-labelledby="input-item-number"
          />
          <Typography id="input-series-number" gutterBottom>
            Number of years
          </Typography>
          <Slider
            value={years}
            onChange={handleYearsChange}
            valueLabelDisplay="auto"
            min={1}
            max={7}
            aria-labelledby="input-series-number"
          />
        </Box>
    );
}
