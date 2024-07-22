import ChartContainer from '../components/ChartContainer';
import BarChartGroups from '../components/BarChartGroups';
import BarChartStack from '../components/BarChartStack';
import BarChartResponsive from '../components/BatChartResponsive';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import ScatterChart from '../components/ScatterChart';

/**
 * Dashbord is the currently presenting many different chart components, 
 * each is wrapped with <ChartContainer /> component.
 */
export default function Dashboard() {
  return (
    <div>
        <ChartContainer title="Bar Chart with Groups">
          <BarChartGroups />
        </ChartContainer>

        <ChartContainer title="Bar Chart with Stacks">
          <BarChartStack />
        </ChartContainer>

        <ChartContainer title="Responsive Bar Chart">
          <BarChartResponsive />
        </ChartContainer>

        <ChartContainer title="Line Chart">
          <LineChart />
        </ChartContainer>

        <ChartContainer title="Pie Chart">
          <PieChart />
        </ChartContainer>

        <ChartContainer title="Scatter Chart">
          <ScatterChart />
        </ChartContainer>
    </div>
  );
}
