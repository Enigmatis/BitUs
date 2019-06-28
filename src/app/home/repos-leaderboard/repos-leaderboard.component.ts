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
  @Input() type: string;

  title = 'הפרוקטים';
  description: string;
  criteria: string;
  faIcon: string;
  theme: string;

  constructor() {
  }

  data = DATA;

  ngOnInit() {
    if (this.type === 'commits') {
      this.description = 'המובילים';
      this.criteria = 'קומיטס';
      this.faIcon = 'fas fa-medal';
      this.theme = 'blue';
    } else if (this.type === 'contributors') {
      this.description = 'המשפיעים';
      this.criteria = 'תורמים';
      this.faIcon = 'fas fa-award';
      this.theme = 'pink';
    }
  }

}
