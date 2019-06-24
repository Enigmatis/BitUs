import {Component, Input, OnInit} from '@angular/core';

export interface RepoContributor {
  name: string;
  points: number;
}

const REPOS: RepoContributor[] = [
  {name: 'MGF', points: 34},
  {name: 'MGF-logs', points: 25},
  {name: 'Polaris', points: 20},
  {name: 'Polaris-Logs', points: 15}
];


@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.less']
})
export class ReposListComponent implements OnInit {
  @Input() criteria: string;

  reposData = REPOS;

  constructor() {
  }

  ngOnInit() {
  }

}
