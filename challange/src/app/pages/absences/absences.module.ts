import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AbsencesRoutingModule } from './absences-routing.module';
import { AbsencesComponent } from './absences.component';
import { AgGridModule } from 'ag-grid-angular';
import { AbsencesListComponent } from './components/absences-list/absences-list.component';
import { AbsencesService } from './services/absences.service';
import { MemberService } from './services/member.service';
import { MomentModule } from 'ngx-moment';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AbsencesComponent,
    AbsencesListComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    MomentModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AbsencesRoutingModule
  ],
  providers:[
    AbsencesService,MemberService,ToastrService
  ]
})
export class AbsencesModule { }
