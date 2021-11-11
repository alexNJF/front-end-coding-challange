
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';
import { AbsencesService, MemberService } from '../../services';
import { AgGridTemplates, _Array } from '../../utils';
import { colDef } from './gird.config';

@Component({
  selector: 'app-absences-list',
  templateUrl: './absences-list.component.html',
  styleUrls: ['./absences-list.component.scss']
})
export class AbsencesListComponent implements OnInit {

  overlayLoadingTemplate = AgGridTemplates.overlayLoadingTemplate;
  overlayNoRowsTemplate = AgGridTemplates.overlayNoRowsTemplate;
  columnDefs = colDef //load config from spratate file
  rowData;
  constructor(
    private absencesService: AbsencesService,
    private memberService: MemberService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    forkJoin([
      this.absencesService.getAbsences(),
      this.memberService.getMember()
    ]).subscribe(
      (res) => {
        setTimeout(() => {
          this.rowData = _Array.mergeBy(res[0].payload, res[1].payload, 'userId')
        }, 700)
      },
      (error) => {
        this.toastr.warning("Api Call Error")
        console.log("Api Call Error: ", error);
      });
  }
}
