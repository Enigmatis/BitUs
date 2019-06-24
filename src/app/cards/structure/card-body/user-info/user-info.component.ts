import {Component, Input, OnInit} from '@angular/core';

export interface ContributorData {
  totalCommits: number;
  commitsPerWeek: number;
  totalNumberOfReposContributedTo: number;
}

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less']
})
export class UserInfoComponent implements OnInit {
  @Input() contributorData: ContributorData;

  constructor() {
  }

  ngOnInit() {
  }

}
