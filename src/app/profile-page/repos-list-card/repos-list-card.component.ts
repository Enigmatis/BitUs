import {Component, Input, OnInit} from '@angular/core';
import {SimpleData} from '../../cards/structure/card-body/card-simple-list/card-simple-list.component';

const DATA: SimpleData[] = [
  {title: 'MGF', value: 34, id: 'mgf'},
  {title: 'MGF-logs', value: 25, id: 'mgflogs'},
  {title: 'Polaris', value: 20, id: 'polaris'},
  {title: 'Polaris-Logs', value: 15, id: 'plogs'}
];


@Component({
  selector: 'app-repos-list-card',
  templateUrl: './repos-list-card.component.html',
  styleUrls: ['./repos-list-card.component.less']
})
export class ReposListCardComponent implements OnInit {
  @Input() title: string;
  @Input() theme: string;
  @Input() criteria: string;

  constructor() { }
  data = DATA;

  ngOnInit() {
  }

}
