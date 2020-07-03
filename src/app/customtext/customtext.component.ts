import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customtext',
  templateUrl: './customtext.component.html',
  styleUrls: ['./customtext.component.scss'],
})
export class CustomtextComponent implements OnInit {
  public text = 'Default Text';
  public counter = 0;
  public styles = {
    color: 'red',
    fontStyle: 'italic',
  };

  constructor() {}

  ngOnInit(): void {}

  cycleStyles() {
    const x = this.counter % 3;
    switch (x) {
      case 0:
        this.styles.color = 'blue';
        break;
      case 1:
        this.styles.color = 'green';
        break;
      case 2:
        this.styles.color = 'orange';
        break;
    }
    this.counter++;
  }
}
