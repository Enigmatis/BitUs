import {Component, OnInit} from '@angular/core';


export interface RepoContributors {
  Repo: string;
  ContributorsCount: number;
}

const repos: RepoContributors[] = [
  {Repo: 'Arik', ContributorsCount: 34},
  {Repo: 'Arik', ContributorsCount: 34},
  {Repo: 'Arik', ContributorsCount: 34},
  {Repo: 'Arik', ContributorsCount: 34},
  {Repo: 'Arik', ContributorsCount: 34},
  {Repo: 'Arik', ContributorsCount: 34},
  {Repo: 'Arik', ContributorsCount: 34},
  {Repo: 'Arik', ContributorsCount: 34},
  {Repo: 'Arik', ContributorsCount: 34},
  {Repo: 'Arik', ContributorsCount: 34},
  {Repo: 'Arik', ContributorsCount: 34},
  {Repo: 'Arik', ContributorsCount: 34},
  {Repo: 'Arik', ContributorsCount: 34},
];


@Component({
  selector: 'app-repos-table',
  templateUrl: './repos-table.component.html',
  styleUrls: ['./repos-table.component.less']
})
export class ReposTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'image', 'repository', 'contributors'];
  reposData = repos;

  constructor() {
  }

  ngOnInit() {
  }

}
