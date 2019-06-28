import {Component, Input, OnInit} from '@angular/core';
import {SimpleData} from '../../cards/structure/card-body/card-simple-list/card-simple-list.component';

const DATA: SimpleData[] = [
  {title: 'אריק פורמן', value: 34, id: 'arik'},
  {title: 'חן שוקר', value: 25, id: 'chen'},
  {title: 'אושר שדה', value: 20, id: 'osher'},
  {title: 'ירין וקנין', value: 15, id: 'yarin'}
];


@Component({
  selector: 'app-contributors-leaderboard',
  templateUrl: './contributors-leaderboard.component.html',
  styleUrls: ['./contributors-leaderboard.component.less']
})
export class ContributorsLeaderboardComponent implements OnInit {
  @Input() type: string;

  title: string;
  description: string;
  criteria: string;
  faIcon: string;
  theme: string;

  data = DATA;

  constructor() {
  }

  ngOnInit() {
    if (this.type === 'commits') {
      this.title = 'התורמים';
      this.description = 'המובילים';
      this.criteria = 'קומיטס';
      this.faIcon = 'fas fa-trophy';
      this.theme = 'gold';
    } else if (this.type === 'repos') {
      this.title = 'התורמים';
      this.description = 'המשפיעים';
      this.criteria = 'מאגרי קוד';
      this.faIcon = 'fas fa-crown';
      this.theme = 'purple';
    }
  }

}
