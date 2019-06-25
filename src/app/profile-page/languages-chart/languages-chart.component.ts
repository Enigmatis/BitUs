import {Component, OnInit} from '@angular/core';
import {ChartType, ChartOptions} from 'chart.js';
import {Label} from 'ng2-charts';
import {SingleSeries} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-languages-chart',
  templateUrl: './languages-chart.component.html',
  styleUrls: ['./languages-chart.component.less']
})
export class LanguagesChartComponent implements OnInit {
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = 'Legend';
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
  colorScheme = 'cool';

  single: SingleSeries = [
    {
      name: 'Germany',
      value: 40632,
      extra: {
        code: 'de'
      }
    },
    {
      name: 'United States',
      value: 50000,
      extra: {
        code: 'us'
      }
    },
    {
      name: 'France',
      value: 36745,
      extra: {
        code: 'fr'
      }
    },
    {
      name: 'United Kingdom',
      value: 36240,
      extra: {
        code: 'uk'
      }
    },
    {
      name: 'Spain',
      value: 33000,
      extra: {
        code: 'es'
      }
    },
    {
      name: 'Italy',
      value: 35800,
      extra: {
        code: 'it'
      }
    }
  ];


  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  arcWidth = 0.25;

  constructor() {
  }

  ngOnInit() {
  }

}
