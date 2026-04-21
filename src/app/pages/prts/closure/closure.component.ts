import { AddDocumentComponent } from './closur-note/add-document/add-document.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PartsData } from '../PartsData';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-closure',
  templateUrl: './closure.component.html',
  styleUrls: ['./closure.component.scss']
})
export class ClosureComponent implements OnInit {

  constructor(public router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    if (environment.mode == 1) {
      this.values = PartsData.closur();
    }
    else {

    }
  }
  values = [

  ]
  next() {
    this.router.navigate(['/app/prtsnavbar/summary']);
  }
  back() {
    this.router.navigate(['/app/prtsnavbar/d7']);
  }
  public adddocument(auditdata) {
    let dialogRef = this.dialog.open(AddDocumentComponent, {
      data: auditdata,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
