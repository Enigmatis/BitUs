import {Component, Input, OnInit} from '@angular/core';
import {ContributorData, UserData} from '../../types/types';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.less']
})
export class ProfileCardComponent implements OnInit {
  @Input() title: string;
  @Input() theme: string;
  @Input() criteria: string;
  @Input() userData: UserData;

  contributorData: ContributorData;

  constructor() {
  }


  ngOnInit() {
    this.contributorData = {
      totalCommits: this.userData.totalCommitsCount,
      commitsPerWeek: this.userData.commitsPerWeek,
      totalNumberOfReposContributedTo: this.userData.repos.length
    };
  }

}
