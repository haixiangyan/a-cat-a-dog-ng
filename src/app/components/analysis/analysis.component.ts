import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {IImageAnalysis} from '../../env';
import echarts from 'echarts';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit, OnChanges {
  @Input() imageAnalysis: IImageAnalysis;

  constructor() {
  }

  ngOnInit() {
    this.drawPie();
  }

  ngOnChanges() {
    console.log(this.imageAnalysis);
    this.drawPie();
  }

  formatDate(dateStr) {
    const date = new Date(dateStr);
    return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear() - 2000}`;
  }

  drawPie() {
    const pieEl = document.querySelector('#analysis-pie');
    if (!pieEl) {
      return;
    }

    const myChart = echarts.init(pieEl);
    const options = this.getEChartOptions(this.imageAnalysis);
    myChart.setOption(options);
  }

  getEChartOptions = (imageAnalysis) => {
    const data = imageAnalysis.labels
      .map(label => ({
        value: Number(label.Confidence.toFixed(2)),
        name: label.Name
      }));

    return {
      title: {
        text: 'Image Analysis',
        subtext: `ID: ${imageAnalysis.image_id}`,
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [
        {
          name: 'Confidence',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }
}
