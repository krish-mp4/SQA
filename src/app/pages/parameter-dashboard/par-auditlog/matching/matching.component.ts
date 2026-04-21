import { AddRequestComponent } from './add-request/add-request.component';
import { ImgPopComponent } from './img-pop/img-pop.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImgClickPopComponent } from 'src/app/pages/setup/subjective-setup/checkpoint-master/checkpoint-check/img-click-pop/img-click-pop.component';
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

  constructor(public dialog: MatDialog) {
    if (environment.mode === 1) {
    }
  }
  ngOnInit(): void {
  }
  Image: any = '/assets/car10x10.png';


  // values = [
  //   { module: 'Left', check: '23', pass: '22', fail: '1' },
  //   { module: 'Front', check: '41', pass: '38', fail: '3' },
  //   { module: 'Right', check: '15', pass: '13', fail: '2' },
  //   { module: 'Rear', check: '25', pass: '25', fail: '0' },
  //   { module: 'Top', check: '12', pass: '10', fail: '2' },
  //   { module: 'Bottom', check: '12', pass: '9', fail: '3' },
  //   { module: 'Total', check: '128', pass: '117', fail: '11' },
  // ]

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

  color3() {
    this.isChecked3 = 'no';
    this.isChecked4 = 'yes';
    this.isChecked5 = 'yes';
    this.isChecked6 = 'yes';
    this.isChecked7 = 'yes';
    this.isChecked8 = 'yes';
    this.isChecked9 = 'yes';
  }
  color4() {
    this.isChecked3 = 'yes';
    this.isChecked4 = 'no';
    this.isChecked5 = 'yes';
    this.isChecked6 = 'yes';
    this.isChecked7 = 'yes';
    this.isChecked8 = 'yes';
    this.isChecked9 = 'yes';
  }
  color5() {
    this.isChecked3 = 'yes';
    this.isChecked4 = 'yes';
    this.isChecked5 = 'no';
    this.isChecked6 = 'yes';
    this.isChecked7 = 'yes';
    this.isChecked8 = 'yes';
    this.isChecked9 = 'yes';
  }
  color6() {
    this.isChecked3 = 'yes';
    this.isChecked4 = 'yes';
    this.isChecked5 = 'yes';
    this.isChecked6 = 'no';
    this.isChecked7 = 'yes';
    this.isChecked8 = 'yes';
    this.isChecked9 = 'yes';
  }
  color7() {
    this.isChecked3 = 'yes';
    this.isChecked4 = 'yes';
    this.isChecked5 = 'yes';
    this.isChecked6 = 'yes';
    this.isChecked7 = 'no';
    this.isChecked8 = 'yes';
    this.isChecked9 = 'yes';
  }
  color8() {
    this.isChecked3 = 'yes';
    this.isChecked4 = 'yes';
    this.isChecked5 = 'yes';
    this.isChecked6 = 'yes';
    this.isChecked7 = 'yes';
    this.isChecked8 = 'no';
    this.isChecked9 = 'yes';
  }
  color9() {
    this.isChecked3 = 'yes';
    this.isChecked4 = 'yes';
    this.isChecked5 = 'yes';
    this.isChecked6 = 'yes';
    this.isChecked7 = 'yes';
    this.isChecked8 = 'yes';
    this.isChecked9 = 'no';
  }

}

