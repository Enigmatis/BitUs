import {Component, OnInit} from '@angular/core';
import {ChartType, ChartOptions} from 'chart.js';
import {Label} from 'ng2-charts';
import {SingleSeries} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-languages-chart',
  templateUrl: './languages-chart.component.html',
  styleUrls: ['./languages-chart.component.less']
})
export class LanguagesChartComponent implements OnInit {
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  legendTitle = 'שפות';
  legendPosition = 'right';
  showXAxisLabel = true;
  tooltipDisabled = false;
  showText = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'GDP Per Capita';
  showGridLines = true;
  innerPadding = '10%';
  barPadding = 8;
  groupPadding = 16;
  roundDomains = false;
  maxRadius = 10;
  minRadius = 3;
  showSeriesOnHover = true;
  roundEdges = true;
  animations = true;
  xScaleMin: any;
  xScaleMax: any;
  yScaleMin: number;
  yScaleMax: number;
  showDataLabel = false;
  noBarWhenZero = true;
  trimXAxisTicks = true;
  trimYAxisTicks = true;
  rotateXAxisTicks = true;
  maxXAxisTickLength = 16;
  maxYAxisTickLength = 16;
  colorScheme = 'aqua';

  single: SingleSeries = [
    {
      name: 'Java',
      value: 30,
      extra: {
        code: 'de'
      }
    },
    {
      name: 'C#',
      value: 25,
      extra: {
        code: 'us'
      }
    },
    {
      name: 'TypeScript',
      value: 25,
      extra: {
        code: 'fr'
      }
    },
    {
      name: 'JavaScript',
      value: 20,
      extra: {
        code: 'uk'
      }
    }
  ];


  // pie
  showLabels = false;
  explodeSlices = true;
  doughnut = false;
  arcWidth = 0.25;

  constructor() {
  }

  ngOnInit() {
  }

}
