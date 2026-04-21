import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { Onepager } from '../Onepager';
import { AddMitigationComponent } from './add-mitigation/add-mitigation.component';

@Component({
  selector: 'app-mitigation-one-pager',
  templateUrl: './mitigation-one-pager.component.html',
  styleUrls: ['./mitigation-one-pager.component.scss']
})
export class MitigationOnePagerComponent implements OnInit {

  totalSize: any;
  currentPage: any;
  pageSize: any;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
    if (environment.mode == 1) {
      this.values = Onepager.alert();
    }
    else {

    }
  }

  values = [

  ];

  public addParameter(auditdata) {
    let dialogRef = this.dialog.open(AddMitigationComponent, {
      data: auditdata,
      height: 'auto',
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  addMeeting(item) {
    // this.dialog.open(AddMeetingComponent, {
    //   data: item,
    //   width: "850px",
    //   height: "auto"
    // })
  }

}
