import React from "react";
import data from '../data/chartsData.json';
import { BarChart } from '@mui/x-charts';

export default function BarChartGroups() {
    return (
        <BarChart 
          xAxis={[{scaleType: 'band', data: data.BarChartGroups.Cities}]}
          series={[
            {data: data.BarChartGroups.ElectricityExpense, label: 'Electricity Expense'},
            {data: data.BarChartGroups.WaterExpense, label: 'Water Expense'},
            {data: data.BarChartGroups.InfrastructureExpense, label: 'Infrastructure Expense'}
          ]}
          width={600}
          height={350}
          barLabel="value"
        />
    );
}