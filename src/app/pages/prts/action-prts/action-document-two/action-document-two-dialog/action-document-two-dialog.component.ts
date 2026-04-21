import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-action-document-two-dialog',
  templateUrl: './action-document-two-dialog.component.html',
  styleUrls: ['./action-document-two-dialog.component.scss']
})
export class ActionDocumentTwoDialogComponent implements OnInit {

 
  constructor(public dialogRef: MatDialogRef<ActionDocumentTwoDialogComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }
}
