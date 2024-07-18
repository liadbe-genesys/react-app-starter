import React from "react";
import data from '../data/chartsData.json';
import { PieChart } from '@mui/x-charts';

export default function PieChartExample() {
    return (
        <PieChart 
        series={[{
            data: data.pieChart.Injuries
        }]}
          width={500}
          height={320}
        />
    );
}