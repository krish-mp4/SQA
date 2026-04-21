import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { AddProjectsComponent } from './add-projects/add-projects.component';
import { StatusModifyComponent } from '../testing-products/status-modify/status-modify.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StatusConfirmationDialogComponent } from './add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
 
 
@Component({
  selector: 'app-testing-projects',
  templateUrl: './testing-projects.component.html',
  styleUrls: ['./testing-projects.component.scss']
})
export class TestingProjectsComponent implements OnInit {
  filterForm: FormGroup;
   filterToggle: boolean = false;
 
   allProjects: any[] = []; // Replace with actual project model/interface
   currentPage: number = 0;
   pageSize: number = 10;
   totalSize: number = 0;
 
   canCreate: boolean = true; // Static permission flag
   canUpdate: boolean = true;
   canDelete: boolean = true;
 
   constructor(private fb: FormBuilder, private dialog: MatDialog) {
     this.filterForm = this.fb.group({
       Keyword: [''],
       Status: [null]
     });
   }
 
   ngOnInit(): void {
     this.getAllProjects();
   }
 
   getAllProjects(): void {
     // Mock data fetch - replace with service/API call
     const mockData = [
       {
         ProjectName: 'Project Alpha',
         ProjectCode: 'PA001',
         IssueReporterLead: 'John Doe',
         ReporterLead: 'Jane Smith',
         VILead: 'Mark Taylor',
         IsActive: true,
         TotalUsed: false
       },
       {
         ProjectName: 'Project Beta',
         ProjectCode: 'PB002',
         IssueReporterLead: 'Alice Johnson',
         ReporterLead: 'Robert Brown',
         VILead: 'Lisa White',
         IsActive: false,
         TotalUsed: true
       },
 
  {
    ProjectName: 'Project Gamma',
    ProjectCode: 'PG003',
    IssueReporterLead: 'Emily Clark',
    ReporterLead: 'Michael Scott',
    VILead: 'Sara Lee',
    IsActive: true,
    TotalUsed: false
  },
  {
    ProjectName: 'Project Delta',
    ProjectCode: 'PD004',
    IssueReporterLead: 'Nathan Drake',
    ReporterLead: 'Elena Fisher',
    VILead: 'Victor Sullivan',
    IsActive: false,
    TotalUsed: true
  },
  {
    ProjectName: 'Project Epsilon',
    ProjectCode: 'PE005',
    IssueReporterLead: 'Chloe Price',
    ReporterLead: 'Max Caulfield',
    VILead: 'Rachel Amber',
    IsActive: true,
    TotalUsed: true
  },
  {
    ProjectName: 'Project Zeta',
    ProjectCode: 'PZ006',
    IssueReporterLead: 'Bruce Wayne',
    ReporterLead: 'Clark Kent',
    VILead: 'Diana Prince',
    IsActive: false,
    TotalUsed: false
  }
 
 
];
 
     // Simulate pagination
     this.totalSize = mockData.length;
     const start = this.currentPage * this.pageSize;
     const end = start + this.pageSize;
     this.allProjects = mockData.slice(start, end);
   }
 
   clearFilter(): void {
     this.filterForm.reset();
     this.getAllProjects();
   }
 
 
   fnHandlePage(event: PageEvent): void {
     this.currentPage = event.pageIndex;
     this.pageSize = event.pageSize;
     this.getAllProjects();
   }
     Confirmation(item: any) {
       let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
         width: 'auto',
         data: { TractorStatusId: item.TractorStatusId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
       });
 
     }
       openEditDialog(value: any) {
    let dialogRef = this.dialog.open(AddProjectsComponent, {
      data: value,
      height: 'auto',
      width: '800px',
    });
    // dialogRef.afterClosed().subscribe(data => {
    //   //if () {
    //     this.getAllProjects();
    //  // }
    // })
  }
 
    deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });
 
 }
}
 
 