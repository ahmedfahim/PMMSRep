import { Component, OnInit, Output } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions={};
  @Output() label:string
  @Output() total:string
  @Output() percentage:string

  constructor() { }

  ngOnInit(): void {
    this.chartOptions= {
      chart: {
          type: 'area'
      },
      title: {
          text: ''
      },
      subtitle: {
          text: ''
      },
      exporting:{
        enabled:false
      },
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      plotOptions: {
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }]
    
  
    } 
    HC_exporting(Highcharts);
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      );
    },300);    
  }

}
