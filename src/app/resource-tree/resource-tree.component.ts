import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-tree',
  templateUrl: './resource-tree.component.html',
  styleUrls: ['./resource-tree.component.scss']
})
export class ResourceTreeComponent {
  private gridApi;
  private gridColumnApi;

  public rowData;
  public columnDefs;
  public defaultColDef;
  public autoGroupColumnDef;
  public groupDefaultExpanded;
  public getDataPath;

  constructor() {
    this.rowData = [
      {
        orgHierarchy: ['Gucci'],
      },
      {
        orgHierarchy: ['Gucci', 'Via Condotti'],
      },
      {
        orgHierarchy: ['Gucci', 'Via Condotti', 'Interno'],
      },
      {
        orgHierarchy: [
          'Gucci',
          'Via Condotti',
          'Interno',
          'Telecamera 01',
        ],
      },
      {
        orgHierarchy: [
          'Gucci',
          'Via Condotti',
          'Interno',
          'Telecamera 01'
        ],
      },
      {
        orgHierarchy: [
          'Gucci',
          'Via Condotti',
          'Interno',
          'Telecamera 01'
        ],
      },
      {
        orgHierarchy: [
          'Gucci',
          'Via Condotti',
          'Interno',
          'Telecamera 02',
        ],
      },
      {
        orgHierarchy: [
          'Gucci',
          'Via Condotti',
          'Interno',
          'Telecamera 03'
        ],
      },
      {
        orgHierarchy: [
          'Gucci',
          'Via Condotti',
          'Interno',
          'Telecamera 04'
        ],
      },
      {
        orgHierarchy: [
          'Gucci',
          'Via Condotti',
          'Interno',
          'Telecamera 05',
        ],
      },
      {
        orgHierarchy: ['Gucci', 'Via Condotti', 'Esterno', 'Telecamera 03'],
      },
      {
        orgHierarchy: [
          'Gucci',
          'Via Condotti',
          'Esterno',
          'Telecamera 04',
        ],
      },
      {
        orgHierarchy: [
          'Gucci',
          'Via Condotti',
          'Uffici',
          'Telecamera 05',
        ],
      },
      {
        orgHierarchy: [
          'Gucci',
          'Via Condotti',
          'Uffici',
          'Telecamera 06',
        ],
      },
      {
        orgHierarchy: [
          'Gucci',
          'Via Condotti',
          'Uffici',
          'Telecamera 07',
        ],
      },
      ,
      {
        orgHierarchy: [
          'Gucci',
          'Via Condotti',
          'Uffici',
          'Telecamera 08',
        ],
      },
      {
        orgHierarchy: [
          'Gucci',
          'Via Condotti',
          'Uffici',
          'Telecamera 09',
        ],
      },
      {
        orgHierarchy: [
          'Gucci',
          'Via Condotti',
          'Uffici',
          'Telecamera 10',
        ],
      }
    ];
    this.columnDefs = [];
    this.defaultColDef = { flex: 1 };
    this.autoGroupColumnDef = {
      headerName: 'Resources',
      minWidth: 300,
      cellRendererParams: { suppressCount: true },
    };
    this.groupDefaultExpanded = -1;
    this.getDataPath = function (data) {
      return data.orgHierarchy;
    };
  }

  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(
      document.getElementById('filter-text-box').nodeValue
    );
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}
