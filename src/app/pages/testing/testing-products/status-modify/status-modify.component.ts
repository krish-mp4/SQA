import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-status-modify',
  templateUrl: './status-modify.component.html',
  styleUrls: ['./status-modify.component.scss']
})
export class StatusModifyComponent  {

  constructor(
    public dialogRef: MatDialogRef<StatusModifyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }

}
