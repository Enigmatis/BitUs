import {Component, Input, OnInit} from '@angular/core';
import {ContributorData} from '../../../../types/types';

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
