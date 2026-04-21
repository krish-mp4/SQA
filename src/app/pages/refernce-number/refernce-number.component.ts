import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-refernce-number',
  templateUrl: './refernce-number.component.html',
  styleUrls: ['./refernce-number.component.scss']
})
export class RefernceNumberComponent implements OnInit {

  isBaseInfoActive: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    // Check initial route
    this.checkActiveTab();

    // Listen for route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkActiveTab();
      });
  }

  private checkActiveTab() {
    this.isBaseInfoActive = this.router.url.includes('base-info');
  }

  goBack() {
    this.router.navigate(['/app/complaints']);
  }



}
