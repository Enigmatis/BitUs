import {Component, Input, OnInit} from '@angular/core';
import {SimpleData} from '../../cards/structure/card-body/card-simple-list/card-simple-list.component';
import {Repo} from "../../types/types";

@Component({
  selector: 'app-repos-list-card',
  templateUrl: './repos-list-card.component.html',
  styleUrls: ['./repos-list-card.component.less']
})
export class ReposListCardComponent implements OnInit {
  @Input() title: string;
  @Input() theme: string;
  @Input() criteria: string;
  @Input() repos: Repo[];
  data: SimpleData[] = [];

  constructor() {
  }


  ngOnInit() {
    this.repos.forEach(repo => {
      this.data.push({title: repo.name, value: repo.commitsCount, id: repo.name});
    });
  }

}
