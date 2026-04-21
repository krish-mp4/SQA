import { ObjImageDialogComponent } from './obj-image-dialog/obj-image-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ObjSetupAudittypessComponent } from './obj-setup-audittypess/obj-setup-audittypess.component';
import { ImageGallaryZoneDialogComponent } from 'src/app/pages/subjective-audits/prts-subjective-setup/sub-setup-image-gallery/image-gallary-zone-dialog/image-gallary-zone-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ModelspopComponent } from 'src/app/pages/subjective-audits/prts-subjective-setup/sub-setup-module-master/section-pop/modelspop/modelspop.component';

@Component({
  selector: 'app-obj-setup-modules-checkpoints',
  templateUrl: './obj-setup-modules-checkpoints.component.html',
  styleUrls: ['./obj-setup-modules-checkpoints.component.scss']
})
export class ObjSetupModulesCheckpointsComponent implements OnInit {

  filterToggle = false;
  gridToggle = false;
  Status =
    [{ name: 'Active', value: true },
    { name: "Inactive", value: false }];

  constructor(
    public dialog: MatDialog,
    public router: Router) { }

  values = []
  hidden = false;
  url = "/assets/carrear.jpeg"
  Image: any = '/assets/car.png';

  // values1 = [
  //   { title: 'Back Rear Grill', image: "/assets/part1.png", checkpoints: '3', },
  //   { title: 'Front right head lamp', image: "/assets/part2.png", checkpoints: '7', },
  //   { title: 'Back Rear tail lamp', image: "/assets/part3.png", checkpoints: '2', },
  //   { title: 'Front Bumper section', image: "/assets/part5.png", checkpoints: '4', },

  // ]
    modelspop() {
    this.dialog.open(ModelspopComponent, {
      height: '300px',
      width: '700px'
    });
  }
  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }


  values1 = [
    { audit: '200', module: 'Left Fender', checkpoint: '50', min: '10x10', max: '10', status: true, image: "/assets/part1.png",model:'Fortuner' },
    { audit: '961', module: 'Front', checkpoint: '35', min: '10x10', max: '10', status: true, image: "/assets/part1.png", model:'Toyota' },
    { audit: '10', module: 'Right Fender', checkpoint: '45', min: '10x10', max: '10', status: true, image: "/assets/cardoor.png", model:'Toyota Fortuner' },
    { audit: '50', module: 'Right Body', checkpoint: '40', min: '10x10', max: '10', image: "/assets/cardoor.png", model:'Hyundai' },
    { audit: '290', module: 'Trunk', checkpoint: '27', min: '10x10', max: '10', status: true, image: "/assets/part1.png",model:'Ferrari' },
    { audit: '982', module: 'Left Body', checkpoint: '33', min: '10x10', max: '10', status: true, image: "/assets/part1.png",model:'Toyota' },
    { audit: '781', module: 'Left Frant Door', checkpoint: '38', min: '10x10', max: '10', status: true, image: "/assets/cardoor.png", model:'BMW' },
    { audit: '108', module: 'Right Frant Door', checkpoint: '37', min: '10x10', max: '10', status: true, image: "/assets/cardoor.png",model:'Ruby' },

  ]
  opendashboard() {
    window.open('/#/parameter-dashboard/issuelog-par');
  }

  addcheckpoint(item) {
    this.router.navigate(['/app/setup/subjective/overview']);

  }
  saveStatus() {
    // this.alertService.createAlert('Successfully saved.', 1);
  }

  imageSource(val) {
    this.Image = val;
    this.hidden = true;
    // this.hidden = !this.hidden;
    //console.log(this.Image)
    this.dialog.open(ObjImageDialogComponent, {
      width: "600px",
      height: "auto"
    })

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
  openUploadCSV() {

  }

  downloadSampleExcel() {

  }

    imageSource1(val) {
      this.Image = val;
      this.hidden = true;
      this.dialog.open(ImageGallaryZoneDialogComponent, {
        width: "600px",
        height: "auto"
      })

    }

  openAuditTypes() {
      let dialogRef = this.dialog.open(ObjSetupAudittypessComponent, {
        data: null,
        height: 'auto',
        width: '600px'
      });

    }


}
