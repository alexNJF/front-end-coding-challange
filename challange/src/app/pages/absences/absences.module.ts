import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbsencesRoutingModule } from './absences-routing.module';
import { AbsencesComponent } from './absences.component';
import { AgGridModule } from 'ag-grid-angular';
import { AbsencesListComponent } from './components/absences-list/absences-list.component';


@NgModule({
  declarations: [
    AbsencesComponent,
    AbsencesListComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    AbsencesRoutingModule
  ]
})
export class AbsencesModule { }
