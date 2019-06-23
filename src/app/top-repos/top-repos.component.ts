import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-repos',
  templateUrl: './top-repos.component.html',
  styleUrls: ['./top-repos.component.less']
})
export class TopReposComponent implements OnInit {

  @Input() topRepos: RepositoryContributors[];
  constructor() { }

  ngOnInit() {
  }

}

export interface RepositoryContributors {
  repositoryName: string;
  contributorsCount: number;
  topContributor: string;
}
