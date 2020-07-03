import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ backgroundColor: '#C6E2FF' }),
        animate(1500),
      ]),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  showData() {
    this.router.navigate(['datalist'], { relativeTo: this.route });
  }
  showCustom() {
    this.router.navigate(['customtext'], { relativeTo: this.route });
  }
  showLanding() {
    this.router.navigate(['']);
  }
}
