import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.less']
})
export class GraphsComponent implements OnInit {

  single: any[] = [
    {
      name: 'ינואר',
      value: 734
    },
    {
      name: 'פברואר',
      value: 802
    },
    {
      name: 'מרץ',
      value: 445
    },
    {
      name: 'אפריל',
      value: 800
    },
    {
      name: 'מאי',
      value: 654
    },
    {
      name: 'יוני',
      value: 1024
    }
  ];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'חודש';
  showYAxisLabel = true;
  yAxisLabel = 'מספר קוממיטים';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() { }

  ngOnInit() {
  }
}
