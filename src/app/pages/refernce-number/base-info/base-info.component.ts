import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Stepper from 'bs-stepper';
import { StatusModifyComponent } from '../../testing/testing-products/status-modify/status-modify.component';
import { MatDialog } from '@angular/material/dialog';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { StatusConfirmationDialogComponent } from '../../testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.scss']
})
export class BaseInfoComponent {

  totalSize = 0;
  @ViewChild('yourElement') yourElement!: ElementRef;
  bsStepperInstance!: Stepper;

  baseInfoFormGroup!: FormGroup;
  overviewFormGroup!: FormGroup;
  // yourElement: any;
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }



  ngOnInit() {
    this.bsStepperInstance = new Stepper(document.querySelector('#stepper'), {
      linear: false,
      animation: true
    });

    // this.baseInfoFormGroup = this.fb.group({
    //   reference: [''],
    //   criticality: [''],
    //   targetDate: [''],
    //   failureDate: ['']
    // });


    this.baseInfoFormGroup = this.fb.group({
      reference: [''],
      subject: [''],
      complaintDate:[''],
      description:[''],
      // problemStatement: [''],
      // continent: [''],
      // country: [''],
      model: [''],
      // targetDate: [''],
      // failureDate: [''],
      // criticality: [''],
      // detailedStatus: [''],
      // distributorName: [''],
      serialNo: [''],
      
    });
    this.overviewFormGroup = this.fb.group({

      distributor:[''],
      country:[''],
      city:[''],
      customer:[''],
      severity:[''],
      failureDate:[''],
      dueDate:['']



      // status: [''],
      // customer:[''],
      // distributor:[''],
      // expectedFinishDate: [''],
      // actualFinishDate: [''],
      // feedback: [''],
      // criticality: [''], // <-- Duplicate name is OK if it's part of this group
      // lead: [''],
      // problemStatement: [''] // <-- Same here
    });
  }

  goBack() {
    this.router.navigate(['/app/complaints']);
  }

  onSubmit() {
    console.log('Form submitted successfully');
    this.router.navigate(['/app/complaints']);
    this.bsStepperInstance.to(3);
  }
  ngAfterViewInit() {
    if (this.yourElement?.nativeElement) {
      this.yourElement.nativeElement.classList.add('your-class');
    }
  }
  onPsScrollY() {
    const el = document.getElementById('some-element-id');
    if (el) {
      el.classList.add('scrolled');
    }
  }




  openConfirmDialog(applicant: any): void {
    const dialogRef = this.dialog.open(StatusModifyComponent, {
      width: '300px',
      data: { status: applicant.status }
    });
  }

  notes = [
    { date: '24/09/2024', description: 'My car’s engine has been stalling unexpectedly while driving', status: 'Active' },
    { date: '24/09/2024', description: 'My brakes have been making a loud squeaking noise...', status: 'Active' },
    { date: '24/09/2024', description: 'Transmission in my car seems to slip between gears', status: 'Active' }
  ];

  public openNotes(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(AddNotesComponent, {
      data: id,
      height: 'auto',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((data: any) => { });
  }
  Confirmation(item: any) {
    let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
      width: 'auto',
      data: { title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
    });
  }



  deleteConfirmation() {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { component: null, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?', isConfirmation: true }
    });
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
        }
      }
    );
  }

}
