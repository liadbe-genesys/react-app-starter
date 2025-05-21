import ChartContainer from '../components/ChartContainer';
import BarChartGroups from '../components/BarChartGroups';
import BarChartStack from '../components/BarChartStack';
import BarChartResponsive from '../components/BatChartResponsive';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import ScatterChart from '../components/ScatterChart';
import { Card, Grid, Typography } from '@mui/joy';

/**
 * Dashbord is the currently presenting many different chart components, 
 * each is wrapped with <ChartContainer /> component.
 */
export default function Dashboard() {
  return (
    <div>
        <Typography level="h1" sx={{ marginBottom: '1rem' }}>
          Overview
        </Typography>
        
        <Grid container spacing={2} sx={{ flex: 1 }} columns={{xs: 6, md: 6, lg: 12}}>
          <Grid>
            <Card>
              <ChartContainer title="Bar Chart with Groups">
                <BarChartGroups />
              </ChartContainer>
            </Card>          
          </Grid>
          <Grid>
            <Card>
            <ChartContainer title="Bar Chart with Stacks">
            <BarChartStack />
            </ChartContainer>
            </Card>
          </Grid>
          <Grid>
            <Card>
            <ChartContainer title="Responsive Bar Chart">
            <BarChartResponsive />
            </ChartContainer>
            </Card>
          </Grid>
          <Grid>
            <Card>
            <ChartContainer title="Scatter Chart">
            <ScatterChart />
            </ChartContainer>
            </Card>
          </Grid>
          <Grid>
            <Card>
            <ChartContainer title="Line Chart">
            <LineChart />
            </ChartContainer>
            </Card>
          </Grid>
          <Grid>
            <Card>
              <ChartContainer title="Pie Chart">
                <PieChart />
              </ChartContainer>
            </Card>
          </Grid>
      </Grid>
    </div>
  );
}
