import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbsencesRoutingModule } from './absences-routing.module';
import { AbsencesComponent } from './absences.component';


@NgModule({
  declarations: [
    AbsencesComponent
  ],
  imports: [
    CommonModule,
    AbsencesRoutingModule
  ]
})
export class AbsencesModule { }
