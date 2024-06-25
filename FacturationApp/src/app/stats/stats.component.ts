import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  title = 'AppChartJS';

  public chartData: ChartConfiguration<any>['data'] = {
    labels: ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre']
    ,
    datasets: [
      {
        data: [10, 500, 3, 4200, 15, 63, 27, 78, 890, 10, 1100, 12, 1300, 4, 15, 16, 17, 8, 19, 20, 2100, 22, 2365, 24, 25, 26],
        label: 'Drinks',
        backgroundColor: 'orange'
      },
      {
        data: [100, 50, 30, 420, 15, 630, 270, 78, 890, 10, 1100, 12, 1300, 4, 15, 16, 17, 8, 19, 20, 2100, 22, 2365, 24, 25, 26],
        label: 'Food',
        backgroundColor: 'red'
      }
    ],
  };
  public chartOptions: ChartOptions<any> = {
    aspectRatio:4,
    maintainAspectRatio: true,     
    }  
constructor(){

}
}
