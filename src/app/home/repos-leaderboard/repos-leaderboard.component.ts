import {Component, Input, OnInit} from '@angular/core';
import {SimpleData} from '../../cards/structure/card-body/card-simple-list/card-simple-list.component';

const DATA: SimpleData[] = [
  {title: 'MGF', value: 34, id: 'mgf'},
  {title: 'MGF-logs', value: 25, id: 'mgflogs'},
  {title: 'Polaris', value: 20, id: 'polaris'},
  {title: 'Polaris-Logs', value: 15, id: 'plogs'}
];

@Component({
  selector: 'app-repos-leaderboard',
  templateUrl: './repos-leaderboard.component.html',
  styleUrls: ['./repos-leaderboard.component.less']
})
export class ReposLeaderboardComponent implements OnInit {
  constructor() {
  }

  data = DATA;

  ngOnInit() {
  }

}
