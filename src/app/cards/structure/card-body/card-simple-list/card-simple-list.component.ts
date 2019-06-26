import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

export interface SimpleData {
  title: string;
  value: number;
  id: string;
}


@Component({
  selector: 'app-card-simple-list',
  templateUrl: './card-simple-list.html',
  styleUrls: ['./card-simple-list.component.less']
})
export class CardSimpleListComponent implements OnInit {
  @Input() criteria: string;
  @Input() data: SimpleData[];
  @Input() url: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  moveTo(url: string, id: string) {
    if (url) {
      this.router.navigateByUrl(url + '/' + id);
    }
  }
}
