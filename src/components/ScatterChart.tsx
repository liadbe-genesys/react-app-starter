import React from "react";
import data from '../data/chartsData.json';
import { ScatterChart } from '@mui/x-charts';

export default function ScatterChartExample() {
    return (
        <ScatterChart 
          series={[
            {
              label: 'Group 1',
              data: data.ScatterChart.Group1
            },
            {
              label: 'Group 2',
              data: data.ScatterChart.Group2
            },
            {
                label: 'Group 3',
                data: data.ScatterChart.Group3
            }
          ]}
          width={600}
          height={350}
          grid={{ vertical: true, horizontal: true }}
        />
    );
}