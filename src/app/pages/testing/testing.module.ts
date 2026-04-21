import { HighchartsChartModule } from 'highcharts-angular';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TestingIssuesComponent } from './testing-issues/testing-issues.component';
import { TestingProductsComponent } from './testing-products/testing-products.component';
import { TestingTestsComponent } from './testing-tests/testing-tests.component';
import { TestingProjectsComponent } from './testing-projects/testing-projects.component';
import { AddIssuesssComponent } from './testing-issues/add-issuesss/add-issuesss.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddProductsComponent } from './testing-products/add-products/add-products.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StatusModifyComponent } from './testing-products/status-modify/status-modify.component';
import { AddTestsComponent } from './testing-tests/add-tests/add-tests.component';
import { AddProjectsComponent } from './testing-projects/add-projects/add-projects.component';
import { TractorstatusComponent } from './tractorstatus/tractorstatus.component';
import { TeststatusComponent } from './teststatus/teststatus.component';
import { MasterdataComponent } from './masterdata/masterdata.component';
// import { TestMasterDataComponent } from './test-master-data/test-master-data.component';
import { StatusConfirmationDialogComponent } from './testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TestdashboardComponent } from '../dashboard/testdashboard/testdashboard.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddProjectSectionComponent } from './testing-projects/add-project-section/add-project-section.component';



const routes: Routes = [
    { path: "", redirectTo: "test-dashboard", pathMatch: "full" },
    {
        path: 'test-dashboard', component: TestdashboardComponent,
       
    },

    {
        path: 'issues', component: TestingIssuesComponent,
        data: { breadcrumb: 'Issues', description: 'Dashboard  based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' }
    },

    {
        path: 'tractorstatus', component: TractorstatusComponent,
        data: { breadcrumb: 'Tractor Status', description: 'Dashboard  based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' }
    },
    {
        path: 'teststatus', component: TeststatusComponent,
        data: { breadcrumb: 'Test Status', description: 'Dashboard  based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' }
    },

    // {
    //     path: 'testing-masterData', component: MasterdataComponent,
    //     data: { breadcrumb: 'Testing', description: 'Dashboard  based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' }
    // },

    {
        path: "testing-masterData",
        component: MasterdataComponent,
        loadChildren: () =>
            import("./masterdata/masterdata.module").then((m) => m.MasterdataModule
            ),
        data: {
            breadcrumb: 'Master Data', screenId: 4,
            description: "This screen covers Comprehensive list of Data across the application. New data can be added, deleted or modified according to fuctionality."
        }
    },
    {
        path: 'projects', component: TestingProjectsComponent,
        data: { breadcrumb: 'Testing', description: 'Dashboard  based audits can be recorded here for a specific vehicle across a hierarchy of Categories  and checkpoints.  Issues are recorded and a demerit indicating the severity of the issue is recorded.  Demerit master varies with audit type.' }
    },




]

@NgModule({
    declarations: [


        TestingIssuesComponent,
        TestingProductsComponent,
        TestingTestsComponent,
        TestingProjectsComponent,
        AddIssuesssComponent,
        AddProductsComponent,
        StatusModifyComponent,
        AddTestsComponent,
        AddProjectsComponent,
        TractorstatusComponent,
        TeststatusComponent,

        // TestMasterDataComponent,
        StatusConfirmationDialogComponent,
        TestdashboardComponent,
        AddProjectSectionComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatIconModule,
        NgxChartsModule,
        MatButtonModule,
        MatTooltipModule,
        MatCardModule,
        HighchartsChartModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        ReactiveFormsModule    
        // DashboardModule
    ]
})
export class TestingModule { }
