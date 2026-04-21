import { Component, OnInit } from '@angular/core';
import { StatusConfirmationDialogComponent } from '../../testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AddupdsComponent } from 'src/app/addupds/addupds.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent  {
  constructor(public dialog: MatDialog,) { }
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
  filterToggle: boolean = false;
  maskInactive: boolean = false;


 stepData = [
    { step: 'Intake', status: true, startDate: '2025-06-01', finishDate: '2025-06-05', days: 4, responsibility: 'Karthik Varanasi',done:false },
    { step: 'Field Info Awaited', status: 'Inactive', startDate: '2025-05-20', finishDate: '2025-05-25', days: 5, responsibility: 'Karthik Varanasi',done:false },
    { step: 'Failed Part Awaited', status: false, startDate: '2025-06-10', finishDate: '2025-06-15', days: 5, responsibility: 'Karthik Varanasi',done:true },
    { step: 'Containment', status: 'Inactive', startDate: '2025-06-03', finishDate: '2025-06-08', days: 5, responsibility: 'Karthik Varanasi',done:false },
    { step: 'Investigation', status: false, startDate: '2025-06-12', finishDate: '2025-06-18', days: 6, responsibility: 'Karthik Varanasi',done:false },
    { step: 'Design Review', status: false, startDate: '2025-06-01', finishDate: '2025-06-06', days: 5, responsibility: 'Karthik Varanasi',done:false },
    { step: 'Supplier Action', status: false, startDate: '2025-05-28', finishDate: '2025-06-02', days: 5, responsibility: 'Karthik Varanasi',done:true },
    { step: 'CAPA', status: 'Inactive', startDate: '2025-06-04', finishDate: '2025-06-09', days: 5, responsibility: 'Karthik Varanasi',done:true },
    { step: 'Implemantation', status: 'Active', startDate: '2025-05-30', finishDate: '2025-06-04', days: 5, responsibility: 'Karthik Varanasi',done:false },
    { step: 'Verification', status: 'Inactive', startDate: '2025-06-06', finishDate: '2025-06-10', days: 4, responsibility: 'Karthik Varanasi',done:true },
    { step: 'Monitoring', status: 'Active', startDate: '2025-06-11', finishDate: '2025-06-14', days: 3, responsibility: 'Karthik Varanasi',done:true },
    { step: 'Prevention', status: false, startDate: '2025-06-01', finishDate: '2025-06-01', days: 0, responsibility: 'Karthik Varanasi',done:true },
    { step: 'Recognition', status: false, startDate: '2025-06-01', finishDate: '2025-06-01', days: 0, responsibility: 'Karthik Varanasi',done:false },
    { step: 'Closure', status: false, startDate: '2025-06-01', finishDate: '2025-06-01', days: 0, responsibility: 'Karthik Varanasi',done:false },
    { step: 'Completed', status: false, startDate: '2025-06-01', finishDate: '2025-06-01', days: 0, responsibility: 'Karthik Varanasi',done:false }
  ];
        Confirmation(item: any) {
      let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
        width: 'auto',
        data: { TractorStatusId: item.TractorStatusId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
      });
    }
      public addupdate(item: any) {
    this.dialog.open(AddupdsComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }

  deleteConfirmation() {
        let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
          width: 'auto',
          data: { component: null, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?', isConfirmation: true }
        });
        dialogRef.afterClosed().subscribe(
          (data: any) => {
            if (data) {
            }
          }
        );
      }
}
