import { Component, OnInit } from '@angular/core';
import * as highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import HC_exporting from 'highcharts/modules/exporting'
@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  chartOptions:{};
  highcharts =highcharts;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions= {
      chart: {
          type: 'area'
      },
      title: {
          text: ' عدد المناطق الممسوحة /البلدية'
      },
      subtitle: {
          text: ''
      },
      exporting:{
        enabled:true
      },

      xAxis: {
          categories: ['المسحة الأولى','المسحة الثالثة','المسحة الثانية'],
          tickmarkPlacement: 'on',
          title: {
              enabled: false
          }
      },
      yAxis: {
          title: {
              text: ''
          },
          labels: {
              formatter: function () {
                  return this.value / 1000;
              }
          }
      },
      tooltip: {
          split:false,
          valueSuffix: ' '
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
          name: 'أبحر',
          data: [502, 635, 809]
      }, {
          name: 'أبحر الشمالية',
          data: [106, 107, 111]
      }, {
          name: 'الصفا',
          data: [163, 203, 276]
      }, {
          name: 'الجنوب',
          data: [18, 31, 54]
      }, {
          name: 'البلد',
          data: [2, 2, 2]
      }]
    
  
    } 
    HC_exporting(highcharts);
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      );
    },300);         
  }

}
