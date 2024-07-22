import React from "react";
import data from '../data/chartsData.json';
import { BarChart } from '@mui/x-charts';

export default function BarChartGroups() {
    return (
        <BarChart 
          xAxis={[{scaleType: 'band', data: data.barChartStack.Cities}]}
          series={[
            { data: data.barChartStack.PopulationFemale, stack: 'A', label: 'Female Population' },
            { data: data.barChartStack.PopulationMale, stack: 'A', label: 'Male Population' },
            { data: data.barChartStack.PopulationYoung, stack: 'B', label: 'Young Population' },
            { data: data.barChartStack.PopulationOld, stack: 'B', label: 'Old Population' }
          ]}
          width={600}
          height={350}
        />
    );
}