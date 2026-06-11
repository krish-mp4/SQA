import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ObjSetupAudittypessComponent } from './obj-setup-audittypess/obj-setup-audittypess.component';
import { ImageGallaryZoneDialogComponent } from 'src/app/pages/subjective-audits/prts-subjective-setup/sub-setup-image-gallery/image-gallary-zone-dialog/image-gallary-zone-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ModelspopComponent } from 'src/app/pages/subjective-audits/prts-subjective-setup/sub-setup-module-master/section-pop/modelspop/modelspop.component';
import { ObjImageDialogComponent } from './obj-image-dialog/obj-image-dialog.component';

@Component({
  selector: 'app-obj-setup-modules-checkpoints',
  templateUrl: './obj-setup-modules-checkpoints.component.html',
  styleUrls: ['./obj-setup-modules-checkpoints.component.scss']
})
export class ObjSetupModulesCheckpointsComponent implements OnInit {

  filterToggle = false;
  gridToggle = false;
  Status = [
    { name: 'Active', value: true },
    { name: "Inactive", value: false }
  ];

  values: any[] = [];
  hidden = false;
  url = "/assets/carrear.jpeg";
  Image: any = '/assets/car.png';

values1 = [
  {
    audit: '200',
    module: 'Right Fender',
    checkpoint: '50',
    min: '10x10',
    max: '10',
    status: true,
    image: "/assets/Swift/Right_Fender.png",
    model: 'Fortuner',
    audittype: '4/9',
    highlightedCells: [
      { row: 1, col: 2 },
      { row: 1, col: 3 },
      { row: 2, col: 2 }
    ]
  },
  {
    audit: '961',
    module: 'Right Front Door',
    checkpoint: '35',
    min: '10x10',
    max: '10',
    status: true,
    image: "/assets/Swift/Right_Front_Door.png",
    model: 'Toyota',
    audittype: '6/9',
    highlightedCells: [
      { row: 4, col: 5 },
      { row: 4, col: 6 },
      { row: 5, col: 5 },
      { row: 6, col: 7 }
    ]
  },
  {
    audit: '10',
    module: 'Right Rear Door',
    checkpoint: '45',
    min: '10x10',
    max: '10',
    status: true,
    image: "/assets/Swift/Right_Rear_Door.png",
    model: 'Toyota Fortuner',
    audittype: '5/9',
    highlightedCells: [
      { row: 2, col: 8 },
      { row: 3, col: 8 },
      { row: 4, col: 7 }
    ]
  },
  {
    audit: '50',
    module: 'Rear',
    checkpoint: '40',
    min: '10x10',
    max: '10',
    image: "/assets/Swift/Back.png",
    model: 'Hyundai',
    audittype: '4/9',
    highlightedCells: [
      { row: 5, col: 4 },
      { row: 5, col: 5 },
      { row: 6, col: 5 }
    ]
  },
  {
    audit: '290',
    module: 'Left Rear Door',
    checkpoint: '27',
    min: '10x10',
    max: '10',
    status: true,
    image: "/assets/Swift/Left_Rear_Door.png",
    model: 'Ferrari',
    audittype: '7/9',
    highlightedCells: [
      { row: 3, col: 2 },
      { row: 4, col: 2 },
      { row: 4, col: 3 },
      { row: 5, col: 3 }
    ]
  },
  {
    audit: '982',
    module: 'Left Front Door',
    checkpoint: '33',
    min: '10x10',
    max: '10',
    status: true,
    image: "/assets/Swift/Left_Front_Door.png",
    model: 'Toyota',
    audittype: '6/9',
    highlightedCells: [
      { row: 2, col: 4 },
      { row: 3, col: 4 },
      { row: 3, col: 5 }
    ]
  },
  {
    audit: '781',
    module: 'Left Fender',
    checkpoint: '38',
    min: '10x10',
    max: '10',
    status: true,
    image: "/assets/Swift/Left_Fender.png",
    model: 'BMW',
    audittype: '5/9',
    highlightedCells: [
      { row: 1, col: 6 },
      { row: 2, col: 6 },
      { row: 2, col: 7 }
    ]
  },
  {
    audit: '108',
    module: 'Roof',
    checkpoint: '37',
    min: '10x10',
    max: '10',
    status: true,
    image: "/assets/Swift/Roof.png",
    model: 'Ruby',
    audittype: '4/9',
    highlightedCells: [
      { row: 4, col: 4 },
      { row: 4, col: 5 },
      { row: 5, col: 4 },
      { row: 5, col: 5 }
    ]
  },
  {
    audit: '851',
    module: 'Bonnet',
    checkpoint: '39',
    min: '10x10',
    max: '10',
    status: true,
    image: "/assets/Swift/Bonnet.png",
    model: 'Ruby',
    audittype: '5/9',
    highlightedCells: [
      { row: 2, col: 3 },
      { row: 2, col: 4 },
      { row: 3, col: 3 },
      { row: 3, col: 4 },
      { row: 4, col: 4 }
    ]
  }
];

  constructor(
    public dialog: MatDialog,
    public router: Router
  ) { }

  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1;
    } else {
      return;
    }
  }

  modelspop() {
    this.dialog.open(ModelspopComponent, {
      height: '300px',
      width: '700px'
    });
  }

  opendashboard() {
    window.open('/#/parameter-dashboard/issuelog-par'); 
  }

  addcheckpoint(item: any) {
    const selectedImage = item && item.image ? item.image : '/assets/car10x10.png';
  
    // Save image and ENABLE the overview tab
    sessionStorage.setItem('currentCheckpointImage', selectedImage);
    sessionStorage.setItem('disableOverview', 'false');
  
    this.router.navigate(['/app/setup/subjective/check']);
  }
  
  opencheckpoint(item: any) {
    const selectedImage = item && item.image ? item.image : '/assets/car10x10.png';
    const cellsToHighlight = item && item.highlightedCells ? item.highlightedCells : [];
  
    // Save image, DISABLE the overview tab, and save highlighted cells
    sessionStorage.setItem('currentCheckpointImage', selectedImage);
    sessionStorage.setItem('disableOverview', 'true');
    sessionStorage.setItem('highlightedCells', JSON.stringify(cellsToHighlight));
  
    this.router.navigate(['/app/setup/subjective/check']);
  }

  saveStatus() {
    // this.alertService.createAlert('Successfully saved.', 1);
  }

  imageSource(val: any) {
    this.dialog.open(ObjImageDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: {
        image: val
      }
    });
  }

  deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });
  }

  Confirmation(item: any) {
    let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
      width: 'auto',
      data: { TractorStatusId: item.TractorStatusId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
    });
  }

  openUploadCSV() {}

  downloadSampleExcel() {}

  imageSource1(val: any) {
    this.Image = val;
    this.hidden = true;
    this.dialog.open(ImageGallaryZoneDialogComponent, {
      width: "600px",
      height: "auto"
    });
  }

  openAuditTypes() {
    let dialogRef = this.dialog.open(ObjSetupAudittypessComponent, {
      data: null,
      height: 'auto',
      width: '600px'
    });
  }
}