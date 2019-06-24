import {Component, Input, OnInit} from '@angular/core';
export interface ContributorData {
  totalCommits: number;
  commitsPerWeek: number;
  totalNumberOfReposContributedTo: number;
}

const data: ContributorData = {totalCommits: 4200, commitsPerWeek: 300, totalNumberOfReposContributedTo: 5};

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.less']
})
export class ProfileCardComponent implements OnInit {
  @Input() title: string;
  @Input() theme: string;
  @Input() criteria: string;

  constructor() { }
  data = data;

  ngOnInit() {
  }

}
