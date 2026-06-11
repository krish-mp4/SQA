import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-question-pop',
  templateUrl: './question-pop.component.html',
  styleUrls: ['./question-pop.component.scss']
})
export class QuestionPopComponent     {


  questionText: string = '';
  isMandatory: boolean = false;
  isPriority: boolean = false;

  constructor(public dialogRef: MatDialogRef<QuestionPopComponent>) {}

  onCancel(): void {
    // Closes the dialog without returning data
    this.dialogRef.close();
  }

  onSave(): void {
    // Bundle the data and pass it back to the parent component
    const result = {
      question: this.questionText,
      mandatory: this.isMandatory ? 'Yes' : 'No', // Format as needed
      priority: this.isPriority ? 'High' : 'Normal' // Format as needed
    };
    
    this.dialogRef.close(result);
  }
}
