import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PartsData } from '../../PartsData';

@Component({
  selector: 'app-fishbone',
  templateUrl: './fishbone.component.html',
  styleUrls: ['./fishbone.component.scss']
})
export class FishboneComponent implements OnInit {

  constructor(public router: Router,) { }

  ngOnInit(): void {
    if (environment.mode == 1) {
      this.values = PartsData.fish();
    }
    else {

    }
  }
  values = [



  ]
  next() {
    this.router.navigate(['/app/prtsnavbar/why']);
  }
  back() {
    this.router.navigate(['/app/prtsnavbar/diagnosis']);
  }

}
