import { Component } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scroll-up-button',
  templateUrl: './scroll-up-button.component.html',
  styleUrls: ['./scroll-up-button.component.css'],
})
export class ScrollUpButton {
  faArrowUp = faArrowUp;

  constructor() {}

  scrollTop() {
    window.scrollTo(0, 0);
  }
}
