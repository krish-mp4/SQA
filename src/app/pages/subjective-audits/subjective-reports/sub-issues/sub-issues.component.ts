import { AddIssesComponent } from './add-isses/add-isses.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { AddPsrPopComponent } from './add-psr-pop/add-psr-pop.component';

@Component({
  selector: 'app-sub-issues',
  templateUrl: './sub-issues.component.html',
  styleUrls: ['./sub-issues.component.scss']
})
export class SubIssuesComponent implements OnInit {

  // Pagination variable
  
  filterToggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


element = document.getElementById('some-id');
if (element) {
  element.classList.add('some-class');
}

viewMode: number = 2; // 1 = single view, 2 = double view

  images = [
    { title: 'Rear', src: '../../../assets/obj-car.png' },
    { title: 'BSO', src: '../../../assets/obj-seat.png' },
    { title: 'Front', src: '../../../assets/obj-front.png' },
    { title: 'Left Door', src: '../../../assets/obj-door3.png' },
    { title: 'Right Door', src: '../../../assets/obj-door1.png' }
  ];

}
