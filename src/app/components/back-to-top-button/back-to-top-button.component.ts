import { Component, OnInit, HostListener } from '@angular/core';
import { createBrotliCompress } from 'zlib';

@Component({
  selector: 'back-to-top-button',
  templateUrl: './back-to-top-button.component.html',
  styleUrls: ['./back-to-top-button.component.scss'],
})
export class BackToTopButtonComponent implements OnInit {
  constructor() {}

  isHidden: Boolean = true;

  ngOnInit(): void {}

  backToTop() {
    window.scrollTo(0, 0);
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    window.pageYOffset > 300 ? (this.isHidden = false) : (this.isHidden = true);
  }
}
