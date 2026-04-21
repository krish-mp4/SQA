import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-obj-image-dialog',
  templateUrl: './obj-image-dialog.component.html',
  styleUrls: ['./obj-image-dialog.component.scss']
})
export class ObjImageDialogComponent implements OnInit {

  Image: any = '/assets/car10x10.png';
  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<ObjImageDialogComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }
 file: File | null = null;

onDragOver(event: DragEvent) {
  event.preventDefault();
}

onDrop(event: DragEvent) {
  event.preventDefault();
  if (event.dataTransfer?.files.length) {
    this.handleFile(event.dataTransfer.files[0]);
  }
}

onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files?.length) {
    this.handleFile(input.files[0]);
  }
}

handleFile(file: File) {
  this.file = file;

  const reader = new FileReader();
  reader.onload = () => {
    this.Image = reader.result;
  };
  reader.readAsDataURL(file);
}

save() {
  if (!this.file) {
    alert('Please upload a file before saving.');
    return;
  }
  console.log('Saving file:', this.file.name);
  // upload logic here
}

}
