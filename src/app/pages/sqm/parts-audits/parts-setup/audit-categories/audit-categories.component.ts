import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPartCategoryComponent } from './add-part-category/add-part-category.component';

@Component({
  selector: 'app-audit-categories',
  templateUrl: './audit-categories.component.html',
  styleUrls: ['./audit-categories.component.scss']
})
export class AuditCategoriesComponent implements OnInit {


  showFilters: boolean = false; 
  selectedCategory: string | null = null;
  selectedStatus: string = '';

  tableData = [
    { name: 'Dimensional Clock ', code: 'DC001', status: 'Active', parameter :'12' },
    { name: 'Surface Finish', code: 'SF001', status: 'Active', parameter :'8' },
    { name: 'Performance', code: 'PE001', status: 'Active', parameter :'10' },
    { name: 'Metallurgical', code: 'MT001', status: 'Active', parameter :'15' },
    { name: 'Mechanical', code: 'MC001', status: 'Active', parameter :'20' }
  ];
selectedKeyword: any;
 

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {}

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  onClear(): void {
    this.selectedCategory = null;
    this.selectedStatus = '';
  }

  onGo(): void {
    console.log('Filters Applied:', { category: this.selectedCategory, status: this.selectedStatus });
  }


 addCategory(data:any) {
  const dialogRef = this.dialog.open(AddPartCategoryComponent, {
    width: '650px',
    disableClose: true ,
    data:data       // prevents closing on backdrop click
  });

//   dialogRef.afterClosed().subscribe((result: { name: string; status: string; }) => {
//     if (result) {
//       // result = { name: '...', status: '...' }
//       this.tableData.push(result);  // or call your API here
//     }
//   });
// }
}
}