import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Material Modules
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

// Components
import { ProjectDashboardComponent } from './project-dashboard.component';
import { ProjectDocumentsComponent } from './project-documents/project-documents.component';
import { ProjectNotesComponent } from './project-notes/project-notes.component';
import { ProjectPhotosComponent } from './project-photos/project-photos.component';

const routes: Routes = [
  {
    path: '', 
    component: ProjectDashboardComponent, // The parent wrapper with the side-nav
    children: [
      // Optional: Redirect to 'notes' by default when hitting /projects/dashboard
      { path: '', redirectTo: 'notes', pathMatch: 'full' }, 
      
      // The child components that will load in the router-outlet
      { path: 'documents', component: ProjectDocumentsComponent },
      { path: 'notes', component: ProjectNotesComponent },
      { path: 'photos', component: ProjectPhotosComponent }
    ]
  }
];

@NgModule({
  declarations: [
    ProjectDashboardComponent,
    ProjectDocumentsComponent,
    ProjectNotesComponent,
    ProjectPhotosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ]
})
export class ProjectDashboardModule { }