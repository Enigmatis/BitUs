import { Component, OnInit } from '@angular/core';

export interface RepoContributors {
  repo: string;
  contributorsCount: number;
}

const REPOS: RepoContributors[] = [
  {repo: 'Arik', contributorsCount: 34}
]

@Component({
  selector: 'app-repo-table',
  templateUrl: './repo-table.component.html',
  styleUrls: ['./repo-table.component.less']
})
export class RepoTableComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['No.', 'Repository Name', 'Contributors Count'];
  reposData = REPOS;

  ngOnInit() {
  }

}
