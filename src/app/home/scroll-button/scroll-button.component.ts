import {Component, Input, OnInit} from '@angular/core';
import {AnimateScrollService} from 'ng-animate-scroll';

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.less']
})
export class ScrollButtonComponent implements OnInit {

  @Input() scrollTargets: string[];
  @Input() scrollDuration: number;

  currentTarget = 0;

  constructor(private animateService: AnimateScrollService) { }

  ngOnInit() {
  }

  scrollToNextTarget() {
    this.currentTarget = (this.currentTarget + 1) % this.scrollTargets.length;
    this.animateService.scrollToElement(this.scrollTargets[this.currentTarget], this.scrollDuration);
  }

}
