import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-process-category-pop',
  templateUrl: './add-process-category-pop.component.html',
  styleUrls: ['./add-process-category-pop.component.scss']
})
export class AddProcessCategoryPopComponent implements OnInit {
  selectedCommodity: string = '';

  constructor(private dialogRef: MatDialogRef<AddProcessCategoryPopComponent>) {}

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    // emit data back to parent
    this.dialogRef.close({ commodity: this.selectedCommodity });
  }
}