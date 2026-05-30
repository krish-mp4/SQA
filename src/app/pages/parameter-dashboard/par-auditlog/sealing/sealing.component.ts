import { AddCheckpointRequestComponent } from './add-checkpoint-request/add-checkpoint-request.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImgClickPopComponent } from 'src/app/pages/setup/subjective-setup/checkpoint-master/checkpoint-check/img-click-pop/img-click-pop.component';
import { environment } from 'src/environments/environment';
import { ImgPopSealingComponent } from './img-pop-sealing/img-pop-sealing.component';

@Component({
  selector: 'app-sealing',
  templateUrl: './sealing.component.html',
  styleUrls: ['./sealing.component.scss']
})
export class SealingComponent implements OnInit {

  isChecked3: string = 'no';
  isChecked4: string = 'yes';
  isChecked5: string = 'yes';
  isChecked6: string = 'yes';
  isChecked7: string = 'yes';
  isChecked8: string = 'yes';
  isChecked9: string = 'yes';
  isChecked10: string = 'yes';
  isChecked11: string = 'yes';

  // --- GRID DENSITY CONTROL ---
  // Change these numbers to adjust the grid box size. 
  // More rows/cols = smaller boxes. Less rows/cols = bigger boxes.
  gridRows = Array(8).fill(0); 
  gridCols = Array(11).fill(0);

  // Holds the currently displayed image for the HTML binding
  Images: string = '/assets/Right_fender.jpeg'; 

 images = {
    img1: '/assets/Right_fender.jpeg', // Right Fender
    img2: '/assets/Right_Front_Door.jpeg', // Right Front Door
    img3: '/assets/Right_Rear_Door.jpeg', // Right Rear Door
    img4: '/assets/Rear.jpeg', // Rear
    img5: '/assets/Left_Rear_Door.jpeg',   // Left Rear Door (Replace with actual path)
    img6: '/assets/Left_Front_Door.jpeg',  // Left Front Door (Replace with actual path)
    img7: '/assets/Left_Fender.jpeg', // Left Fender (Replace with actual path)
    img8: '/assets/Roof.jpeg',        // Roof (Replace with actual path)
    img9: '/assets/Bonnet.jpeg'       // Bonnet
  };

  constructor(public dialog: MatDialog) {
    if (environment.mode === 1) {
    }
  }

  ngOnInit(): void {
  }

  values = [
    { status: 'Total', value: '128' },
    { status: 'Checks', value: '125' },
    { status: 'Pass', value: '120' },
    { status: 'Fail', value: '5' },
  ]

  values1 = [
    { value: '5.5', row: '10', col: '5', serial: '121', checkpoints: 'checkpoint-1', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { value: '5.5', row: '7', col: '10', serial: '122', checkpoints: 'checkpoint-2', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },
    { value: '5.5', row: '4', col: '5', serial: '123', checkpoints: 'checkpoint-3', measure: 'Alignment', lsl: '0.1', usl: '1.0', unit: 'mm' },
    { value: '5.5', row: '5', col: '3', serial: '124', checkpoints: 'checkpoint-4', measure: 'Consistancy', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { value: '5.5', row: '8', col: '8', serial: '125', checkpoints: 'checkpoint-5', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
  ]

  imgpop(item) {
    this.dialog.open(ImgPopSealingComponent, {
      data: item,
      width: "750px",
      height: "auto"
    })
  }

  requestCheckpoints(item) {
    this.dialog.open(AddCheckpointRequestComponent, {
      data: item,
      width: "1100px",
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
    this.Images = this.images.img1; 
  }
  color4() { 
    this.resetColors(); 
    this.isChecked4 = 'no'; 
    this.Images = this.images.img2; 
  }
  color5() { 
    this.resetColors(); 
    this.isChecked5 = 'no'; 
    this.Images = this.images.img3; 
  }
  color6() { 
    this.resetColors(); 
    this.isChecked6 = 'no'; 
    this.Images = this.images.img4; 
  }
  color7() { 
    this.resetColors(); 
    this.isChecked7 = 'no'; 
    this.Images = this.images.img5; 
  }
  color8() { 
    this.resetColors(); 
    this.isChecked8 = 'no'; 
    this.Images = this.images.img6; 
  }
  color9() { 
    this.resetColors(); 
    this.isChecked9 = 'no'; 
    this.Images = this.images.img7; 
  }
  color10() { 
    this.resetColors(); 
    this.isChecked10 = 'no'; 
    this.Images = this.images.img8; 
  }
  color11() { 
    this.resetColors(); 
    this.isChecked11 = 'no'; 
    this.Images = this.images.img9; 
  }
}