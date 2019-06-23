import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.less']
})
export class LeaderboardComponent implements OnInit {
  @Input() title: string;
  @Input() theme: string;

  constructor() {
  }

  ngOnInit() {
  }

}
