import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// --- ADDED FORMS MODULES (Required for formControlName and ngModel) ---
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

// --- ANGULAR MATERIAL IMPORTS ---
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';   // <-- FIXES THE BUTTONS
import { MatTooltipModule } from '@angular/material/tooltip'; // <-- FIXES TOOLTIPS ON ICONS

// Import your components
import { InnerScreensComponent } from './inner-screens.component';
import { PartsAuditDetailsComponent } from './parts-audit-details/parts-audit-details.component';
import { PartsAuditRefComponent } from './parts-audit-ref/parts-audit-ref.component';
import { ProcessAuditDetailsComponent } from './process-audit-details/process-audit-details.component';
import { ProcessAuditRefComponent } from './process-audit-ref/process-audit-ref.component';
import { ProcessCompletedRefComponent } from './process-completed-ref/process-completed-ref.component';
import { PartsCompletedRefComponent } from './parts-completed-ref/parts-completed-ref.component';

const routes: Routes = [
  {
    path: '',
    component: InnerScreensComponent, 
    children: [
      { path: 'parts-audit-details', component: PartsAuditDetailsComponent },
      { path: 'parts-audit-ref', component: PartsAuditRefComponent },
      { path: 'process-audit-details', component: ProcessAuditDetailsComponent },
      { path: 'process-audit-ref', component: ProcessAuditRefComponent },
       { path: 'process-completed-ref', component: ProcessCompletedRefComponent },
       { path: 'parts-completed-ref', component: PartsCompletedRefComponent },
      
      { path: '', redirectTo: 'process-audit-details', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
    // --- ADD THE MISSING MODULES HERE ---
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,  
    MatTooltipModule  
  ],
  exports: [RouterModule],
  declarations: [
    InnerScreensComponent,
    PartsAuditDetailsComponent,
    PartsAuditRefComponent,
    ProcessAuditDetailsComponent,
    ProcessAuditRefComponent,
    ProcessCompletedRefComponent,
    PartsCompletedRefComponent
  ]
})
export class InnerScreensModule { }