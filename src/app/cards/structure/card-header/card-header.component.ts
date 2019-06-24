import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.less']
})
export class CardHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() iconUrl: string;
  @Input() description: string;
  @Input() theme: string;
  @Input() faIcon: string;

  constructor() {
  }

  ngOnInit() {
  }

}
