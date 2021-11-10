import { AbsencesListComponent } from './components/absences-list/absences-list.component';
import { AbsencesComponent } from './absences.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AbsencesComponent,
    children: [
      {
        path: '',
        component: AbsencesListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbsencesRoutingModule { }
