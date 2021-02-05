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
        orgHierarchy: ['Erica Rogers'],
      },
      {
        orgHierarchy: ['Erica Rogers', 'Malcolm Barrett'],
      },
      {
        orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker'],
      },
      {
        orgHierarchy: [
          'Erica Rogers',
          'Malcolm Barrett',
          'Esther Baker',
          'Brittany Hanson',
        ],
      },
      {
        orgHierarchy: [
          'Erica Rogers',
          'Malcolm Barrett',
          'Esther Baker',
          'Brittany Hanson',
          'Leah Flowers',
        ],
      },
      {
        orgHierarchy: [
          'Erica Rogers',
          'Malcolm Barrett',
          'Esther Baker',
          'Brittany Hanson',
          'Tammy Sutton',
        ],
      },
      {
        orgHierarchy: [
          'Erica Rogers',
          'Malcolm Barrett',
          'Esther Baker',
          'Derek Paul',
        ],
      },
      {
        orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland'],
      },
      {
        orgHierarchy: [
          'Erica Rogers',
          'Malcolm Barrett',
          'Francis Strickland',
          'Morris Hanson',
        ],
      },
      {
        orgHierarchy: [
          'Erica Rogers',
          'Malcolm Barrett',
          'Francis Strickland',
          'Todd Tyler',
        ],
      },
      {
        orgHierarchy: [
          'Erica Rogers',
          'Malcolm Barrett',
          'Francis Strickland',
          'Bennie Wise',
        ],
      },
      {
        orgHierarchy: [
          'Erica Rogers',
          'Malcolm Barrett',
          'Francis Strickland',
          'Joel Cooper',
        ],
      },
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
