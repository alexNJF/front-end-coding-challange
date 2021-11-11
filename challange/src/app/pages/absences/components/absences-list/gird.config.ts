import * as moment from "moment";

export const colDef = [
  {
    headerName: '',
    field: 'rowid',
    width: 30,
    minWidth: 30,
    resizable: true,
    cellRenderer: (params: any) => {
      let rowId = Number(params.node.id) + 1;
      return String(rowId);
    }
  },
  {
    headerName: 'Name',
    field: 'name',
    width: 80,
    minWidth: 80,
    resizable: true,
  },
  {
    headerName: 'Absences Type',
    field: 'type',
    filter: true,
    width: 150,
    minWidth: 150,
    resizable: true,
  },
  {
    headerName: 'Period',
    field: '',
    width: 90,
    minWidth: 90,
    resizable: true,
    valueFormatter: (params: any) => {
      var start = moment(params.data.startDate, "YYYY-MM-DD");
      var end = moment(params.data.endDate, "YYYY-MM-DD");
      return moment.duration(end.diff(start)).asDays();
    },
  },
  {
    headerName: 'Employ description',
    field: 'memberNote',
    resizable: true,
  },
  {
    headerName: 'Status',
    field: 'sttaus',
    resizable: true,
    valueGetter: (params: any) => {

      if (!params.data.confirmedAt && !params.data.rejectedAt)
        return 'Requested';
      if (!params.data.rejectedAt)
        return 'Confirmed';
      if (!params.data.confirmedAt)
        return 'Rejected';

      return 'UnKnown';
    },
  },
  {
    headerName: 'admin description',
    field: 'admitterNote',
    resizable: true
  },
];
