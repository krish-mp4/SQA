import { ImgClickPopComponent } from './img-click-pop/img-click-pop.component';
import { Router } from '@angular/router';
import { routes } from './../../../../radar/radar-parameter/radar-parameter.module';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { AddCheckpointComponent } from '../add-checkpoint/add-checkpoint.component';

@Component({
  selector: 'app-checkpoint-check',
  templateUrl: './checkpoint-check.component.html',
  styleUrls: ['./checkpoint-check.component.scss']
})
export class CheckpointCheckComponent implements OnInit {

  constructor(public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
  }
  Image: any = '/assets/car10x10.png';
  values = [
    { value: '5.5', row: '10', col: '9', serial: '121', checkpoints: 'checkpoint-1', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { value: '3.2', row: '9', col: '8', serial: '122', checkpoints: 'checkpoint-2', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },
    { value: '5.5', row: '6', col: '7', serial: '123', checkpoints: 'checkpoint-3', measure: 'Alignment', lsl: '0.1', usl: '1.0', unit: 'mm' },
    { value: '5.5', row: '3', col: '4', serial: '124', checkpoints: 'checkpoint-4', measure: 'Consistancy', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { value: '5.5', row: '9', col: '2', serial: '125', checkpoints: 'checkpoint-5', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { value: '5.5', row: '4', col: '9', serial: '126', checkpoints: 'checkpoint-8', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },
    { value: '5.5', row: '2', col: '9', serial: '127', checkpoints: 'checkpoint-9', measure: 'Alignment', lsl: '0.1', usl: '1.0', unit: 'mm' },
    { value: '5.5', row: '3', col: '7', serial: '128', checkpoints: 'checkpoint-10', measure: 'Consistancy', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { value: '5.5', row: '8', col: '6', serial: '129', checkpoints: 'checkpoint-11', measure: 'GAP', lsl: '0.20', usl: '1.2', unit: 'mm' },
    { value: '5.5', row: '9', col: '10', serial: '130', checkpoints: 'checkpoint-12', measure: 'Flush', lsl: '0.22', usl: '1.25', unit: 'mm' },

  ]
  imgpop(item) {
    this.dialog.open(ImgClickPopComponent, {
      data: item,
      width: "500px",
      height: "auto"
    })

  }

  addcheckpoint(item) {
    this.dialog.open(AddCheckpointComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })

  }
  next() {
    this.router.navigate(['/app/new-audits/objective-audits/prts-objective-setup/obj-setup-modules-checkpoints']);

  }
  back() {
    this.router.navigate(['/app/setup/subjective/overview']);
  }

  goBack() {
    this.router.navigate(['/app/objective-audits/prts-objective-setup/obj-setup-modules-checkpoints']);
  }

}
