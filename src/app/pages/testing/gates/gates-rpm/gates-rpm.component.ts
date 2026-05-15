import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gates-rpm',
  templateUrl: './gates-rpm.component.html',
  styleUrls: ['./gates-rpm.component.scss']
})
export class GatesRpmComponent implements OnInit {
 isNavOpen = true;

  constructor() { }

  ngOnInit(): void { }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

}
