import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserData} from '../types/types';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.less']
})
export class ProfilePageComponent implements OnInit {
  id: string;

  userData: UserData;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params: any) => this.retrieve(params.id));
  }

  retrieve(id: string) {
    // call server to get user data
    this.userData = {
      id: 's8000111',
      name: 'ישראל ישראלי',
      totalCommitsCount: 5030,
      commitsPerWeek: 300,
      repos: [{name: 'MGF', commitsCount: 34}, {name: 'MGF-Logs', commitsCount: 26}, {
        name: 'Polaris',
        commitsCount: 20
      }]
    };
  }

  ngOnInit() {
  }

}
