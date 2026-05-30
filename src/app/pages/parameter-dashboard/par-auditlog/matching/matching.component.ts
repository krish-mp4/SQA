import { AddRequestComponent } from './add-request/add-request.component';
import { ImgPopComponent } from './img-pop/img-pop.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.scss']
})
export class MatchingComponent implements OnInit {

  isChecked3: string = 'no';
  isChecked4: string = 'yes';
  isChecked5: string = 'yes';
  isChecked6: string = 'yes';
  isChecked7: string = 'yes';
  isChecked8: string = 'yes';
  isChecked9: string = 'yes';
  // Added states for Roof and Bonnet
  isChecked10: string = 'yes';
  isChecked11: string = 'yes';

  // --- GRID DENSITY CONTROL ---
  gridRows = Array(8).fill(0); 
  gridCols = Array(11).fill(0);

  // Holds the currently displayed image for the HTML binding
  Image: string = '/assets/Right_fender.jpeg'; 

  // Object storing the image paths for each section
  images = {
    img1: '/assets/Right_fender.jpeg', // Right Fender
    img2: '/assets/Right_Front_Door.jpeg', // Right Front Door
    img3: '/assets/Right_Rear_Door.jpeg', // Right Rear Door
    img4: '/assets/Rear.jpeg', // Rear
    img5: '/assets/Left_Rear_Door.jpeg',   // Left Rear Door 
    img6: '/assets/Left_Front_Door.jpeg',  // Left Front Door 
    img7: '/assets/Left_Fender.jpeg', // Left Fender 
    img8: '/assets/Roof.jpeg',        // Roof 
    img9: '/assets/Bonnet.jpeg'       // Bonnet
  };

  constructor(public dialog: MatDialog) {
    if (environment.mode === 1) {
    }
  }

  ngOnInit(): void {
  }

  values = [
    { status: 'Total', value: '75' },
    { status: 'Checks', value: '71' },
    { status: 'Pass', value: '65' },
    { status: 'Fail', value: '6' },
  ]

  values1 = [
    { value: '5.5', row: '10', col: '5', serial: '121', checkpoints: 'Checkpoint-1', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { value: '5.5', row: '7', col: '10', serial: '122', checkpoints: 'Checkpoint-2', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },
    { value: '5.5', row: '4', col: '5', serial: '123', checkpoints: 'Checkpoint-3', measure: 'Alignment', lsl: '0.1', usl: '1.0', unit: 'mm' },
    { value: '5.5', row: '5', col: '3', serial: '124', checkpoints: 'Checkpoint-4', measure: 'Consistancy', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { value: '5.5', row: '8', col: '8', serial: '125', checkpoints: 'Checkpoint-5', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
  ]

  request(item) {
    this.dialog.open(AddRequestComponent, {
      data: item,
      width: "1100px",
      height: "auto"
    })
  }

  imgpop(item) {
    this.dialog.open(ImgPopComponent, {
      data: item,
      width: "750px",
      height: "auto"
    })
  }

  // Helper method to reset all tabs to inactive state
  resetColors() {
    this.isChecked3 = 'yes';
    this.isChecked4 = 'yes';
    this.isChecked5 = 'yes';
    this.isChecked6 = 'yes';
    this.isChecked7 = 'yes';
    this.isChecked8 = 'yes';
    this.isChecked9 = 'yes';
    this.isChecked10 = 'yes';
    this.isChecked11 = 'yes';
  }

  // Tab click methods
  color3() {
    this.resetColors();
    this.isChecked3 = 'no';
    this.Image = this.images.img1;
  }
  color4() {
    this.resetColors();
    this.isChecked4 = 'no';
    this.Image = this.images.img2;
  }
  color5() {
    this.resetColors();
    this.isChecked5 = 'no';
    this.Image = this.images.img3;
  }
  color6() {
    this.resetColors();
    this.isChecked6 = 'no';
    this.Image = this.images.img4;
  }
  color7() {
    this.resetColors();
    this.isChecked7 = 'no';
    this.Image = this.images.img5;
  }
  color8() {
    this.resetColors();
    this.isChecked8 = 'no';
    this.Image = this.images.img6;
  }
  color9() {
    this.resetColors();
    this.isChecked9 = 'no';
    this.Image = this.images.img7;
  }
  color10() {
    this.resetColors();
    this.isChecked10 = 'no';
    this.Image = this.images.img8;
  }
  color11() {
    this.resetColors();
    this.isChecked11 = 'no';
    this.Image = this.images.img9;
  }
}