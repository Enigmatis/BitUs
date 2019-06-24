import {Component, Input, OnInit} from '@angular/core';
export interface ContributorData {
  totalCommits: number;
  commitsPerWeek: number;
  totalNumberOfReposContributedTo: number;
}

export interface RepoContributors {
  name: string;
  points: number;
}

const REPOS: RepoContributors[] = [
  {name: 'MGF', points: 34},
  {name: 'MGF-logs', points: 25},
  {name: 'Polaris', points: 20},
  {name: 'Polaris-Logs', points: 15}
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
  reposData = REPOS;

  ngOnInit() {
  }

}
