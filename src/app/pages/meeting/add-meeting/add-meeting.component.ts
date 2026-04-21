import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.scss']
})
export class AddMeetingComponent {

  userForm: any;
  showDialog = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddMeetingComponent>
  ) { }



  close() {
    this.dialogRef.close();
  }

  people = [
    { name: 'Pavan Kalyan', selected: false },
    { name: 'Test1', selected: false },
    { name: 'Navin Malik', selected: false },
    { name: 'Gaurav', selected: false },
    { name: 'Contact OM', selected: false },
    { name: 'Ayush', selected: false },
    { name: 'Santosh', selected: false }
  ];

}
