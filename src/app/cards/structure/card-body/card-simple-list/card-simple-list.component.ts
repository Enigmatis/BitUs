import {Component, Input, OnInit} from '@angular/core';

export interface SimpleData {
  title: string;
  value: number;
}


@Component({
  selector: 'app-card-simple-list',
  templateUrl: './card-simple-list.html',
  styleUrls: ['./card-simple-list.component.less']
})
export class CardSimpleListComponent implements OnInit {
  @Input() criteria: string;
  @Input() data: SimpleData[];

  constructor() {
  }

  ngOnInit() {
  }

}
